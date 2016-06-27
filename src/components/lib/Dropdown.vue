<template>
<div v-bind:class='className'>
  <div v-bind:class='activeClass' @click='showList' >
    <p class='filter'>{{value}}</p>
    <i class="down material-icons">keyboard_arrow_down</i>
  </div>
  <!-- <div class="options" v-show='show'> -->
<!--     <div class="filter-input" v-show='filter'>
      <input type="text" v-model='model'>
    </div> -->
<!--     <div class="listy" v-show='filter' >
      <div class="list-group">
        <div class="list-item" v-for="item in data | filterBy model" @click='clicked($index)'>
          {{item.name}}
        </div>
      </div>
    </div> -->
    <div class="list-group" v-show='show'>
      <div class="list-item" v-for="item in data | filterBy model" @click='clicked'>
        {{item.name}}
      </div>
    </div>
  <!-- </div> -->
</div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: [],
      required: true
    },
    class: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      model: '',
      show: false
    }
  },
  computed: {
    className: function () {
      return (this.class + ' ' + 'dropdown').trim()
    },
    activeClass: function () {
      var active = this.show ? 'active' : ''
      return active + ' ' + 'link'
    }
  },
  methods: {
    clicked (e) {
      e.stopPropagation()
      this.show = !this.show
    },
    showList (e) {
      // e.stopPropagation()
      this.show = !this.show
      this.ignore = true
    }
  },
  ready () {
    var self = this
    document.body.addEventListener('click', function () {
      if (!self.ignore) {
        self.show = false
      }
      self.ignore = false
    })
  }
}
</script>

<style scoped lang='scss'>

.link{
  position: relative;
  display: inline-block;
  /* background: teal; */
  /* color: white; */
  line-height: 35px;
  /* padding-left: 6px; */
  -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
  cursor: pointer;
  
  &:hover, &.active{
    /* color: teal; */
    .filter{
      border-bottom: 2px solid teal;
    }
  }
  .filter{
    display: inline-block;
    margin: 0;
    padding: 0px 6px;
    float: left;
    border-bottom: 2px solid transparent;
  }
  i.down{
    line-height: 35px;
    float: left;
    padding-right: 6px;
    font-size: 1.2em;
  }
  i.down ~ .filter{
    margin-right: 0px;
  }

}
/* .options{
  position: absolute;
  top: 50%;
  padding: 8px 0;
  box-shadow: 0 0 10px 0px #aaa;
  background: white;
} */
.list-group{
  position: absolute;
  box-shadow: 0 0 10px 0px #aaa;
  margin: 0;
  padding: 8px 0;
  overflow: hidden;
  background: white;
  z-index: 100;
  top: calc(100% + 10px);
  
  .list-item{
    padding: 5px 12px;
    cursor: default;

    &:hover{
     background: #ddd; 
    }
  }
}
.filter-input{
  box-sizing: border-box;
  position: relative;
  padding: 0 8px;
  margin: 8px 0;
  width: inherit;
  box-sizing: border-box;

  input{
    width: inherit;
    position: relative;
    box-sizing: border-box;
    height: 30px;
    outline: 0;
    border: 1px solid #aaa;
    font-size: 1.1em;
    /* margin: 0; */
    padding: 0 6px;

    &:focus{
      border: 1px solid teal;
    }
  }
}
</style>
