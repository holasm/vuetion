<template>
<div class="btn" v-bind:class='className' @click='clicked'>
  <slot></slot>
</div>
</template>

<script>
// import Vue from 'vue'

function noop () {}
export default {
  props: {
    size: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    style: {
      type: String,
      default: ''
    },
    click: {
      type: Function,
      default: noop
    }
  },
  computed: {
    className: function () {
      return this.type + ' ' + 'btn-' + this.size + ' ' + 'btn-' + this.style
    }
  },
  methods: {
    clicked (e) {
      this.click(e)
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
