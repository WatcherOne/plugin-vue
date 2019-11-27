import Hover from './hover-text.vue'

let hoverText = {}

hoverText.install = function (Vue, options) {
  Vue.component(Hover.name, Hover)
}

// 上传插件 npm publish
export default hoverText
