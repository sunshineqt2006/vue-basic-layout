<template>
  <div class="tabs-view">
    <router-link v-for="tag in  Array.from(visitedViews)" :to="tag.path" :key="tag.path" >
      <span class="tab-span" :class="isActive(tag.path)?'primary':''">
        {{tag.name}}
        <i class="el-icon-close" v-if="tag.path!=='/dashboard'" @click="closeViewTabs(tag,$event)"></i>
      </span>
  </router-link>
  </div>
</template>
<script>
export default {
  computed: {
    visitedViews() {
      return this.$store.state.app.visitedViews.slice(-12);
    }
  },
  methods: {
    closeViewTabs(view, $event) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view.path)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
      $event.preventDefault()
    },
    generateRoute() {
      if (this.$route.matched[this.$route.matched.length - 1].name) {
        return this.$route.matched[this.$route.matched.length - 1];
      }
      this.$route.matched[0].path = "/";
      return this.$route.matched[0];
    },
    addViewTabs() {
      if(this.generateRoute().path==='/dashboard/index') return
         this.$store.dispatch("addVisitedViews", this.generateRoute());
    },
    isActive(path) {
      if(path==='/dashboard')  path= '/dashboard/index'
      return path === this.$route.path
    }
  },
  watch: {
    $route() {
      this.addViewTabs();
    }
  }
};
</script>
<style lang="less">
.tabs-view{display: block;border-bottom:1px solid #dfe2e5;padding:0 10px;
  .tab-span{padding:8px 10px;display: inline-block;margin:5px  10px 0 0;color: #000000;border-top-left-radius: 4px;text-align: center;border-top-right-radius: 4px;min-width: 60px;
  &.primary{border: 1px solid #dfe2e5;border-bottom: 0;color:#3598db!important;}}
}

</style>
