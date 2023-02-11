"use strict";

var musicPlayer = document.querySelector(".music-player");
var playBtn = document.querySelector("#play");
var prevBtn = document.querySelector("#prev");
var nextBtn = document.querySelector("#next");
var audio = document.querySelector("#audio");
var progress = document.querySelector(".progress");
var progressContainer = document.querySelector(".progress-container");
var title = document.querySelector("#title");
var volume = document.querySelector(".slider");
var ulList = document.querySelector(".song-list");
var playlist = document.querySelector(".playlist");
var playlistMenu = document.querySelector(".playlist-menu");
var playlistClose = document.querySelector(".icon-close");
var songIndex = 0;
var songs = [{
  name: "Bóg się rodzi",
  img: "Bóg się rodzi",
  song: "Bóg się rodzi"
}, {
  name: "Gdy śliczna Panna",
  img: "Gdy śliczna Panna",
  song: "Gdy śliczna Panna"
}, {
  name: "Gore gwiazda",
  img: "Gore gwiazda",
  song: "Gore gwiazda"
}, {
  name: "Jezus malusieńki",
  img: "Jezus malusieńki",
  song: "Jezus malusieńki"
}, {
  name: "Mizerna cicha",
  img: "Mizerna cicha",
  song: "Mizerna cicha"
}, {
  name: "Nie było miejsca",
  img: "Nie było miejsca",
  song: "Nie było miejsca"
}];
window.addEventListener("load", function () {
  loadSong(songIndex);
});

function loadSong(indexNumb) {
  title.innerText = songs[indexNumb].name;
  audio.src = "carols/".concat(songs[indexNumb].song, ".mp3");
  musicPlayer.style.backgroundImage = "url(\"photos/".concat(songs[indexNumb].img, ".jpg\")");
}

function playSong() {
  musicPlayer.classList.add("play");
  playBtn.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
  audio.play();
  addActive();
}

function pauseSong() {
  musicPlayer.classList.remove("play");
  playBtn.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
  audio.pause();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songIndex);
  playSong();
  addActive();
}

function nextSong() {
  songIndex++;

  if (songIndex >= songs.length) {
    songIndex = 0;
  }

  loadSong(songIndex);
  playSong();
  addActive();
}

function updateProgress(e) {
  var _e$srcElement = e.srcElement,
      duration = _e$srcElement.duration,
      currentTime = _e$srcElement.currentTime;
  var progressPercent = currentTime / duration * 100;
  progress.style.width = "".concat(progressPercent, "%");
}

function setProgress(e) {
  var width = this.clientWidth;
  var clickX = e.offsetX;
  var duration = audio.duration;
  audio.currentTime = clickX / width * duration;
}

for (var i = 0; i < songs.length; i++) {
  var className = "liElement";

  if (i === 0) {
    className += " active";
  }

  var listElement = "<li li-index=\"".concat(i, "\" class=\" ").concat(className, "\">\n       <div class=\"img-container\">\n          <img src=\"photos/").concat(songs[i].img, ".jpg\" class=\"cover\" id=\"cover\" alt=\"Record\">\n        </div> \n       <p>").concat(songs[i].name, "</p> \n      \n       <audio src=\"carols/").concat(songs[i].song, ".mp3\" id=\"audio\"></audio>\n    </li>");
  ulList.insertAdjacentHTML("beforeend", listElement);
}

var liElement = Array.from(document.querySelectorAll(".liElement"));
liElement.forEach(function (item) {
  item.addEventListener("click", function (event) {
    liElement.forEach(function (el) {
      el.classList.remove("active");
    });
    event.target.classList.add("active");
    var getLiIndex = item.getAttribute("li-index");
    songIndex = getLiIndex;
    loadSong(songIndex);
    playSong();
  });
});

function addActive() {
  liElement.forEach(function (li) {
    return li.classList.remove("active");
  });
  liElement[songIndex].classList.add("active");
}

function bubbles() {
  var count = 250;
  var container = document.querySelector(".container");
  var i = 0;

  while (i < count) {
    var snow = document.createElement("div");
    snow.className = "snow";
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    var size = Math.random() * 8;
    snow.style.left = x + "px";
    snow.style.top = y + "px";
    snow.style.width = 1 + size + "px";
    snow.style.height = 1 + size + "px";
    snow.style.animationDuration = 6 + size + "s";
    snow.style.animationDelay = -size + "s";
    container.appendChild(snow);
    i++;
  }
}

bubbles();
playBtn.addEventListener("click", function () {
  var isPlaying = musicPlayer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", nextSong);
volume.addEventListener("input", function () {
  audio.volume = volume.value / 100;
});
playlistMenu.addEventListener("click", function () {
  playlist.classList.add("on");
});
playlistClose.addEventListener("click", function () {
  playlist.classList.remove("on");
});
//# sourceMappingURL=main.dev.js.map
