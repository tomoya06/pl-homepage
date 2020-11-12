<template>
  <div id="app">
    <Home />
  </div>
</template>
<script>
import Home from "./views/Home.vue";
export default {
  components: { Home },
};
</script>
<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
<style lang="less">
@import "./styles/index.less";
</style>
