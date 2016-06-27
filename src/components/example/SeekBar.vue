<template>
<div class="row box">
  <div class="row">
    <h4 class="ptb-24 mb-8">Seekbar</h4>
  </div>
  <br>
  <div class="row">
    <div class="row">
      <div class="progress">{{Math.round(value * 100) / 100}}</div>
      <div class="progress">{{progress}}s</div>
      <div class="max">{{max}}</div>
    </div>
    <seek-bar :value.sync='value' :lock.sync='lock' :on-change='changed'></seek-bar>
     <!-- :domain:'{max:10, min: 50}' :range='{max: 20, min: 80}' -->
  </div>
</div>
</template>
<!-- 
##controls##
play
pause
next
 -->
<script>
import SeekBar from './../lib/SeekBar'
export default {
  // pass audio as props
  data () {
    return {
      value: 20,
      max: 100,
      min: 0,
      progress: 0,
      audio: {},
      lock: false
    }
  },
  watch: {
    value: function (newVal) {
      this.progress = Math.round(newVal * this.audio.audio.duration) / 100
    }
  },
  methods: {
    update (val) {
      if (this.audio.audio) {
        this.audio.audio.currentTime = this.audio.audio.duration * val / 100
        this.value = val
        this.play()
      }
    },
    changed (to) {
      if (this.audio.audio) {
        this.lock = true
        this.update(to)
      }
    },
    play () {
      var audio = this.audio.audio
      audio.play()
    }
  },
  ready () {
/*
    var self = this
    self.audio.audio = new window.Audio('http://2015.downloadming1.com/indian%20pop/Dj%20Waley%20Babu%20(ft.%20Aastha%20Gill)%20-%20Badshah%20(2015)/01%20-%20Dj%20Waley%20Babu%20(ft.%20Aastha%20Gill)%20-%20Badshah%20-%20DownloadMing.SE.mp3')
    // self.audio.audio.play()
    self.audio.audio.volume = 0.8
    // create a audio library
    // var oldVal, newVal
    self.audio.audio.onprogress = function () {
      if (!isNaN(self.audio.audio.duration)) {}
    }

    // update progress bar
    setInterval(function () {
      if (self.audio.audio) {
        // console.log(self.audio.audio.duration, self.audio.canplaythrough)
        if (!isNaN(self.audio.audio.duration) && !self.lock) { //  && self.audio.canplaythrough
          self.value = self.audio.audio.currentTime / self.audio.audio.duration * 100
        }
        if (self.audio.audio.seekable) {
          // console.log(self.audio.audio.seekable.end(self.audio.audio.seekable.length - 1) / self.audio.audio.duration)
        }
      }
    }, 10)
    // self.audio.audio.addEventListenre('canplaythrough', function () {
    //   self.audio.canplaythrough = true
    // }
    // audio.seekable.end(audio.seekable.length - 1) / audio.duration
    // canplay

    window.App.Audio = self
*/
  },
  components: {
    'seek-bar': SeekBar
  }
}
</script>

<style scoped lang='scss'>
.box{
  border: 1px solid #aaa;
  padding: 0 16px;
  padding-bottom: 8px;
}
.progress{
  display: inline-block;
  width: 50px;
}
.max{
  width: 50px;
  display: inline-block;
  float: right;
  text-align: right;
}
</style>
