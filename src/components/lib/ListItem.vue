<template>
<div class="list-item">
  <slot></slot>
</div>
</template>
<script>
// import Vue from 'vue'
export default {}
</script>

<style scoped lang='scss'>
.list-item:first-child{
  border-top: 1px solid;
}
.list-item{
  width: 100%;
  padding: 10px 16px;
  border-bottom: 1px solid;
}
</style>
