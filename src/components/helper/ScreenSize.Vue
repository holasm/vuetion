<template>
<div class="row box">
  <div class="row">
    <h4 class="ptb-24 mb-8">Show/hide item depending on screen size change</h4>
  </div>
  <div class="col c-f5 ptb-16 tac xxs-hide-up"><h6>visible within</h6> xxs - <~ - 332</div>
  <div class="col c-f5 ptb-16 tac xs-hide-down xs-hide-up"><h6>visible within</h6> xs - 332 - 480</div>
  <div class="col c-f5 ptb-16 tac sm-hide-down sm-hide-up"><h6>visible within</h6> sm - 480 - 768</div>
  <div class="col c-f5 ptb-16 tac md-hide-down md-hide-up"><h6>visible within</h6> md - 768 - 992</div>
  <div class="col c-f5 ptb-16 tac lg-hide-down lg-hide-up"><h6>visible within</h6> lg - 992 - 1200</div>
  <div class="col c-f5 ptb-16 tac xl-hide-down xl-hide-up"><h6>visible within</h6> xl - 1200 - 1600</div>
  <div class="col c-f5 ptb-16 tac xxl-hide-down"><h6>visible within</h6> xxl - 1600 - ~></div>
  <div class="row pt-8">
  <p>
    *-hide-up makes the element hidden when screen size is upper than *
  </p>
  <p> 
    *-hide-down makes the element hidden when screen size is lower than *
  </p>
  </div>
</div>
</template>

<script>
// import Vue from 'vue'
export default {}
</script>

<style scoped lang='scss'>
.box{
  border: 1px solid #aaa;
  padding: 0 16px;
  padding-bottom: 8px;
}
</style>
