<template>
  <div id="homepage">
    <Intro />
  </div>
</template>

<script>
import Intro from "../components/Intro";

export default {
  components: {
    Intro,
  },
};
</script>
<style lang="less" scoped>
#homepage {
  background: linear-gradient(
    45deg,
    rgba(61, 5, 65, 1) 0%,
    rgba(175, 2, 80, 1) 100%
  );
}
</style>