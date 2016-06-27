<template>
<div class="radio-group">
  <slot></slot>
</div>
</template>

<script>
// import Vue from 'vue'

// function noop () {}
export default {
  props: {
    value: {
      type: String,
      twoWay: true
    }
  },
  data () {
    return {
      radio: []
    }
  },
  methods: {
    setValue (value) {
      this.value = value
    }
  }
}
</script>

<style scoped lang='scss'>
.radio-group{
  /* background: teal; */
}
</style>
