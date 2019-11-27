<template>
    <div>
      <h2>开发测试</h2>
      <hoverText :htmlText="false">
        <span style="color:red"> 超过最大长度的问题</span>后续数据
      </hoverText>
    </div>
</template>

<script>
// <!-- 本地开发插件的使用 -->
import Vue from 'vue'
// import hoverText from '../plugin/hover-text.js'
import hoverText from '../../dist/hoverText.js'

Vue.use(hoverText)

export default {
  data () {
    return {
      options: {}
    }
  }
}
</script>
