const showLyrics = (Obj) => {
  document.querySelector('#lyrics-container').innerHTML = `<div>${Obj.lyrics}</div>`;
};

export default showLyrics;
