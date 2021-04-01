import Vue from 'vue'
import App from '../src/test/index.vue'

new Vue({
  el: '#app',
  // render: h => h(App)
  components: { App },
  template: '<App/>'
})
