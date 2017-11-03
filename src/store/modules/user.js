
const user = {
  state: {
    userInfo:{},
    token:'13232'
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    setToken({ commit }, token){
      commit('SET_TOKEN', token)
    }
  }
}

export default user
