<template>
  <div class="pl-page-component">
    <div
      class="pl-background-left pl-background-block"
      :style="{ backgroundColor: color, left: 0, right: '100vw' }"
    ></div>
    <div
      class="pl-background-right pl-background-block"
      :style="{ backgroundColor: color, left: 0, right: '100vw' }"
    ></div>
    <div
      class="pl-icon-container"
      :style="{
        backgroundImage: `url(${require('@/assets/img/pl-lion.png')})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        right: '100vw',
      }"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "#EFFF03",
    },
  },
  mounted() {
    this.anime
      .timeline()
      .add(
        {
          targets: ".pl-background-left",
          right: "90vw",
          left: "0",
          duration: 400,
          easing: "cubicBezier(0, .8, 0, 1)",
        },
        200
      )
      .add(
        {
          targets: ".pl-background-right",
          keyframes: [
            { left: "0", right: "0" },
            { left: "70vw", right: "0" },
          ],
          duration: 400,
          easing: "cubicBezier(0, .8, 0, 1)",
        },
        0
      )
      .add(
        {
          targets: ".pl-icon-container",
          right: "calc(30vw - 115px)",
          duration: 400,
          easing: "cubicBezier(0, .8, 0, 1)",
        },
        0
      );
  },
};
</script>
<style lang="less" scoped>
.pl-background-block {
  position: absolute;
  top: 15vh;
  bottom: 15vh;
  opacity: 0.55;
}
.pl-icon-container {
  position: absolute;
  top: calc(50% - 50px);
  width: 95px;
  height: 100px;
  background-size: 95px 95px;
}
</style>