const lyricsForm = () => { 
  document.querySelector('#form-container').innerHTML = '<form><div class="form-group"><label for="artist">Artist:</label><input type="text" class="form-control" id="artist" aria-describedby="artist"></div><div class="form-group"><label for="songTitle">Song title:</label><input type="text" class="form-control" id="song"></div><button id="get-lyrics" type="submit" class="btn btn-primary">SEARCH FOR LYRICS</button></form>';
};

export default lyricsForm;
