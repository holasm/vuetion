<template>
<div class="row box">
  <div class="row">
    <h4 class="ptb-24 mb-8">Sidebar</h4>
  </div>
  <div class="row">
    <side-bar :show.sync='show' :layer='true' side='left' width='250'>
      <div slot='control'><btn @click='toggleSidebar'>{{info}}</btn></div>  
      <div slot='container'>
        <div class="container">
          <list-group>
            <list-item><a href="#">Item 1</a></list-item>
            <list-item><a href="#">Item 1</a></list-item>
            <list-item><a href="#">Item 1</a></list-item>
            <list-item><a href="#">Item 1</a></list-item>
            <list-item><a href="#">Item 1</a></list-item>
          </list-group>
        </div>
      </div>  
    </side-bar>
  </div>
</div>
</template>

<script>
import Button from './../lib/Button'
import SideBar from './../lib/SideBar'
import ListGroup from './../lib/ListGroup'
import ListItem from './../lib/ListItem'
export default {
  data () {
    return {
      show: false,
      info: 'Show'
    }
  },
  watch: {
    // this updates the button
    show: function (newVal) {
      if (newVal) {
        this.info = 'Hide'
      } else {
        this.info = 'Show'
      }
    }
  },
  methods: {
    toggleSidebar (e) {
      this.show = !this.show
    }
  },
  components: {
    'btn': Button,
    'side-bar': SideBar,
    'list-group': ListGroup,
    'list-item': ListItem
  }
}
</script>

<style scoped lang='scss'>
.box{
  border: 1px solid #aaa;
  padding: 0 16px;
  padding-bottom: 8px;
}
.container{
  position: relative;
  width: 100%;
  height: 100%;
  /* background: red; */
  padding: 16px;
}
</style>
