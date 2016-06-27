<template>
  <div id="progress" v-bind:style='style' v-bind:class='className'>
    <div id="outer" v-bind:style='progressStyle'>
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: String,
      default: 20,
      twoWay: true
    },
    type: String,
    class: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 20
    }
  },
  computed: {
    className: function () {
      return this.class + ' ' + this.type
    },
    style: function () {
      return {
        height: this.height + 'px'
      }
    },
    progressStyle: function () {
      var value = parseInt(this.value.trim())
      // console.log(typeof value, value)
      if (!value) {
        return {
          width: '0%'
        }
      }
      if (value >= this.max) {
        console.log(value, 'max')
        return {
          width: '100%'
        }
      }
      if (value <= this.min) {
        return {
          width: '0%'
        }
      }
      return {
        width: value + '%'
      }
    }
  }
}
</script>

<style scoped lang='scss'>
#progress{
  position: relative;
  width: 100%;
  #outer{
    position: absolute;
    height: 100%;
  }
  
  &.primary{
    background: teal;
    #outer{
      background: orange;
    }
  }
  &.delete{
    background: crimson;
    #outer{
      background: teal;
    }
  }
}

</style>
