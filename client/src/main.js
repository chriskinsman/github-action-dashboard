import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueSocketIoExtended from './plugins/vue-socket-io-extended';

Vue.config.productionTip = false

new Vue({
  vueSocketIoExtended,
  vuetify,
  render: h => h(App)
}).$mount('#app')
