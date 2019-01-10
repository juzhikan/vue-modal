import Vue from 'vue'
import App from './App.vue'
import './normal.css'
import vueModal from './Modal/index'

Vue.use(vueModal)

new Vue({
  render: h => h(App)
}).$mount('#app')