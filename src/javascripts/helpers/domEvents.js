import showLyrics from '../components/lyrics';
import getLyrics from './lyricsData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('get-lyrics')) {
      e.preventDefault();
      console.warn('button');
      const obj = {
        artist: document.querySelector('#artist').value,
        song: document.querySelector('#song').value
      };
      getLyrics(obj.artist, obj.song).then((lyrics) => showLyrics(lyrics));
      document.querySelector('form').reset();
    }
  });
};

export default domEvents;
