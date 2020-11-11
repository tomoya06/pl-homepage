<template>
  <div id="player-canvas" class="pl-page-container">
    <div
      id="player-container"
      class="pl-page-component"
      style="transform: translateX(-100vw)"
    >
      <div id="player-content" class="pl-list">
        <div class="player-header list-header">
          <div
            class="icon"
            :style="{
              backgroundImage: `url(${require('@/assets/img/pl-lion.png')})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="titles">
            <div class="main-title">
              <span class="title">PLAYLIST</span>
            </div>
            <div class="subtitle">
              <span class="title">PREMIER LEAGUE MUSIC PLAYER</span>
            </div>
          </div>
        </div>
        <div class="sc-container">
          <iframe
            v-if="playing"
            width="100%"
            height="1"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            :src="playing.iframe"
            ref="scPlayer"
            @load="handleIframeLoaded"
          ></iframe>
        </div>
        <div class="player-list list-content">
          <div
            class="list-content-container"
            style="transform: translateY(-100vh)"
          >
            <div class="list-content-scoll">
              <div
                v-for="song in playlist"
                :key="song.id"
                class="list-row-triple"
              >
                <span
                  class="list-item-col list-item-prefix pl-pointer-button"
                  @click="() => handleClickPlay(song)"
                >
                  <span v-show="song.isPlaying">N</span>
                </span>
                <span class="list-item-col list-item-content title">
                  <span>{{ song.hint }}</span>
                </span>
                <span class="list-item-col list-item-suffix">{{
                  song.time
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const playerApi = require("@/service/player");

export default {
  data() {
    return {
      playing: null,
      playlist: [],
    };
  },
  created() {
    this.initPlaylist();
  },
  methods: {
    initPlaylist() {
      console.log("sc iframe loaded");
      playerApi.getPlaylist().then((data) => {
        this.playlist = data;
        this.playing = data[0];
        this.playlist[0].isPlaying = true;

        this.playlistAnimate();
      });
    },
    handleIframeLoaded() {
      this.updateIframeYoutubeStyle();
      this.iframeAnimate();
    },
    handleClickPlay(song) {
      if (this.playing.id === song.id) {
        return;
      }
      this.playlist.forEach((item) => {
        if (item.id !== song.id) {
          item.isPlaying = false;
        } else {
          item.isPlaying = true;
        }
      });
      this.playing = song;
      // this.anime.timeline().add({
      //   targets: this.$refs.scPlayer,
      //   height: "0",
      //   duration: 300,
      //   easing: "easeOutSine",
      // });
    },
    playlistAnimate() {
      this.anime
        .timeline()
        .add(
          {
            targets: "#player-container",
            keyframes: [{ translateX: 0 }],
            easing: "cubicBezier(0, .8, 0, 1)",
            duration: 600,
          },
          0
        )
        .add(
          {
            targets: ".list-content-container",
            keyframes: [{ translateY: 0 }],
            loop: false,
            duration: 300,
            easing: "easeOutCirc",
          },
          800
        );
    },
    iframeAnimate() {
      this.anime.timeline().add(
        {
          targets: this.$refs.scPlayer,
          height: "160px",
          duration: 300,
          easing: "easeOutSine",
        },
        1000
      );
    },
    updateIframeYoutubeStyle() {
    },
  },
};
</script>
<style lang="less" scoped>
@iconWidth: 114px;
@prefixWidth: 135px;
@mainWidth: 714px;
@headerTitleHeight: 76px;
@headerSubtitleHeight: 38px;
@colMargin: 28px;
@rowHeight: 55px;
@rowMargin: 2px;
@fullWidth: @mainWidth + @iconWidth + @rowMargin * 2;

#player-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pl-list {
  width: @fullWidth;
  .title {
    padding: 0 0 0 @colMargin;
  }

  .list-header {
    display: flex;
    z-index: 99;
    .icon {
      width: @iconWidth;
      height: @iconWidth;
      background-color: white;
      background-size: @iconWidth - 4px, @iconWidth - 4px;
    }
    .titles {
      margin: 0 0 0 @rowMargin;
      // width: @mainWidth + @rowMargin * 2;
      flex-grow: 1;
      .main-title {
        background: #3e003e;
        color: white;
        height: @headerTitleHeight;
        font-family: "type_dynamic_-_sailec-webfont";
        font-size: 42px;
        line-height: @headerTitleHeight;
      }
      .subtitle {
        color: white;
        background: #3e003e;
        margin: @rowMargin 0 0 0;
        height: @headerSubtitleHeight - @rowMargin;
        line-height: @headerSubtitleHeight - @rowMargin;
        font-size: 24px;
      }
    }
  }

  .list-content {
    margin: @rowMargin 0;
    height: 5.4 * (@rowHeight + 2 * @rowMargin);
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }

    .list-content-container {
      height: 100%;
    }

    .list-contnent-scroll {
      overflow: auto;
      height: auto;
    }

    .list-row-triple {
      width: 100%;
      height: @rowHeight;
      font-size: 30px;
      line-height: @rowHeight;
      font-family: "type_dynamic_-_sailec-webfont";
      display: flex;
      justify-content: center;

      &:not(:last-child) {
        margin: 0 0 @rowMargin * 2 0;
      }

      .list-item-col {
        background: white;
        display: inline-block;

        &.list-item-prefix {
          width: @iconWidth;
          background: #e7ff0a;
          text-align: center;
        }
        &.list-item-suffix {
          width: @prefixWidth;
          background: #e7ff0a;
          text-align: center;
        }
        &.list-item-content {
          color: white;
          background: #646464;
          width: @fullWidth - @iconWidth - @prefixWidth - 2 * @rowMargin;
          margin: 0 @rowMargin;
          z-index: 9;
          box-shadow: 4px 0px 4px 0px rgba(50, 50, 50, 0.75),
            0px 2px 6px 0px #e7ff0a, -4px 0px 4px 0px rgba(50, 50, 50, 0.75);
        }
      }
    }
  }
}
</style>