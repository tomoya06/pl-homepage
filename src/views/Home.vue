<template>
  <div id="homepage" class="pl-page-container">
    <Intro v-show="false" />
    <Player v-if="showPlayer"/>
    <Scoreboard v-show="false" />
    <button @click="start" v-if="!showPlayer">PLAY!</button>
  </div>
</template>

<script>
import Intro from "../components/Intro";
import Scoreboard from "../components/Scoreboard";
import Player from "../components/Player";

export default {
  components: {
    Intro,
    Scoreboard,
    Player,
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
