var app = document.querySelector(".app");
var musicName = document.getElementById("musicName");
var artistName = document.getElementById("artistName");
var music = document.querySelector("audio");
var musicNumber =document.getElementById("musicNumber");
var wave = document.getElementById("wave");
var image = document.querySelector("img");
var play = document.getElementById("play");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var curTime = document.getElementById("curTime");
var finalTime = document.getElementById("finalTime");
var progress = document.getElementById("progress");
var range = document.getElementById("range");





// music list
const musicList = [
    {
        name : "এলো খুশির ঈদ",
        artist : "Momtaj begum & Sabina yasmin",
        src : "./music/romjaner_oi_rojar_sheshe_elo_khushir_eid.mp3",
        imgSrc : "./img/elo_khusir_eid.jpg"
    },

    {
        name : "স্বপ্ন যাবে বাড়ি আমার",
        artist : "Grameenphone",
        src : "./music/shopno_jabe_bari.mp3",
        imgSrc : "./img/shopno-jabe-bari-amar-grameenphone.jpg"
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
        name : "তোমারে দেখিল",
        artist : "Habib Wahid & Najmun Munia Nanci",
        src : "./music/tomare_dekhilo.mp3",
        imgSrc : "./img/tomare_dekhilo.jpg"
    },

    {
        name : "সেই তুমি",
        artist : "Ayub Bacchu",
        src : "./music/shei_tumi.mp3",
        imgSrc : "./img/shei_tumi.jpg",
    },

    {
        name : "ভালো আছি ভালো থেকো",
        artist : "Andrew Kishore & Kanak Chapa",
        src : "./music/valo_achi_valo_theko.mp3",
        imgSrc : "./img/valo_achi_valo_theko.jpg",
    },

    {
        name : "লিখিনি প্রেমের চিঠি",
        artist : "Sabina Yasmin & Khalid Hassan Milu",
        src : "./music/likhini_premeri_chithi.mp3",
        imgSrc : "./img/likhini_premer_chithi.jpg"
    },

    {
        name : "অপরাধী",
        artist : "Arman Alif",
        src : "./music/oporadhi_arman_alif.mp3",
        imgSrc : "./img/oporadhi.jpg",
    },
    
    {
        name : "নেশা",
        artist : "Arman Alif",
        src : "./music/nesha_arman_alif.mp3",
        imgSrc : "./img/nesha.jpg",
    },
    
    {
        name : "আম্মাজান আম্মাজান",
        artist : "Ayub Bacchu",
        src : "./music/ammajan_ayub_bacchu.mp3",
        imgSrc : "./img/ammajan_ammajan.jpg",
    },

    {
        name : "Kun Faya Kun",
        artist : "A R Rahman",
        src : "./music/kun_faya_kun.mp3",
        imgSrc : "./img/kun_faya_kun.jpg"
    },

    {
        name : "Khwaja Mere Khwaja",
        artist : "A R Rahman",
        src : "./music/khwaja_mere_khwaja.mp3",
        imgSrc : "./img/khwaja_mere_khwaja.jpg"
    },

    {
        name : "Agar Tum Sath Ho",
        artist : "Arijit Singh & Alka Yagnik",
        src : "./music/agar_tum_sath_ho.mp3",
        imgSrc : "./img/agar_tum_sath_ho.jpg"
    },

    {
        name : "Tere Liye",
        artist : "Sreya Ghosal & Atif Aslam",
        src : "./music/tere_liye.mp3",
        imgSrc : "./img/tere_liye.jpg"
    },

    {
        name : "Over The Horizon",
        artist : "Samsung",
        src : "./music/Over_the_horizon.mp3",
        imgSrc : "./img/over_the_horizon.jpg"
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
    wave.style.display = "flex";
    app.classList.add("app-background");
    volume();
}

const pauseMusic = () => {
    playState = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    image.classList.remove("anim");
    wave.style.display = "none";
    app.classList.remove("app-background");
}

play.addEventListener("click", () => {
    if(playState){
        pauseMusic();
    }
    else{
        playMusic();
    }
})

// for volume

function volume(){
    music.volume = range.value / 100;
}



// for next & previous buttons

var index = 0
const nextMusic = () => {
    index = (index + 1) % musicList.length;
    loadMusic(musicList[index]);
    musicNumber.innerHTML = `${index + 1} of ${musicList.length}`;
    playMusic();
}

const prevMusic = () => {
    index = ((index - 1) + musicList.length) % musicList.length;
    loadMusic(musicList[index]);
    musicNumber.innerHTML = `${index + 1} of ${musicList.length}`;
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
    // index = (index + 1) % musicList.length;

    // index = 1 + index;
    musicNumber.innerHTML = `${index + 1} of ${musicList.length}`;
}