<template>
  <el-menu  class="el-menu-vertical-demo menu-wrapper"  :collapse="isCollapse" :default-active="$route.path"
  text-color="#fff"  active-text-color="#ffd04b" background-color="#34495e">

    <template v-for="item in routers">

      <el-menu-item  v-if="!item.hidden&&item.noDropdown&&item.children.length>0" @click="$router.push({path:item.path})"
        :index="item.path+'/'+item.children[0].path" >
        <i v-if='item.icon' :class="item.icon"></i>
        <span slot="title">{{item.children[0].name}}</span>
      </el-menu-item>

      <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">
        <template slot="title">
          <i v-if='item.icon' :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>
          <sidebar-item class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
          <router-link v-else :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
            <i v-if='child.icon' :class="child.icon"></i>
              <span>{{child.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu> 

    </template>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    
  }

};
</script>
<style lang="less">

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>

