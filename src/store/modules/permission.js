import {  constantRouterMap } from '../../router'


const permission = {
  state: {
    routers: constantRouterMap, //constantRouterMap
    addRouters: [],
    roles:[]
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
  }
}

export default permission