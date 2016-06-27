<template>
<slot name='control'></slot>
<div id="sidebar-container" v-bind:class='className' v-bind:style='style'>
  <slot name='container'></slot>
</div>
<div class="calin" v-if='layer' v-bind:class='className' @click='toggleSidebar'></div>
</template>
<script>
// import Vue from 'vue'
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    layer: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: 'left'
    },
    width: {
      type: String,
      default: '250'
    }
  },
  computed: {
    className: function () {
      return {
        hide: !this.show
      }
    },
    style: function () {
      var left = this.side === 'left' ? 1 : 0
      var style = {}
      if (left) {
        style['left'] = 0
      } else {
        style['right'] = 0
      }
      style['width'] = this.width + 'px'
      return style
    }
  },
  methods: {
    toggleSidebar (e) {
      this.show = !this.show
    }
  },
  ready () {
    // console.log(this.side)
  }
}
</script>

<style scoped lang='scss'>
#sidebar-container{
  background: white;
  position: fixed;
  top: 0;
  /* left: 0; */
  width: 250px;
  height: 100%;
  overflow-y: auto;
  z-index: 200;
  box-shadow: 0 0 12px #aaa;
}
.calin{
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
