import ShowHideCol from './components/example/ShowHideCol'
import Button from './components/example/Button'
import FormVms from './components/example/FormVms'
import SideBarExample from './components/example/SideBarExample'
import SeekBar from './components/example/SeekBar'
import ScreenSize from './components/example/ScreenSize'
import Controls from './components/example/Controls'
import DropdownExp from './components/example/DropdownExp'

export const components = {
  ShowHideCol,
  Button,
  FormVms,
  SideBarExample,
  SeekBar,
  ScreenSize,
  Controls,
  DropdownExp
}

export default {
  install (Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name])
    })
    // Object.keys(directives).forEach((name) => {
    //   Vue.directive(name, directives[name])
    // })
  }
}
