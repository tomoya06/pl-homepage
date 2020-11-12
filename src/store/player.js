import constant from '../constant/player'
import axios from 'axios';
import YouTubePlayer from 'youtube-player';

const PLAYLIST_URL = "https://gist.githubusercontent.com/tomoya06/8ae56e261bd01e6ccd4c0cccd5a9515f/raw/playlist.json";

const state = {
  playlist: [],
  playing: null,
  status: constant.PLAYER_STATUS.PLAYING,
  ytPlayer: null,
}

function changeSongFunc(state, song) {
  console.log('changed song to ', song.id);
  state.playing = song;
  state.playlist.forEach(item => {
    if (item.id === song.id) {
      item.isPlaying = true;
    } else {
      item.isPlaying = false;
    }
  })
  state.ytPlayer.loadVideoById(song.ytId);
  state.ytPlayer.playVideo();
}

const mutations = {
  changeSong(state, song) {
    changeSongFunc(state, song);
  },
  changeStatus(state, status) {
    state.status = status;
  },
  updatePlaylist(state, list) {
    state.playlist = list;
  },
  createYtplayer(state, target) {
    if (state.ytPlayer !== null) {
      console.warn("you've inited the player");
      return;
    }
    state.ytPlayer = YouTubePlayer(target, {
      width: '100%',
      height: '100%',
      playerVars: {
        controls: 0,
      }
    });
    state.ytPlayer.on('stateChange', (evt) => {
      console.log('youtube player status changed to: ', evt.data);
      if (evt.data === 0) {
        console.log('video ended');

        const curSongIdx = state.playlist.findIndex(song => song.id === state.playing.id);
        const nextSongIdx = (curSongIdx + 1) % (state.playlist.length);
        changeSongFunc(state, state.playlist[nextSongIdx]);
      }
    })
  },
}

const actions = {
  changeSong({ commit }, song) {
    commit('changeSong', song);
    commit('changeStatus', constant.PLAYER_STATUS.LOADING);
  },
  initPlayer({ commit, dispatch }, target) {
    commit('createYtplayer', target);
    return axios.get(PLAYLIST_URL).then((result) => {
      const list = result.data.map(item => ({
        ...item,
        isPlaying: false,
      }));
      commit('updatePlaylist', list);
      dispatch('changeSong', list[0]);
    });
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
