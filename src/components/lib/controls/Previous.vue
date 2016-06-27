<template>
  <div class="control" v-bind:style='style' v-bind:class='className' @click='clicked'>
    <i class="material-icons" v-bind:style='iconStyle'>skip_previous</i>
  </div>
</template>

<script>
function noop () {}
export default {
  // pass audio as props
  props: {
    playing: Boolean,
    h: {
      type: String,
      default: 30
    },
    w: {
      type: String,
      default: 30
    },
    fontSize: {
      type: String,
      default: '1em'
    },
    class: {
      type: String,
      default: ''
    },
    previous: {
      type: Function,
      default: noop
    }
  },
  computed: {
    className: function () {
      return this.class
    },
    style: function () {
      return {
        height: this.h + 'px',
        width: this.w + 'px'
      }
    },
    iconStyle: function () {
      return {
        'line-height': this.h + 'px',
        'font-size': this.fontSize
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    clicked (e) {
      this.previous()
    }
  }
}
</script>

<style scoped lang='scss'>
.control{
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  -webkit-user-select: none;
  i{
    box-sizing: border-box;
  }
}
</style>
