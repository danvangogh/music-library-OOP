function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist){
  this.playlists.push(playlist)
}

function Playlist(name) {
  this.tracks = [];
};

Playlist.prototype.addTrack = function(track){
  this.tracks.push(track)
}

Playlist.prototype.overallRating = function(tracks) {
  let ratingSum =  this.rating.reduce(function(a, b){
    return a + b
  }, 0);
  return (ratingSum / this.tracks.length());
  };

Playlist.prototype.totalDuration = function(tracks) {
  return this.tracks.reduce(function(a, b){
    return a + b
  }, 0);
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}


let heyFude = new Track("Hey Jude", 5, 1.30)
let beatlesTunes = new Playlist('BeatlesTunes')
beatlesTunes.addTrack(heyFude);
let myLibrary = new Library("Tunes", "Joel")
myLibrary.addPlaylist(beatlesTunes);
