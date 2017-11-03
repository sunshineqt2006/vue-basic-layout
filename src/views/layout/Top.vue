<template>
  <div class="head">
    <span class="logo">
      <img src='~/assets/images/logo.png' />
      <i class="title" v-if="$store.state.app.sidebar.opened===true">最美运维管理系统</i>
    <i class="iconfont icon-iconfontgengduo" @click="toggleSideBar"></i></span>
    <span><el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509619767883&di=b7d58c5a67af7b69647a39e7ab87d0ca&imgtype=0&src=http%3A%2F%2Fimg3.3lian.com%2F2006%2F013%2F08%2F20051105154831843.gif" class="advert">
          您好！管理员
          
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">修改密码</el-dropdown-item>
          <el-dropdown-item command="b">修改头像</el-dropdown-item>
          <el-dropdown-item command="logout" divided>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> 
</span>
  </div>
</template>
<script>
  export default{
    methods:{
      handleCommand(command){
        if(command==='logout'){
          this.$store.dispatch('setToken','')
          this.$router.push({path:'/login'})
        }
      },
      toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    }
    }
  }
</script>
<style lang="less">
.el-dropdown-link{color:#ffffff;display: flex;align-items: center;
img.advert{width: 35px;height: 35px;border-radius: 50%;margin: 0px 10px 0;border:2px solid #ffffff;background: #ffffff; }}

.head {
  height: 70px;
  background: #3598db;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .logo {font-size: 26px; display: flex;
  i.icon-iconfontgengduo{margin: 5px 0 0 10px;font-size: 20px;}
  i.title{font-style: normal}
    img { margin-right: 10px;width: 40px; height: 40px;}
  }
  i {font-size: 25px;position: relative;bottom: -4px;}
}
</style>

