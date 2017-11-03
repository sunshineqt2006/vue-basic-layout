<template>
  <div id="app">
		<router-view :key='key'></router-view>
	</div>
</template>

<script>
export default {
  name: "APP",
  computed: {
    key() {
      // var url =
      //   this.$route.name +
      //   "::" +
      //   this.$util.getAsUriParameters(this.$route.query);
      // // console.log(url)
      // return url;
    }
  }
};
</script>

<style  lang="less">
// 全局自定义的css样式
@import 'styles/common.less';
body,
html {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Helvetica, sans-serif;
  text-align: left;
  font-size: 14px;
  background: @bgColor;
  > div {
    height: 100%;
  }
}
</style>
