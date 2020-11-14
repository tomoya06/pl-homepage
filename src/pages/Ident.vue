<template>
  <transition @after-enter="containerAnime">
    <div id="ident-canvas" class="pl-page-container">
      <div id="ident-container" class="pl-page-component">
        <div id="ident-content">
          <div class="ident-row first-row">
            <div class="ident-row-content">
              <span>HOMEPAGE</span>
              <div class="ident-row-subtitle ident-row-subtitle-top">
                <span>POWERED BY VUE</span>
              </div>
              <div
                class="ident-row-icon"
                :style="{
                  backgroundImage: `url(${require('@/assets/img/pl-lion.png')})`,
                }"
              ></div>
            </div>
          </div>
          <div class="ident-row second-row">
            <div class="ident-row-content">
              <span>OF PL STYLE</span>
              <div class="ident-row-subtitle ident-row-subtitle-bottom">
                <span>#TOMOYA06</span>
              </div>
              <div
                class="ident-row-icon"
                :style="{
                  backgroundImage: `url(${require('@/assets/img/vue-icon.png')})`,
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <background-board v-show="false" />
    </div>
  </transition>
</template>
<script>
import BackgroundBoard from "../components/BackgroundBoard.vue";

export default {
  components: {
    BackgroundBoard,
  },
  methods: {
    containerAnime() {},
  },
};
</script>
<style lang="less" scoped>
#ident-content {
  position: absolute;
  top: 40vh;
  left: 10vw;
}
.ident-row {
  height: 133px;

  .ident-row-content {
    display: inline-block;
    position: relative;
    line-height: 133px;
    font-size: 108px;
    padding: 0 50px;
    color: white;
    background-color: @plPurple;
  }

  .ident-row-icon {
    position: absolute;
    right: -133px;
    display: inline-block;
    width: 133px;
    height: 133px;
    padding: 0;
    background-size: 115px 115px;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: white;
  }

  .ident-row-subtitle {
    display: inline-block;
    position: absolute;
    height: 38px;
    line-height: 38px;
    font-size: 26px;
    padding: 0 50px;
    background: white;
    color: @plPurple;
  }

  &.first-row {
    margin-left: 0;
    .ident-row-subtitle {
      top: -38px;
      right: 0;
    }
  }
  &.second-row {
    margin-left: 200px;
    .ident-row-subtitle {
      bottom: -38px;
      left: 0;
    }
  }
}
</style>