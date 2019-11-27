<template>
  <span
    class="zb-hover-text-box"
    :style="{maxWidth:maxWidth}"
    @mouseover="mouseover"
    @mouseout="mouseout"
    @mousemove="mousemove">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'hoverText',
  props: {
    maxWidth: {
      type: String,
      default: '100px'
    },
    htmlText: {
      type: Boolean,
      default: true
    },
    fontSize: {
      type: Number,
      default: 14
    },
    hoverTextBg: {
      type: String,
      default: '#333'
    },
    hoverTextColor: {
      type: String,
      default: '#fff'
    }
  },
  data () {
    return {}
  },
  methods: {
    // 文字超出部分显示...鼠标经过浮层显示全部文字
    mouseover ($e) {
      const dom = $e.currentTarget
      const text = this.htmlText ? dom.innerHTML : dom.innerText
      const span = document.createElement('span')
      span.style.cssText = `font-size:${this.fontSize}px;padding:0;height:0;overflow:hiddren`
      span.setAttribute('id', 'zb-span')
      document.body.appendChild(span)
      document.querySelector('#zb-span').innerHTML = text
      let spanWidth = span.offsetWidth
      document.body.removeChild(span)
      if (spanWidth > dom.offsetWidth) {
        const bgObj = document.createElement('div')
        bgObj.style.cssText = `position:absolute;top:${$e.clientY + 10}px;left:${$e.clientX}px;color:${this.hoverTextColor};background:${this.hoverTextBg};max-width:400px;border-radius:5px;padding:10px;display:inline-block;font-size:12px;z-index:9999`
        bgObj.setAttribute('id', 'zb-bgObj')
        document.body.appendChild(bgObj)
        document.querySelector('#zb-bgObj').innerHTML = text
      }
    },
    // 鼠标移出浮层消失
    mouseout () {
      let bgObj = document.querySelector('#zb-bgObj')
      if (bgObj) {
        document.body.removeChild(bgObj)
      }
    },
    // 鼠标移动浮层移动
    mousemove ($e) {
      const left = $e.clientX
      const top = $e.clientY
      const bgObj = document.querySelector('#zb-bgObj')
      if (bgObj) {
        bgObj.style.top = `${top + 10}px`
        bgObj.style.left = `${left}px`
      }
    }
  }
}
</script>

<style scoped>
.zb-hover-text-box {
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
