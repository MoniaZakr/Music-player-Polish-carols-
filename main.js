const musicPlayer = document.querySelector(".music-player");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const volume = document.querySelector(".slider");

let songIndex = 0;

const songs = [
    {
        name:"Bóg się rodzi",
        img:"Bóg się rodzi",
        song:"Bóg się rodzi"
    },
    {
        name:"Gdy śliczna Panna",
        img:"Gdy śliczna Panna",
        song:"Gdy śliczna Panna"
    },
    {
        name:"Jezus malusieńki",
        img:"Jezus malusieńki",
        song:"Jezus malusieńki"
    },
    {
        name:"Mizerna cicha",
        img:"Mizerna cicha",
        song:"Mizerna cicha"
    },
    {
        name:"Nie było miejsca",
        img:"Nie było miejsca",
        song:"Nie było miejsca"
    }

]


window.addEventListener("load",()=> {
    loadSong(songIndex);
})

function loadSong(indexNumb) {
    title.innerText = songs[indexNumb].name;
    audio.src = `carols/${songs[indexNumb].song}.mp3`;
    musicPlayer.style.backgroundImage = `url("photos/${songs[indexNumb].img}.jpg")`;
}


function playSong() {
    musicPlayer.classList.add("play");
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    audio.play();
    addActive()
}

function pauseSong() {
    musicPlayer.classList.remove("play");
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    audio.pause()
}

function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songIndex);
    playSong();
    addActive()
}

function nextSong() {
  
    songIndex++;
    if(songIndex >= songs.length) {
        songIndex = 0;
    }
    loadSong(songIndex);
    playSong();
    addActive()
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime/duration) * 100;
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX/width) * duration;
}

const ulList = document.querySelector(".song-list");

for(let i=0; i<songs.length; i++) {
    let listElement = `<li li-index="${i}" class="liElement">
                           <p>${songs[i].name}</p>
                           <audio src="carols/${songs[i].song}.mp3" id="audio"></audio>
                           </li>`
    ulList.insertAdjacentHTML("beforeend", listElement)
}

const liElement = Array.from(document.querySelectorAll(".liElement"));

liElement.forEach(item => {
    item.addEventListener("click", event => {
        liElement.forEach(el => {
            el.classList.remove("active");
        });
        event.target.classList.add("active");
        let getLiIndex = item.getAttribute("li-index");
        songIndex = getLiIndex;
        loadSong(songIndex);
        playSong();
    });
});

function addActive() {
    liElement.forEach(li => li.classList.remove("active"));
    liElement[songIndex].classList.add("active");
}


function bubbles() {
    const count = 250;
    const container = document.querySelector(".container");
    let i = 0;
    while (i < count) {
        const snow = document.createElement("div");
        snow.className = ("snow")
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let size = Math.random() * 8;

        snow.style.left = x + "px";
        snow.style.top = y + "px";
        snow.style.width = 1 + size + "px";
        snow.style.height = 1 + size + "px";

        snow.style.animationDuration = 6 + size + "s";
        snow.style.animationDelay = -size + "s";
        container.appendChild(snow);
        i++
    }
}
bubbles();

playBtn.addEventListener("click", ()=> {
    const isPlaying = musicPlayer.classList.contains("play");

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", nextSong);
volume.addEventListener("input", function(){
    audio.volume = volume.value/100
});