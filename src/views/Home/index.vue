<template>
  <div id="homepage" class="pl-page-container">
    <Intro v-show="false" />
    <Loader />
  </div>
</template>

<script>
import Intro from "../pages/Intro";
import Loader from "../pages/Loader";

export default {
  components: {
    Intro,
    Loader,
  },
  data() {
    return {
      showPlayer: false,
    };
  },
  methods: {
    start() {
      this.showPlayer = true;
    },
  },
};
</script>
<style lang="less" scoped>
#homepage {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    45deg,
    rgba(61, 5, 65, 1) 0%,
    rgba(175, 2, 80, 1) 100%
  );
}
</style>
