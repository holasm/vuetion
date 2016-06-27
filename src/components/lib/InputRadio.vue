<template>
<div class="block">
  <span class="radio" @click='click'>
    <input type="radio" v-model='checked' v-bind:value='value' v-bind:disabled='disabled'>
    <span id="inner" v-bind:class='classNameInner'></span>
  </span>
  <span class="label" @click='click'>{{label}}</span>
  </div>
</template>

<script>
// import Vue from 'vue'

// function noop () {}
export default {
  props: {
    checked: {
      type: String,
      default: false
    },
    disabled: {
      type: String,
      default: ''
    },
    value: {
      required: true
    },
    class: {
      type: String,
      default: ''
    },
    label: String
  },
  computed: {
    className: function () {
      return this.class
    },
    classNameInner: function () {
      return this.checked ? 'active' : ''
    }
  },
  methods: {
    click (e) {
      e.preventDefault()
      for (var i = this.$parent.radio.length - 1; i >= 0; i--) {
        this.$parent.radio[i].checked = false
      }
      this.checked = true
      this.$parent.setValue(this.value)
    }
  },
  ready () {
    this.$parent.radio.push(this)
    if (this.checked) {
      this.$parent.setValue(this.value)
    }
  }
}
</script>

<style scoped lang='scss'>
.block{
  /* background: green; */
  display: inline-block;
}
span.label{
  position: relative;
  line-height: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 10px;
  cursor: default;
  -webkit-user-select: none;
}
span.radio{
  box-sizing: border-box;
  margin: 0 8px;
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #aaa;
  top: 2px;
  transition: box-shadow 0.3s linear;
  -webkit-user-select: none;
  
  input{
    display: none;
  }
  &.active{
    border: 1px solid teal;
    background: #eee;
  }
  &:hover{
    /* box-shadow: inset 1px 1px 1px 0px #e3e3e3,inset -1px -1px 1px 0px #e3e3e3; */
    cursor: pointer;
    transition: box-shadow 0.3s linear;
  }
  
  span#inner{
    position: absolute;
    width: 0px;
    height: 0px;
    display: inline-block;
    box-sizing: border-box;
    /* border: 1px solid white; */
    left: 1px;
    top: 1px;
    border-radius: 100%;
    /* transform: translateX(-50%); */
    background: #aaa;
    transition: background 0.2s linear;
  }

  span#inner.active{
    background: green;
    border: 1px solid #eee;
    width: 10px;
    height: 10px;
    transition: background 0.2s linear;
  }
}
</style>
