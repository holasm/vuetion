<template>
<div class="row box">
  <div class="row">
    <h4 class="ptb-24 mb-8">Controls</h4>
  </div>
  <br>
  <div class="row">
  <vms-form type='col sm-3 form'>
    <div slot='form-head'>
      <h6>Search the list</h6>
    </div>
    <form-group name='search'>
      <input-text :model.sync='filter' placeholder='search'></input-text>
    </form-group>
  </vms-form>
  <mdl-form type='col sm-3 form'>
    <div slot='form-head'>
      <h6>Search the list</h6>
    </div>
    <form-group name='search'>
      <input-text :model.sync='filter' placeholder='search'></input-text>
    </form-group>
  </mdl-form>
  <ul class="list-group col sm-12">
    <li v-for="item in data | filterBy filter" class="list-item">
    {{item.name}}
    <div class="cir-30 pull-right"></div>
    </li >
  </ul>
  </div>
  <br>
  <br>
  <div class="row">
    <audio-controls :fn='fn'></audio-controls>
    <span class="info">__{{info}}__</span>
  </div>
</div>
</template>

<script>
import AudioControls from './../lib/controls/AudioControls'
import InputText from './../lib/InputText'
import FormGroup from './../lib/FormGroup'
import VmsForm from './../lib/VmsForm'
import MdlForm from './../lib/MdlForm'
export default {
  // pass audio as props
  data () {
    return {
      fn: {
        play: this.play,
        pause: this.pause,
        next: this.next,
        previous: this.previous
      },
      info: 'paused',
      filter: '',
      data: [
        {name: 'tomato'},
        {name: 'butter'},
        {name: 'garlic'},
        {name: 'ginger'},
        {name: 'jam'},
        {name: 'cheese'}
      ]
    }
  },
  methods: {
    play () {
      // console.log('play')
      this.info = 'playing'
      // window.App.Audio.audio.audio = new window.Audio('http://2015.downloadming1.com/indian%20pop/Dj%20Waley%20Babu%20(ft.%20Aastha%20Gill)%20-%20Badshah%20(2015)/01%20-%20Dj%20Waley%20Babu%20(ft.%20Aastha%20Gill)%20-%20Badshah%20-%20DownloadMing.SE.mp3')
      // window.App.Audio.audio.audio.play()
    },
    pause () {
      // console.log('pause')
      this.info = 'paused'
      // window.App.Audio.audio.audio.pause()
    },
    next () {
      // console.log('next')
      this.info = 'play_next'
    },
    previous () {
      // console.log('previous')
      this.info = 'play_previous'
    }
  },
  ready () {},
  components: {
    'audio-controls': AudioControls,
    'input-text': InputText,
    'form-group': FormGroup,
    'vms-form': VmsForm,
    'mdl-form': MdlForm
  }
}
</script>

<style lang='scss'>
.form-control{
  margin: 0;
}
.cir-30{
  top: 8px;
  margin: 0 12px;
}
.list-group{
  margin: 0;
  margin-top: 10px;
  padding: 0 16px;
  /* display: block; */
  /* width: 100%; */
  li.list-item{
    position: relative;
    list-style: none;
    padding: 12px 16px;
    border-bottom: 1px solid #e3e3e3;
    display: block;
    transition: background 0.1s;

    &:hover{
      background: #e3e3e3;
      transition: background 0.1s;
    }
    &:active{
      background: #aaa;
      transition: background 0.2s;
    }
  }
  li.list-item:last-child{
    border: none;
  }
}
.box{
  position: relative;
  border: 1px solid #aaa;
  padding: 0 16px;
  padding-bottom: 8px;
}
.info{
  float: left;
  display: inline-block;
  height: 50px;
  line-height: 45px;
  padding: 0 16px;
}
@media (max-width: 992px){
.next-btn, .previous-btn{
  display: none;
  padding: 0;
  margin: 0;
}
.audio-controls{
  padding: 0;
  border: none;
}
}
@media (min-width: 993px){
.audio-controls{
  padding: 0 16px;
  border: 1px solid #e3e3e3;
}
}
</style>
