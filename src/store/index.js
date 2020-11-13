import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import player from './player';
import pager from './pager';

export default new Vuex.Store({
  modules: {
    player,
    pager,
  }
})
