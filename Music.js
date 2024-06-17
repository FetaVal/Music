// Search for song lyrics using Musixmatch API
async function searchSong(songName) {
  const apiKey = 'YOUR_MUSIXMATCH_API_KEY';
  const apiUrl = https://api.musixmatch.com/ws/1.1/track.search?q_track=${songName}&apikey=${apiKey};
  const response = await fetch(apiUrl);
  const result = await response.json();
  return result.message.body.track_list[0];
}
// Display song lyrics on page
function displayLyrics(lyrics) {
  const lyricsContainer = document.getElementById('lyrics-container');
  lyricsContainer.innerHTML =     <><h2>${lyrics.track.artist.name} - ${lyrics.track.name}</h2><p>${lyrics.track.lyrics.lyrics_body}</p></>  ;
}
// Handle form submit event
document.getElementById('search-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const songName = document.getElementById('song-name').value;
  const songLyrics = await searchSong(songName);
  displayLyrics(songLyrics);
});