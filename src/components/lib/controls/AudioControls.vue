<template>
<div class="audio-controls">
  <span class="previous-btn">
    <Previous h='40' w='40' class='previous' font-size='2em' :previous='previous'></Previous>
  </span>
  <span class="play-btn">
    <play-pause h='50' w='50' font-size='2.8em' class='play' :play='play' :pause='pause'></play-pause>
  </span>
  <span class="next-btn">
    <next h='40' w='40' class='next' font-size='2em' :next='next'></next>
  </span>
</div>
</template>

<script>
import PlayPauseCtrl from './PlayPauseCtrl'
import Next from './Next'
import Previous from './Previous'
export default {
  props: {
    fn: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {}
  },
  methods: {
    play () {
      if (this.fn.play) {
        this.fn.play()
      }
    },
    pause () {
      if (this.fn.pause) {
        this.fn.pause()
      }
    },
    next () {
      if (this.fn.next) {
        this.fn.next()
      }
    },
    previous () {
      if (this.fn.previous) {
        this.fn.previous()
      }
    }
  },
  components: {
    'play-pause': PlayPauseCtrl,
    Next,
    Previous
  }
}
</script>

<style lang='scss'>
.audio-controls{
  display: inline-block;
  position: relative;
  height: 50px;
  overflow: hidden;
  border-radius: 2px;
  float: left;
  /* border: 1px solid #e3e3e3; */
  /* padding: 0 16px; */
}

.previous, .next, .play{
  box-sizing: border-box;
  border-radius: 50%;
  margin: 0 4px;
  position: relative;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
}

span.play-btn{
  position: relative;
  height: 100%;
  float: left;
}
span.previous-btn, span.next-btn{
  position: relative;
  padding: 10px 0;
  height: 100%;
  float: left;
}
</style>
