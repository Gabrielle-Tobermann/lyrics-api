import getLyrics from "./lyricsData"

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.dispatchEvent.includes('get-lyrics')) {
      const obj = {
        artist: document.querySelector('#artist').value,
        song: document.querySelector('#cong').value
      }
      getLyrics(obj.artist, obj.song).then(())
    }
  })
}
