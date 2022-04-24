var musicName = document.getElementById("musicName");
var artistName = document.getElementById("artistName");
var music = document.querySelector("audio");
var image = document.querySelector("img");
var play = document.getElementById("play");
var prev = document.getElementById("prev");
var next = document.getElementById("next");


// music list
const musicList = [
    {
        name : "Over The Horizon",
        artist : "Samsung",
        src : "./music/over_the_horizon.mp3",
        imgSrc : "./img/over_the_horizon.jpg"
    },

    {
        name : "Bhalobasbo Bashbo Re",
        artist : "Habib",
        src : "./music/Bhalobashbo_Bashbo_Re_by_Habib.mp3",
        imgSrc : "./img/bhalo_basbo_basbo_re.jpg"
    },

    {
        name : "Khola Janala",
        artist : "Tahsin Ahmed",
        src : "./music/khola_janala_tahsin_ahmed.mp3",
        imgSrc : "./img/khola_janala_tahsin.jpg"
    }
]

const loadMusic = (musicList) => {
    musicName.innerHTML = musicList.name;
    artistName.innerHTML = musicList.artist;
    music.src = musicList.src;
    image.src = musicList.imgSrc;
}


var playState = false;

const playMusic = () => {
    playState = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    image.classList.add("anim");
}

const pauseMusic = () => {
    playState = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    image.classList.remove("anim")
}

play.addEventListener("click", () => {
    if(playState){
        pauseMusic();
    }
    else{
        playMusic();
    }
})






var index = 0
const nextMusic = () => {
    index = (index + 1) % musicList.length;
    loadMusic(musicList[index]);
    playMusic();
}

const prevMusic = () => {
    index = ((index - 1) + musicList.length) % musicList.length;
    loadMusic(musicList[index]);
    playMusic();
}

next.addEventListener("click", nextMusic)
prev.addEventListener("click", prevMusic)