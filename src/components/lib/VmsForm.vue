<template>
<div class="vms-form" v-bind:class='className'>
<slot name='form-head'></slot>
  <slot></slot>
</div>
</template>

<script>
// import Vue from 'vue'
export default {
  props: {
    size: {
      type: String,
      default: ''
    },
    style: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    className: function () {
      return this.type + ' ' + 'form-' + this.style
    }
  },
  ready () {}
}
</script>

<style scoped lang='scss'>
</style>
