<template>
  <input type="password" v-bind:class='className' class="form-control" :placeholder='placeholde' :name ='name' :required='required' v-model='model'
    @focus='foucus'
    @blur='blur'
    @keyup='keyup'
  >
</template>

<script>
// import Vue from 'vue'
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: String,
      default: false
    },
    class: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      focused: false
    }
  },
  computed: {
    className: function () {
      return (this.class + ' ' + 'form-control').trim()
    }
  },
  watch: {
    model: function (newVal, oldVal) {
      if (newVal === '' && oldVal !== '' && !this.focused) {
        console.log(newVal)
        this.$parent.hideLabel()
      }
    }
  },
  methods: {
    foucus (e) {
      this.$parent.focused(e)
      this.focused = true
    },
    blur (e) {
      this.$parent.blurred(e)
      this.focused = false
    },
    keyup (e) {
      this.$parent.keyup(e, this)

      // do the validation here
    }
  },
  ready () {
    this.$el.setAttribute('placeholder', this.placeholder)
    this.$el.setAttribute('name', this.name)
    this.$el.setAttribute('required', this.required)
  }
}
</script>

<style scoped lang='scss'>
</style>
