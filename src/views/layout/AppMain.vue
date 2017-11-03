<template>
  <div class="main-sty">
    <Tabs></Tabs>
    <router-view :key="key"></router-view>
  </div>
</template>
<script>
import Tabs from './Tabs'
export default {
  name: 'AppMain',
  components:{Tabs},
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>
<style lang="less">
.main-sty{flex:1;}
</style>
