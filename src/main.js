import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueAnime from './plugins/anime';

Vue.config.productionTip = false

Vue.use(VueAnime);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
