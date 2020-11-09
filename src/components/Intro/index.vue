<template>
  <div id="canvas-container">
    <div id="intro-container">
      <div id="intro-content">
        <div
          class="pl-name"
          :style="{
            backgroundImage: `url(${require('@/assets/pl-premier.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            width: '149px',
            height: '46px',
          }"
        ></div>
        <div
          class="pl-logo"
          :style="{
            backgroundImage: `url(${require('@/assets/pl-lion.png')})`,
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
            backgroundImage: `url(${require('@/assets/pl-league.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            width: '149px',
            height: '46px',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.containerAnime();
  },
  methods: {
    containerAnime() {
      this.anime
        .timeline()
        .add(
          {
            targets: "#intro-content",
            keyframes: [
              { translateX: "-100vw", duration: 0 },
              { translateX: 0, duration: 400 },
            ],
            easing: "cubicBezier(0.000, 0.000, 0.000, 1.000)",
            loop: false,
          },
          1000
        )
        .add(
          {
            targets: ".pl-name",
            width: 0,
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
    },
  },
};
</script>
<style lang="less" scoped>
#canvas-container {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    45deg,
    rgba(61, 5, 65, 1) 0%,
    rgba(175, 2, 80, 1) 100%
  );
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
