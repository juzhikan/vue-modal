import Vue from 'vue'
import App from './App.vue'
import './normal.css'
import vueModal from './Modal/index'
import axios from 'axios'


Vue.use(vueModal)

new Vue({
  render: h => h(App)
}).$mount('#app')