<template>
  <transition name="intro" @after-enter="containerAnime">
    <div id="intro-canvas" class="pl-page-component">
      <div id="intro-container">
        <div id="intro-content">
          <div
            class="pl-name"
            :style="{
              backgroundImage: `url(${require('@/assets/img/pl-premier.png')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'left',
              width: '149px',
              height: '46px',
            }"
          ></div>
          <div
            class="pl-logo"
            :style="{
              backgroundImage: `url(${require('@/assets/img/pl-lion.png')})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
              width: '80px',
              height: '90px',
            }"
          ></div>
          <div
            class="pl-name"
            :style="{
              backgroundImage: `url(${require('@/assets/img/pl-league.png')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              height: '46px',
            }"
          ></div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { PAGES } from "../store/pager";

export default {
  methods: {
    containerAnime() {
      const animation = this.anime
        .timeline()
        .add(
          {
            targets: "#intro-content",
            translateX: ["-100vw", "0"],
            duration: 400,
            easing: "cubicBezier(0.000, 0.000, 0.000, 1.000)",
          },
          1000
        )
        .add(
          {
            targets: ".pl-name",
            width: ["149px", "0"],
            duration: 400,
            easing: "cubicBezier(1.000, 0.000, 1.000, 1.000)",
          },
          2000
        )
        .add(
          {
            targets: "#intro-container",
            width: "100px",
            height: "100px",
            easing: "cubicBezier(0.600, 0.000, 0.600, 1.000)",
            duration: 500,
          },
          2200
        )
        .add(
          {
            targets: ".pl-logo",
            width: "1000vw",
            height: "1000vw",
            opacity: 0,
            easing: "cubicBezier(0.600, 0.000, 1.000, 1.000)",
            duration: 400,
          },
          3000
        )
        .add(
          {
            targets: "#intro-container",
            width: "1000vw",
            height: "1000vh",
            duration: 400,
            easing: "cubicBezier(1.000, 0.000, 1.000, 1.000)",
            opacity: 0,
          },
          2800
        );
      animation.finished.then(() => {
        console.log("intro animation is finished");
        this.$store.dispatch("pager/goto", PAGES.PLAYGROUND);
      });
    },
  },
};
</script>
<style lang="less" scoped>
#intro-canvas {
  display: flex;
  align-items: center;
  justify-content: center;
}
#intro-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ec0e7d;

  #intro-content {
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
  }
}
</style>
