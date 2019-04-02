import * as API from '@/api'
import LOGIN_URL from '@/api/modules/login'

const state = {
}

const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  async fetchUserInfo ({ commit }, id) {
    let [error, data] = await API.$get(`${LOGIN_URL.FETCH_USER_INFO}`)
    if (!error) {
      commit('setUserInfo', data)
    }
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
