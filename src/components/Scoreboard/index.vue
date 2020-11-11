<template>
  <div id="scoreboard-canvas" class="pl-page-component layer-9">
    <div id="scoreboard-container">
      <div id="scoreboard-content">
        <div class="sb-logo sb-row">
          <div
            class="pl-lion"
            :style="{
              backgroundImage: `url(${require('@/assets/img/pl-lion-white.png')})`,
              backgroundSize: 'cover',
              backgroundPositionX: 'center',
              backgroundRepeat: 'no-repeat',
              width: '75px',
              height: '67px',
            }"
          ></div>
        </div>
        <div class="sb-main sb-row">
          <div class="left-team team fullheight"></div>
          <div class="content fullheight">
            <div class="left block fullheight">
              <span class="word">EDU</span>
            </div>
            <div class="mid block fullheight">
              <span class="word">
                <span>1</span><span class="dash"></span><span>1</span>
              </span>
            </div>
            <div class="right block fullheight">WOK</div>
          </div>
          <div class="right-team team fullheight"></div>
        </div>
        <div class="sb-footer sb-row">
          <div class="timer block fullheight">
            <span class="word">00:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.enterAnime();
  },
  methods: {
    enterAnime() {
      this.anime
        .timeline()
        .add(
          {
            targets: "#scoreboard-container",
            keyframes: [
              { translateY: "-100vh", duration: 0 },
              { translateY: 0, duration: 800 },
            ],
            easing: "cubicBezier(1.000, 0.000, 0.000, 1.000)",
            loop: false,
          },
          1000
        )
        .add(
          {
            targets: ".pl-lion",
            keyframes: [
              { backgroundPositionY: "67px", duration: 0 },
              { backgroundPositionY: "0px", duration: 300 },
            ],
            easing: "cubicBezier(0.000, 0.000, 0.000, 1.000)",
          },
          2000
        )
        .add(
          {
            targets: ".sb-footer",
            keyframes: [
              { translateY: "-38px", duration: 0 },
              { translateY: 0, duration: 300 },
            ],
            easing: "cubicBezier(0.000, 0.000, 0.000, 1.000)",
          },
          2200
        );
    },
  },
};
</script>
<style lang="less" scoped>
@mainBlockWidth: 102px;
@mainBlockHeight: 38px;
@teamWidth: 6px;
@teamMargin: 2px;
@rowWidth: 340px;

.fullheight {
  height: 100%;
}
.block {
  overflow: hidden;
  font-family: "type_dynamic_-_sailec-webfont";
  color: white;
  font-size: 22px;
  text-align: center;
  line-height: @mainBlockHeight;
}
#scoreboard-container {
  padding-left: 1.4*@mainBlockWidth;
  padding-top: @mainBlockHeight;
  zoom: 0.8;

  #scoreboard-content {
    .sb-row {
      width: @rowWidth;
      display: flex;
      justify-content: center;
    }
    .sb-logo {
    }
    .sb-main {
      height: @mainBlockHeight;
      position: relative;
      z-index: 99;
      .team {
        margin: 0 @teamMargin;
        width: @teamWidth;
        opacity: 0.7;
        &.left-team {
          background-color: red;
        }
        &.right-team {
          background-color: blue;
        }
      }
      .content {
        width: 3 * @mainBlockWidth;
        background-color: white;
        .block {
          width: @mainBlockWidth;
          display: inline-block;
        }
        .mid {
          background-color: #00fe81;
          color: #3e003e;
          font-family: "type_dynamic_-_sailec_bold-webfont";

          .dash {
            display: inline-block;
            border-top: 3px solid #3e003e;
            content: " ";
            width: 8px;
            margin: 0 4px 5px 4px;
          }
        }
        .left {
          background-color: #3e003e;
        }
        .right {
          background-color: #3e003e;
        }
      }
    }
    .sb-footer {
      z-index: 9;
      .block {
        height: @mainBlockHeight;
        background-color: white;
        width: @mainBlockWidth;
        font-family: "type_dynamic_-_sailec_bold-webfont";
        color: #3e003e;
      }
    }
  }
}
</style>

