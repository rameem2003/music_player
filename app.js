var musicName = document.getElementById("musicName");
var artistName = document.getElementById("artistName");
var music = document.querySelector("audio");
var image = document.querySelector("img");
var play = document.getElementById("play");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var curTime = document.getElementById("curTime");
var finalTime = document.getElementById("finalTime");
var progress = document.getElementById("progress");


// music list
const musicList = [
    {
        name : "স্বপ্ন যাবে বাড়ি আমার",
        artist : "Grameenphone",
        src : "./music/shopno_jabe_bari.mp3",
        imgSrc : "./img/shopno-jabe-bari-amar-grameenphone.jpg"
    },

    {
        name : "Over The Horizon",
        artist : "Samsung",
        src : "./music/over_the_horizon.mp3",
        imgSrc : "./img/over_the_horizon.jpg"
    },

    {
        name : "ভালবাসবো বাসবো রে বন্ধু",
        artist : "Habib Wahid",
        src : "./music/Bhalobashbo_Bashbo_Re_by_Habib.mp3",
        imgSrc : "./img/bhalo_basbo_basbo_re.jpg"
    },

    {
        name : "খোলা জানালা",
        artist : "Tahsin Ahmed",
        src : "./music/khola_janala_tahsin_ahmed.mp3",
        imgSrc : "./img/khola_janala_tahsin.jpg"
    },

    {
        name : "এই অবেলায়",
        artist : "Shironamhin",
        src : "./music/ei_obelay_shironamhin.mp3",
        imgSrc : "./img/ei_obelay.jpg"
    },

    {
        name : "Tere Liye",
        artist : "Sreya Ghosal, Atif Aslam",
        src : "./music/tere_liye.mp3",
        imgSrc : "./img/tere_liye.jpg"
    },
]


// load music


const loadMusic = (musicList) => {
    musicName.innerHTML = musicList.name;
    artistName.innerHTML = musicList.artist;
    music.src = musicList.src;
    image.src = musicList.imgSrc;
}


// for play button


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
    image.classList.remove("anim");
}

play.addEventListener("click", () => {
    if(playState){
        pauseMusic();
    }
    else{
        playMusic();
    }
})




// for next & previous buttons

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

next.addEventListener("click", nextMusic);
prev.addEventListener("click", prevMusic);



// for time & progress

music.addEventListener("timeupdate", (e) => {
    // console.log(e);

    const {currentTime, duration} = e.srcElement;
    var progressCount = (currentTime / duration) * 100;
    progress.style.width = `${progressCount}%`;


    // for final time
    var minute_duration = Math.floor(duration / 60);
    var second_duration = Math.floor(duration % 60);

    if(second_duration < 10){
        second_duration = `0${second_duration}`
    }
    
    if(duration){
        finalTime.innerHTML = `${minute_duration} : ${second_duration}`;
    }


    // for current time
    var currentTimeMinute = Math.floor(currentTime / 60);
    var currentTimeSecond = Math.floor(currentTime % 60);

    if(currentTimeSecond < 10){
        currentTimeSecond = `0${currentTimeSecond}`
    }

    if(currentTime){
        curTime.innerHTML = `${currentTimeMinute} : ${currentTimeSecond}`;
    }
})



window.onload = () =>{
    loadMusic(musicList[0]);
}