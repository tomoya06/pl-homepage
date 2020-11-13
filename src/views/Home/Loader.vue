<template>
  <div v-show="showMe">
    <div>LOADING</div>
  </div>
</template>
<script>
import pagerMixin from "../../mixins/pager";
import { PAGES } from "../../plugins/pager";

export default {
  mixins: [pagerMixin(PAGES.LOADING)],
  created() {
    window.addEventListener("load", () => {
      console.log("window resources are loaded");
      this.handleWindowLoaded();
    });
  },
  methods: {
    handleWindowLoaded() {},
  },
};
</script>