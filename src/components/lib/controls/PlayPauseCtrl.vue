<template>
  <div class="control" v-bind:style='style' v-bind:class='className' @click='clicked'>
    <i class="material-icons" v-show='!playing' v-bind:style='iconStyle'>play_arrow</i>
    <i class="material-icons" v-show='playing' v-bind:style='iconStyle'>pause</i>
  </div>
</template>

<script>
function noop () {}
export default {
  // pass audio as props
  props: {
    playing: Boolean,
    h: {
      type: String,
      default: 30
    },
    w: {
      type: String,
      default: 30
    },
    fontSize: {
      type: String,
      default: '1em'
    },
    class: {
      type: String,
      default: ''
    },
    play: {
      type: Function,
      default: noop
    },
    pause: {
      type: Function,
      default: noop
    }
  },
  computed: {
    className: function () {
      return this.class
    },
    style: function () {
      return {
        height: this.h + 'px',
        width: this.w + 'px'
      }
    },
    iconStyle: function () {
      return {
        'line-height': this.h + 'px',
        'font-size': this.fontSize
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    clicked (e) {
      this.playing ? this.pause() : this.play()
      this.playing = !this.playing
    }
  }
}
</script>

<style scoped lang='scss'>
.control{
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  -webkit-user-select: none;
}
</style>
