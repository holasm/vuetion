<template>
<div class="row box">
  <div class="row">
    <h4 class="ptb-24 mb-8">Controls</h4>
  </div>
  <div class="row main">
  <div class="drop">
    <dropdown :filter='false' :data='data' :value='value'></dropdown>
  </div>
  <div class="drop">
    <dropdown :filter='false' :data='data' :value='value'></dropdown>
  </div>
  </div>
</div>
</template>

<script>
import Dropdown from './../lib/Dropdown'
export default {
  // pass audio as props
  data () {
    return {
      value: 'All links',
      data: [
        {name: 'tomato sauce / chili sauce'},
        {name: 'butter'},
        {name: 'garlic'},
        {name: 'ginger'},
        {name: 'jam'},
        {name: 'jam'},
        {name: 'cheese'}
      ]
    }
  },
  methods: {},
  ready () {},
  components: {
    Dropdown
  }
}
</script>

<style scoped lang='scss'>
.box{
  padding-bottom: 32px;
  overflow: visible;
  z-index: 10;
}
.main{
  overflow: visible;
  padding-bottom: 50px;
}
.drop{
  float: left;
  /* position: relative; */
  margin: 0px 10px;
  padding: 8px 0 ;
}
</style>
