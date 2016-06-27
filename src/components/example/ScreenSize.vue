<template>
<div class="row box">
  <div class="row head">
    <h6 class="">Screen resize hint</h6><span class="vr">|</span><span class="size">Screen-size : {{height}} - {{width}}</span>
    <span class="vr">|</span>
    <span class="show-hide">
      <span class="ptb-8 tac xxs-hide-up"><h6>visible within</h6> xxs - <~ - 332</span>
      <span class="ptb-8 tac xs-hide-down xs-hide-up">xs - 332 - 480</span>
      <span class="ptb-8 tac sm-hide-down sm-hide-up">sm - 480 - 768</span>
      <span class="ptb-8 tac md-hide-down md-hide-up">md - 768 - 992</span>
      <span class="ptb-8 tac lg-hide-down lg-hide-up">lg - 992 - 1200</span>
      <span class="ptb-8 tac xl-hide-down xl-hide-up">xl - 1200 - 1600</span>
      <span class="ptb-8 tac xxl-hide-down">xxl - 1600 - ~></span>
    </span>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      height: '0px',
      width: '0px'
    }
  },
  methods: {
    updateSize () {
      var style = window.getComputedStyle(document.body, null)
      this.height = style.height
      this.width = style.width
    }
  },
  ready () {
    var self = this
    this.updateSize()
    window.addEventListener('resize', function () {
      self.updateSize()
    })
  }
}
</script>

<style scoped lang='scss'>
.box{
  border: 1px solid #aaa;
  padding: 0 16px;
}
.head > h6{
  padding: 4px 0;
  display: inline-block;
}
.size{
  color: crimson;
}
.vr{
  padding: 0 16px;
}
</style>
