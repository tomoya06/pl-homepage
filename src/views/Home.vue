<template>
  <div id="homepage" class="pl-page-container">
    <loading-view v-show="currentPage === PAGES.LOADING" />
    <intro v-show="currentPage === PAGES.INTRO" />
    <player v-show="currentPage === PAGES.PLAYER" />
    <scoreboard v-show="currentPage === PAGES.PLAYGROUND" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Intro from "../components/IntroBoard.vue";
import Scoreboard from "../components/Scoreboard.vue";
import Player from "../components/Player.vue";
import LoadingView from "../components/LoadingView.vue";

import { PAGES } from "../store/pager";

export default {
  components: {
    Intro,
    Scoreboard,
    Player,
    LoadingView,
  },
  data() {
    return {
      PAGES,
    };
  },
  computed: {
    ...mapState({
      currentPage: (state) => state.pager.currentPage,
    }),
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
