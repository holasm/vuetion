<template lang='jade'>
.container(v-bind:class='ns')
  .hover-region(@mousedown='setPointer', @mouseup='setPointerDelayed' @mousemove='showNextPosHint', @mouseout='removeNextPosHint')
    .positioner
      //- input.range(type='range' v-model='range' @mousedown='setPointer')
      .on-hover-thick
        .helper(v-bind:class='{hover: hovered, rest: !hovered}')
        .track(@mousemove='showNextPosHint')
          .remaining.right(v-bind:style='remainingStyle')
          .loaded-duration.loaded(v-bind:style='loadStyle')
          .current-duration.current.left(v-bind:style='currentStyle')
          .pointer(@mouseup='stopPropagation', @mousemove='stopPropagation', v-bind:style='pointerStyle')
          .hove-left-current.hover-left(v-bind:style='leftHoverStyle')
          .hove-right-current.hover-right(v-bind:style='rightHoverStyle')

</template>
<script>
// import Vue from 'vue'
export default {
  props: {
    ns: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      w: 0,
      currentPos: 50, // add to props
      loadedPos: 0, // add to props
      leftHoverPos: 0, // add to props
      rightHoverPos: 0, // add to props
      hoverPos: 0,
      step: 5,
      range: this.currentPos,
      hovered: false
    }
  },
  computed: {
    leftHoverStyle: function () {
      return {
        width: this.leftHoverPos + '%'
      }
    },
    rightHoverStyle: function () {
      return {
        width: this.rightHoverPos + '%'
      }
    },
    currentStyle: function () {
      return {
        width: this.currentPos + '%'
      }
    },
    pointerStyle: function () {
      return {
        left: this.currentPos + '%'
      }
    },
    loadStyle: function () {
      return {
        width: this.loadedPos + '%'
      }
    },
    remainingStyle: function () {
      return {
        left: this.currentPos + '%',
        width: (100 - this.currentPos) + '%'
      }
    }
  },
  watch: {
    range: function (newVal) {
      this.currentPos = newVal
    },
    currentPos: function (newVal) {
      this.range = newVal
    }
  },
  methods: {
    setPointer (e) {
      e.stopPropagation()
      this.currentPos = this.hoverPos
    },
    setPointerDelayed (e) {
      console.log(this.range)
      var self = this
      this.$nextTick(function () {
        console.log(self.range)
      })
    },
    // update the seek-bar
    showNextPosHint (e) {
      var x = e.offsetX
      x = this.limit(x)
      this.hoverPos = (x / this.w) * 100
      this.hoverPos = (x / this.w) * 100
      if (this.hoverPos >= this.currentPos) {
        this.leftHoverPos = 0
        this.rightHoverPos = this.hoverPos
      } else if (this.hoverPos < this.currentPos) {
        this.rightHoverPos = 0
        this.leftHoverPos = this.hoverPos
      }
      this.hovered = true
    },
    limit (x) {
      if (x <= 0) {
        x = 0
      } else if (x > this.w) {
        x = this.w
      }
      return x
    },
    removeNextPosHint () {
      this.leftHoverPos = 0
      this.rightHoverPos = 0
      this.hovered = false
    },
    setWidth () {
      var el = this.$el.querySelector('.track')
      var style = window.getComputedStyle(el, null)
      if (style.width.slice(-2) === 'px') {
        this.w = style.width.slice(0, -2)
        console.info('gathered seek-bar track width -> ', this.w)
      } else {
        throw new Error('could not calculate seek-bar track width')
      }
    },
    stopPropagation (e) {
      e.stopPropagation()
      console.log(e)
    },
    incrementCurrentPos () {
      // update hover hint also
      var val = 0
      if (this.currentPos + this.step >= 100) {
        val = 100
      } else {
        val = this.currentPos + this.step
      }
      this.currentPos = val
    },
    decrementCurrentPos () {
      // update hover hint also
      var val = 0
      if (this.currentPos - this.step <= 0) {
        val = 0
      } else {
        val = this.currentPos - this.step
      }
      this.currentPos = val
    }
  },
  ready () {
    var self = this
    this.setWidth()
    window.addEventListener('resize', function () {
      self.setWidth()
    })

    window.onkeyup = function (e) {
      if (e.keyCode === 39) {
        self.incrementCurrentPos()
      }
      if (e.keyCode === 37) {
        self.decrementCurrentPos()
      }
    }
  }
}
</script>

<style scoped lang='scss'>
$slide-thumb-height: 20px;
input[type=range]{
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  outline: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 6px;
  z-index: 6;
  background: transparent;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  box-sizing: border-box;
  height: $slide-thumb-height;
  width: $slide-thumb-height;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 5px #aaa;
  background: #ffffff;
  border: 1px solid #aaa;
  margin: 40px 0;
}

input[type=range]:active::-webkit-slider-thumb {
  -webkit-appearance: none;
  box-sizing: border-box;
  height: $slide-thumb-height + 30px;
  width: $slide-thumb-height + 30px;
  margin: 20px 0;
}

input[type=range]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  cursor: pointer;
  height: 100px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  -webkit-appearance: none;
}input[type=range]:focus::-webkit-slider-runnable-track {
  -webkit-appearance: none;
}

/* variables */
$seek-bar-color: transparent;
$track-color: transparent;
$remaining-color: #d3d3d3;
$loaded-color: red;
$current-color: teal;
$hover-left-color: green;
$hover-right-color: #bbb;

/* 
 * content
 *
 * 1.1 - seekbar hove hint
 * 1.2 - loaded-duration hint
 * 1.3 - 
 */
.container{
  box-sizing: border-box;
  position: relative;
  height: 100px;
  /* background: violet; */
  background: $seek-bar-color;
  width: 100%;
  
  
  .hover-region{ // update on-hover-thick onhover
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    border-radius: 4px;
    /* background: aquamarine; */
    cursor: pointer;
    box-sizing: border-box;
    padding: 0 8px;
    
    .positioner{
      position: relative;
      width: 100%;
      height: 100%;
      /* 1.1 */

      .on-hover-thick{
        position: absolute;
        width: 100%;
        top: 50%;
        -webkit-transform: translateY(-50%);
        left: 0;
        /* background: yellow; */
        height: 6px;
        
        .helper{
          position: absolute;
          width: 100%;
          top: 50%;
          -webkit-transform: translateY(-50%);
          z-index: 10;
        }
        .track{
          position: absolute;
          width: inherit;
          height: inherit;
          background: $track-color;

          .remaining{
            position: absolute;
            width: 100%;
            height: 100%;
            background: $remaining-color;
            pointer-events: none;
          }
          /*
           * 1.2
           * Update {{width}} to show loaded duration 
           */
          .loaded-duration{
            position: absolute;
            height: inherit;
            /* width: 80%; */
            background: $loaded-color;
            width: 0;
          }

          /*
           * 1.3
           * Update {{width}} to show current duration 
           */
          .current-duration{
            position: relative;
            top: 0;
            height: inherit;
            /* change width to show progress */
            z-index: 9;
            background: $current-color;
            /* width: 0; */
            /* width: 50%;  */
            
          }//end current-duration
          .pointer{
            position: absolute;
            /* left: 100%; */
            top: 50%;
            width: 13px;
            height: 13px;
            background: #F7F5F5;
            border: 1px solid #c1c1c1;
            border-radius: 10px;
            -webkit-transform: translate(-50%, -50%);
            z-index: 10;
          }//end pointer
          
          /* 
           * 1.4
           * hover hint on track left of current duration
           * update {{width}}
           */
          .hove-left-current{
            position: absolute;
            left: 0;
            top: 50%;
            -webkit-transform: translate(0, -50%);
            height: inherit;
            z-index: 9;
            background: $hover-left-color;
            width: 0%;
          }
          
          /* 
           * 1.5
           * hover hint on track right of current duration
           * update {{width}}
           */
          .hove-right-current{
            position: absolute;
            height: inherit;
            left: 0;
            top: 50%;
            -webkit-transform: translate(0, -50%);
            z-index: 1;
            background: $hover-right-color;
            width: 0;
          }    
        }//end seek-background
        
      }
    }
  }//end hover-region
}

.container{
  border: 1px solid #e3e3e3;
}
.track{
  border-radius: 5px;
  overflow: hidden;
}
.current{}
.rest{
  height: 6px;
  background: transparent;
  border: 1px solid white;
  transition: background, border 0.2s linear;
}
.hover{
  height: 6px;
  border: 1px solid transparent;
  transition: background, border 0.2s linear;
}
</style>
