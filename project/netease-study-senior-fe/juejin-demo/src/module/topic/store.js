import { fetchItems } from './api/api'

export const TYPES = {
  HOT: 'hot',
  NEW: 'new',
  TOP: 'top',
}

export const store = {
  namespaced: true,
  state: {
    activeType: TYPES.HOT,
    hot: {
      items: [],
      pageInfo: {},
    },
    new: {
      items: [],
      pageInfo: {},
    },
    top: {
      items: [],
      pageInfo: {},
    },
  },
  mutations: {
    SET_ACTIVE_TYPE: (state, { type }) => {
      state.activeType = type
    },
    SET_ITEMS: (state, { items, pageInfo }) => {
      items.forEach((item) => item && state[state.activeType].items.push(item))
      state[state.activeType].pageInfo = pageInfo
    },
  },
  actions: {
    FETCH_ITEMS: ({ commit, state }, { type }) => {
      commit('SET_ACTIVE_TYPE', { type })
      const after = state[type].pageInfo.endCursor || 0
      return fetchItems({ type, after })
        .then(({ items, pageInfo }) => commit('SET_ITEMS', { items, pageInfo }))
    },
  },
}
