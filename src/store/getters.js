const getters = {
  sidebar: state => state.app.sidebar,
  routers:state => state.permission.routers,
  token:state => state.user.token
}
export default getters
