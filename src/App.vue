<template>
<div class="layout">
  <screen-size>123</screen-size>
  
  <dropdown-exp>123</dropdown-exp>
  <controls></controls>
  <div is='seek-bar'></div>
  <div is='side-bar-example'></div>
  <div is='form-vms'></div>
  <div is='button'></div>
  <show-hide-col></show-hide-col>
</div>
</template>

<script>
import Vue from 'vue'
import vuenic from './install'
vuenic.install(Vue)

export default {
  components: {
    'show-hide-col': Vue.ShowHideCol,
    'button': Vue.Button,
    'form-vms': Vue.FormVms,
    'side-bar-example': Vue.SideBarExample,
    'seek-bar': Vue.SeekBar,
    'screen-size': Vue.ScreenSize,
    'controls': Vue.Controls,
    'dropdown-exp': Vue.DropdownExp
  },
  ready () {}
}
</script>

<style lang='scss'>
@import './styles/sass/main';
.box{
  margin-top: 14px;
  border: 1px solid #aaa;
  padding: 0 16px;
  padding-bottom: 8px;
}
</style>
