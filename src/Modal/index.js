
import Modal from './Modal'

export default {
  install: function (Vue, defaultOptions  = {}) {
    const constructor = Vue.extend(Modal)
    const cache = {}

    Vue.prototype.$toast = function (msg, options = {}) {
      let propsData = Object.assign(defaultOptions, options, {
        message: ''
      })

      let modal = cache['modal'] || (cache['modal'] = new constructor({
        propsData
      }))
      
      let vm = modal.$mount()
      console.log(vm)
      document.querySelector(options.parent || 'body').appendChild(vm.$el)
      vm.message = msg
    }

  }
}