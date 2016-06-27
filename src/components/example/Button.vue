<template>
<div class="row box">
  <div class="row">
    <h4 class="ptb-24 mb-8">Buttons</h4>
  </div>
<!--   <div class="btn btn-sm c-aaa">button</div>
  <div class="btn c-aaa">button</div> -->
  <btn type='primary' size='' style='t2'>Button</btn>
  <btn type='success' size='' style='t2'>Button</btn>
  <btn type='delete' size='' style='t2'>Button</btn>
  <btn type='' size='sm' style=''>Button</btn>
  <btn type='' size='lg' style='t2'>Button</btn>
  <div class="hr mtb-24"></div>

  <btn-group type=''>
    <btn type='' size='' style='t2'>Button</btn>
    <btn type='active' size='' style='t2'>Button</btn>
    <btn type='' size='' style='t2'>Button</btn>
  </btn-group>

  <btn-group type='primary'>
    <btn type='active' size='' style='t2'>Button</btn>
    <btn type='' size='' style='t2'>Button</btn>
    <btn type='' size='' style='t2'>Button</btn>
  </btn-group>

  <btn-group type='success'>
    <btn type='' size='' style='t2'>Button</btn>
    <btn type='active' size='' style='t2'>Button</btn>
    <btn type='' size='' style='t2'>Button</btn>
  </btn-group>

  <btn-group type='delete'>
    <btn type='' size='' style='t2'>Button</btn>
    <btn type='active' size='' style='t2'>Button</btn>
    <btn type='' size='' style='t2'>Button</btn>
  </btn-group>

  </div>
</div>
</template>

<script>
import Button from './../lib/Button'
import ButtonGroup from './../lib/ButtonGroup'
export default {
  components: {
    btn: Button,
    'btn-group': ButtonGroup
  }
}
</script>

<style scoped lang='scss'>
.box{
  border: 1px solid #aaa;
  padding: 0 16px;
  padding-bottom: 8px;
}
</style>
