import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

const whiteList = ['/login', '/authredirect']// 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start() 
  if(store.getters.token){
    next()
  }else{
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') 
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})