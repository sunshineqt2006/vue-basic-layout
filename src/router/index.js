import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/layout.vue'

Vue.use(VueRouter);

//是否进行代码分割懒加载
const _ = function (modual) {
  return _CODE_SPLIT ? () => System.import(`~/views/${modual}`) : require(`~/views/${modual}`);
}


export const constantRouterMap = [
  { path: '/login', component: _('login/index'), hidden: true },
  {
    path: '/dashboard', 
    component: Layout, 
    redirect: '/dashboard/index', 
    noDropdown: true, 
    icon: 'el-icon-location',
    children: [{ path: 'index', component: _('dashboard/index'), name: '首页' }]
  },
  {
    path: '/page1', component: Layout, name: '菜单一', redirect: '/page1/index', icon: 'el-icon-location',
    children: [{ path: 'index', name: '选项一', component: _('menu1/index') }, { path: 'index2', name: '选项二' }, { path: 'index3', name: '选项三' }]
  },
  {
    path: '/page2', component: Layout, name: '菜单二', redirect: '/page2/index', icon: 'el-icon-location',
    children: [{ path: 'index', name: '选项一' }, { path: 'index2', name: '选项二' }, { path: 'index3', name: '选项三' }]
  },
  { path: '/*', redirect: '/dashboard', hidden: true }
]

export default new VueRouter({
  mode: 'hash',
  routes: constantRouterMap
})