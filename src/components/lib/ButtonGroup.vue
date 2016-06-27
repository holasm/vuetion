<template>
<div class="btn-group" v-bind:class='className'>
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
    type: {
      type: String,
      default: ''
    },
    style: {
      type: String,
      default: ''
    }
  },
  computed: {
    className: function () {
      return this.type + ' ' + 'btn-group-' + this.size + ' ' + 'btn-group-' + this.style
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
