<!-- A multipurpose seekbar for all seeking -->
<template lang='jade'>
.container(v-bind:class='ns')
  .hover-region(@mousemove='showNextPosHint', @mouseout='removeNextPosHint')
    .positioner
      input.range(type='range' v-model='value' v-bind:step='step' @mousedown='changed' @mouseup='changed' max=100, min=0)
      .on-hover
        .helper(v-bind:class='{hover: hovered, rest: !hovered}')
        .track(@mousemove='showNextPosHint')
          .remaining.right(v-bind:style='remainingStyle')
          .loaded-duration.loaded(v-bind:style='loadStyle')
          .current-duration.current.left(v-bind:style='currentStyle')
          .hove-left-current.hover-left(v-bind:style='leftHoverStyle')
          .hove-right-current.hover-right(v-bind:style='rightHoverStyle')
//- container
//- input
//- helper
//- track
//- loaded
//- left
//- rihgt
//- hover-left
//- hover-right
</template>
<script>
function noop () {}
export default {
  props: {
    ns: {
      type: String,
      default: ''
    },
    step: {
      type: Number,
      default: 0.1
    },
    value: {
      type: Number,
      default: 0
    },
    loaded: {
      type: Number,
      default: 80
    },
    change: {
      type: Number,
      default: 0
    },
    onChange: {
      type: Function,
      default: noop
    },
    lock: Boolean,
    domain: Object,
    range: Object
  },
  data () {
    return {
      w: 0,
      leftHoverPos: 0,
      rightHoverPos: 0,
      hoverPos: 0,
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
        width: this.value + '%'
      }
    },
    pointerStyle: function () {
      return {
        left: this.value + '%'
      }
    },
    loadStyle: function () {
      return {
        width: this.loaded + '%'
      }
    },
    remainingStyle: function () {
      return {
        left: this.value + '%',
        width: (100 - this.value) + '%'
      }
    }
  },
  watch: {},
  methods: {
    changed (e) {
      var x = e.offsetX
      x = (this.limit(x) / this.w) * 100
      this.onChange(this.value)
      this.lock = true
    },
    // update the seek-bar
    showNextPosHint (e) {
      var x = e.offsetX
      x = this.limit(x)
      this.hoverPos = (x / this.w) * 100
      this.hoverPos = (x / this.w) * 100
      if (this.hoverPos >= this.value) {
        this.leftHoverPos = 0
        this.rightHoverPos = this.hoverPos
      } else if (this.hoverPos < this.value) {
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
    incrementCurrent () {
      // update hover hint also
      var val = 0
      if (this.value + this.step >= 100) {
        val = 100
      } else {
        val = this.value + this.step
      }
      this.onChange(val)
      this.value = val
    },
    decrementCurrent () {
      // update hover hint also
      var val = 0
      if (this.value - this.step <= 0) {
        val = 0
      } else {
        val = this.value - this.step
      }
      this.onChange(val)
      this.value = val
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
        self.incrementCurrent()
      }
      if (e.keyCode === 37) {
        self.decrementCurrent()
      }
    }
    var x, y
    window.addEventListener('mousemove', function (e) {
      if (self.lock) {
        // self.onChange(self.value)
        setTimeout(function () {
          if (e.clientX === x && e.clientY === y) {
            self.onChange(self.value)
            // self.lock = 0
          }
        }, 300)
        x = e.clientX
        y = e.clientY
      }
    })
    window.addEventListener('mouseup', function () {
      self.lock = false
    })
    window.addEventListener('mouseout', function () {
      self.lock = false
    })
  }
}
</script>

<style scoped lang='scss'>
$slide-thumb-height: 16px;
input[type=range]{
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
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
  margin: 17px 0;
  transition: all 0.1s ease-out;
}

input[type=range]:active::-webkit-slider-thumb {
  -webkit-appearance: none;
  box-sizing: border-box;
  height: $slide-thumb-height + 6px;
  width: $slide-thumb-height + 6px;
  margin: 14px 0;
  transition: all 0.1s ease-in;
}

input[type=range]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  cursor: pointer;
  height: 50px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  -webkit-appearance: none;
}input[type=range]:focus::-webkit-slider-runnable-track {
  -webkit-appearance: none;
}

/* variables */
$seek-bar-color: transparent;
$track-color: transparent;
$remaining-color: #f1eeee;
$loaded-color: rgba(216, 243, 226, 0.98);
$current-color: #22bb5b;
$hover-left-color: rgba(100,100,100, 0.2);
$hover-right-color: hsla(142, 52%, 78%, 0.9);

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
  height: 50px;
  /* background: violet; */
  background: $seek-bar-color;
  width: 100%;
  
  
  .hover-region{ // update on-hover onhover
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
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

      .on-hover{
        position: absolute;
        width: 100%;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        left: 0;
        /* background: yellow; */
        height: 6px;
        
        .helper{
          position: absolute;
          width: 100%;
          top: 50%;
          -webkit-transform: translateY(-50%);
          -moz-transform: translateY(-50%);
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
            -moz-transform: translate(-50%, -50%);
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
            -moz-transform: translate(0, -50%);
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
            -moz-transform: translate(0, -50%);
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
.helper.rest{
  height: 6px;
  background: transparent;
  border: 1px solid white;
  -moz-transition: background, border 0.2s linear;
}
.helper.hover{
  height: 6px;
  border: 1px solid transparent;
  transition: background, border 0.2s linear;
  -moz-transition: background, border 0.2s linear;
}
</style>
