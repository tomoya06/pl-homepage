<template>
  <div id="player-canvas" class="pl-page-container">
    <Background />
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
              backgroundImage: `url(${require('@/assets/img/yt_icon_rgb.png')})`,
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
          <div id="ytplayer" ref="scPlayer"></div>
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
import { mapState, mapActions } from "vuex";
import Background from '@/components/BackgroundBoard.vue';

export default {
  mounted() {
    this.initPlayer(this.$refs.scPlayer).then(() => {
      this.playlistAnimate();
    });
  },
  methods: {
    ...mapActions({
      initPlayer: "player/initPlayer",
      changeSong: "player/changeSong",
    }),
    handleClickPlay(song) {
      if (this.playing.id === song.id) {
        return;
      }
      this.changeSong(song);
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
    updateIframeYoutubeStyle() {},
  },
  computed: {
    ...mapState({
      playlist: (state) => state.player.playlist,
      playing: (state) => state.player.playing,
      status: (state) => state.player.status,
    }),
  },
  components: {
    Background,
  }
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

#ytplayer {
  width: 100%;
  height: 160px;
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
      background-size: @iconWidth - 40px, @iconWidth - 40px;
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
        font-family: "type_dynamic_-_sailec-webfont";
        margin: @rowMargin 0 0 0;
        height: @headerSubtitleHeight - @rowMargin;
        line-height: @headerSubtitleHeight - @rowMargin;
        font-size: 22px;
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