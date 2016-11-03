require("./fontello/css/fontello.css");
require("./index.css");

function getArtists() {
  return document.getElementById("artists").children;
}

function isArtistVisible(i) {
  return getArtists()[i].children[1].className === "visible";
}

function setArtistVisible(i, visible) {
  var text = visible ? "visible" : "";
  getArtists()[i].children[1].className = text;
}

function makeArtistOnClick(i) {
  return function () {
    if (isArtistVisible(i)) {
      setArtistVisible(i, false);
      return;
    }
    for (var i2 = 0; i2 < getArtists().length; i2++) {
      setArtistVisible(i2, i2 === i);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  for (var i = 0; i < getArtists().length; i++) {
    getArtists()[i].children[0].addEventListener("click", makeArtistOnClick(i), false);
  }
}, false);

