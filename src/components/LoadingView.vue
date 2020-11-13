<template>
  <div id="loading-canvas" class="pl-page-component">
    <div id="loading-container" class="pl-page-component">
      <div id="loading-content">
        <div class="loading-txt">
          <div>LOADING</div>
          <div v-if="loaded">
            <button @click="handleStart">START</button>
          </div>
          <div v-else>
            <span>...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { PAGES } from "../store/pager";
export default {
  data() {
    return {
      loaded: false,
    };
  },
  created() {
    if (document.readyState === "complete") {
      this.handleLoaded();
    } else {
      window.addEventListener("load", () => {
        this.handleLoaded();
      });
    }
  },
  methods: {
    handleLoaded() {
      console.log("window is loaded");
      this.loaded = true;
    },
    handleStart() {
      this.$store.dispatch("pager/goto", PAGES.INTRO);
    },
  },
};
</script>
<style lang="less" scoped>
.loading-txt {
  color: white;
  font-family: "type_dynamic_-_sailec-webfont";
  font-size: 20px;
  text-align: center;
  padding: 60px 0 0 0;
}
</style>