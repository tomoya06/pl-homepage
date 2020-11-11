import axios from 'axios';
export function getPlaylist() {
  return axios.get('https://gist.githubusercontent.com/tomoya06/8ae56e261bd01e6ccd4c0cccd5a9515f/raw/playlist.json')
    .then((result) => {
      const data = result.data.map(item => ({
        ...item,
        isPlaying: false,
      }));
      return Promise.resolve(data);
    })
}
