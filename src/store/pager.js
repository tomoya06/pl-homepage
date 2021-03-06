export const PAGES = {
  LOADING: 'loading',
  INTRO: 'intro',
  IDENT: 'ident',
  PLAYGROUND: 'playground',
  PLAYER: 'player',
}

const pageValues = Object.values(PAGES);

const state = {
  currentPage: PAGES.IDENT,
}

const mutations = {
  goto(state, newPage) {
    state.currentPage = newPage;
  }
}

const actions = {
  goto({ commit }, newPage) {
    if (!pageValues.includes(newPage)) {
      console.warn('invalid page', newPage);
      return;
    }
    commit('goto', newPage);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
