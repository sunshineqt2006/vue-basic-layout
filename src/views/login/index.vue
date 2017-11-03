<template>
  <div class="login">
    <div class="head">
      <span class="logo"><img src='~/assets/images/logo.png' />最美运维管理系统</span>
    </div>
  <div class="login-div">
    <img src="~/assets/images/login-img.png">
    <div class="login-form">
      <input type="text" style="display:none">
      <el-input v-model="form.name" placeholder="请输入用户名" prefix-icon="iconfont icon-yonghu"></el-input>
      <div class="mt30"></div>
      <el-input v-model="form.pw" type="password" placeholder="请输入密码" prefix-icon="iconfont icon-mima"></el-input>
      <div class="mt30"></div>
       <el-button type="primary" @click="login" class="login-btn">登录<i class="el-icon-caret-right"></i></el-button>
       <el-checkbox v-model="checked">忘记密码</el-checkbox>
    </div>
  </div>
  <div class="footer">Copyright ©2014-2017 福州最美影视网络科技有限公司 闽ICP备15001969号-2</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name:'admin',
        pw:'123456'
      },
      checked:false
    };
  },
  methods:{
    login(){
      this.$store.dispatch('setToken','12312')
      this.$router.push({path:'/'})
    }
  }
};
</script>
<style lang="less">
@import '~styles/variables.less';
.login{background: linear-gradient(#e2f3fc -30%, #f8fcff )}
.head {
  height: 70px;
  background: #3598db;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .logo {
    font-size: 26px;
    display: flex;
    img {
      margin-right: 10px;
    }
  }
}
.login-div {
  img {
    margin: 0 100px;
  }
  width: 1000px;
  margin: 100px auto;
  display: flex;
  flex-direction: row;
  .login-form {
    margin-left: 100px;
    margin-top:50px;
    width: 300px;
    .el-input__inner {
      border: 1px solid #8ccae1;
      box-shadow: 2px 2px 2px #d8f0f4 inset;
      &:focus {
        border: 1px solid #ffad2d;
        box-shadow: 2px 2px 2px #fff0d9 inset;
      }
    }
  }
  .login-btn{width:135px;margin-right:20px;}
}
.footer{text-align: center;color:#637e89;}
</style>
