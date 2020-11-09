<template>
  <div id="homepage">
    <Scoreboard />
    <Intro v-if="false"/>
  </div>
</template>

<script>
import Intro from "../components/Intro";
import Scoreboard from "../components/Scoreboard";

export default {
  components: {
    Intro,
    Scoreboard,
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