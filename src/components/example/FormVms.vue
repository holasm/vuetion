<template>
<div class="row box">
  <div class="row">
    <h4 class="ptb-24 mb-8">Vms form</h4>
  </div>
  <div class="row">
    <vms-form>
      <div slot='form-head'>
        <div class="row plr-16 f-1_2"><h5>Register with us</h5></div>
      </div>
      <form-group v-for="(key, item) in form" :class="item.class" :name='item.name' :msg='item.msg'>
        <div :is='item.type' :name='item.name' :placeholder='item.name' :model.sync='item.value'></div>
      </form-group>
      <div class="row plr-16 pt-16">
        <btn type='col col sm-6 delete' :click='clear'>Clear</btn>
        <btn type='col sm-6 primary' :click='submit'>SUBMIT</btn>
      </div>
      <br>
      <!-- Todo -->
      <div class="row">
        <br>
        <h6>Radio group</h6>
        <div class="hr"></div>
        <br>  

        <radio-group :value.sync='value'>
          <radio value='male' label='Male'></radio>
          <radio value='female' label='Female' checked='true'></radio>
        <radio-group>
        <br>
        <div class="row">
          Selected: {{value | json}}
        </div>
      </div>
      <br>
      <div class="row">
        <br>
        <h6>Check boxes</h6>
        <div class="hr"></div>
        <br>
        <div is='check' value='Egg' label='Egg' :check-value.sync='checkValue' checked='true'></div>
        <div is='check' value='Tomato' label='Tomato' :check-value.sync='checkValue'></div>
        <div is='check' value='Chowmin' label='Chowmin' :check-value.sync='checkValue' checked='true'></div>
        <br>
        <br>
        <div class="row">
          Selected items: {{checkValue | json}}
        </div>
      </div>
      <div class="row">
        <br>
        <h6>Progress bar</h6>
        <div class="hr"></div>
        <br>
        <input type="text" v-model.sync='progressVal'>
        <div class="hr ct"></div>
        <br>
        <progress :height=10 type='primary' :value.sync='progressVal'></progress>
        <br>
        <progress :height=10 type='delete' :value.sync='progressVal'></progress>
        </div>
      </div>
      <br>
      <p>-Dropdown ♠↑ </p>
      <p>-Slider ♠↑</p>
      <p>-Progress ♠↑</p>
      <p>-Tabs ♠↑</p>
      <p>-Datepicker</p>
    </vms-form>
  </div>
  <br>
</div>
</template>

<script>
import Button from './../lib/Button'
import VmsForm from './../lib/VmsForm'
import InputText from './../lib/InputText'
import InputPassword from './../lib/InputPassword'
import InputRadio from './../lib/InputRadio'
import FormGroup from './../lib/FormGroup'
import RadioGroup from './../lib/RadioGroup'
import Check from './../lib/Check'
import Progress from './../lib/Progress'
export default {
  props: {},
  data () {
    return {
      form: [
        { name: 'firstname', type: 'input-text', value: '', class: 'col lg-6 plr-16', msg: { type: '', content: '' } },
        { name: 'lastname', type: 'input-text', value: '', class: 'col lg-6 plr-16', msg: { type: '', content: '' } },
        { name: 'username', type: 'input-text', value: '', class: 'col lg-6 plr-16', msg: { type: '', content: '' } },
        { name: 'password', type: 'input-password', value: '', class: 'col lg-6 plr-16', msg: { type: '', content: '' } }
      ],
      value: '',
      checkValue: [],
      progressVal: '30'
    }
  },
  watch: {
    value: function (newVal) {
      // console.log(newVal)
    },
    checkValue: function (newVal) {
      // newVal.forEach(function (el) {
      // })
    }
  },
  methods: {
    submit (e) {
      this.form.forEach(function (el) {
        // console.log(el.name, ': ', el.value)
        if (!el.value.trim()) {
          el.msg.type = 'error'
          el.msg.content = 'Empty field'
        }
      })
    },
    clear () {
      this.form.forEach(function (el) {
        el.value = ''
        el.msg.type = ''
        el.msg.content = ''
      })
    }
  },
  components: {
    btn: Button,
    'vms-form': VmsForm,
    'input-text': InputText,
    'form-group': FormGroup,
    'input-password': InputPassword,
    radio: InputRadio,
    'radio-group': RadioGroup,
    Check,
    Progress
  }
}
</script>

<style scoped lang='scss'>
.box{
  border: 1px solid #aaa;
  padding: 0 16px;
  padding-bottom: 8px;
}
</style>
