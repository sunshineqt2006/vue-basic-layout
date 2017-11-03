<template>
  <div class="page">
  <Top></Top> 
  <div class="content">
    <SideBar></SideBar>
    <AppMain></AppMain>
  </div>
  </div>
</template>

<script>
import { Top, SideBar, AppMain } from "./index";
export default {
  components: { Top, SideBar, AppMain },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    }
  }
};
</script>
<style lang="less">
.page {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
