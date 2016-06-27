<template>
  <div v-bind:class='className'>
    <label for="" v-bind:class='labelClassName'>{{name}} <span v-if='msg.content'>: {{msg.content}}</span></label>
    <slot></slot>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  props: {
    class: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    msg: {
      type: Object,
      default: function () {
        return { content: '', type: '' }
      }
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    className: function () {
      var focused = this.show ? 'focused' : 'blur'
      return (this.class + ' ' + 'form-group' + ' ' + focused + ' ' + this.msg.type).trim()
    },
    labelClassName: function () {
      var hide = !this.show ? 'hide' : ''
      return (hide + ' ' + this.msg.type).trim()
    }
  },
  watch: {
    msg: {
      handler: function (newVal, oldVal) {
        console.log(newVal)
        if (newVal.type !== '') {
          this.show = true
        }
        if (newVal.type === '') {
          this.show = false
        }
      },
      deep: true
    }
  },
  methods: {
    focused (e) {
      this.show = true
    },
    blurred (e) {
      // empty field with no message
      if (!e.target.value.trim() && this.msg.type === '') {
        this.show = false
      }
    },
    keyup (e, input) {
      if (this.msg.type === 'error') {
        this.msg.type = ''
        this.msg.content = ''
        this.$nextTick(function () {
          this.show = true
        })
      }
      if (this.$el.value) {
        this.show = true
      }
    },
    hideLabel () {
      this.show = false
    }
  },
  ready () {}
}
</script>

<style scoped lang='scss'>
.hide{
  opacity: 0;
}
</style>
