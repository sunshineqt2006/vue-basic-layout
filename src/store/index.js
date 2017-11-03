import Vue from 'vue'
import Vuex from 'vuex'
import {createPersistedState} from './plugin'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    app,
    permission   
  },
  getters,
  plugins: [
    createPersistedState({ //长期存储关键数据
      paths:[ ]
     }),
    createPersistedState({ //会话存储避免刷新丢失数据
      getState : key => JSON.parse(window.sessionStorage.getItem(key)),
      setState : (key, state) => window.sessionStorage.setItem(key, JSON.stringify(state)),
    })
  ]
})
