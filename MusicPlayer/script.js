const songs = [
{
    title: "Attention",
    artist: "Charlie Puth",
    src: "songs/Attention.mp3",
    img: "images/Attention.jpg"
},
{
    title: "Bones",
    artist: "Imagine Dragons",
    src: "songs/Bones.mp3",
    img: "images/bones.jpg"
},
{
    title: "Demons",
    artist: "Imagine Dragons",
    src: "songs/Demons.mp3",
    img: "images/demons.jpg"
}
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

function loadSong(index){

    audio.src = songs[index].src;
    cover.src = songs[index].img;
    title.innerText = songs[index].title;
    artist.innerText = songs[index].artist;

    audio.load();
}

loadSong(currentSong);

// Play / Pause
playBtn.addEventListener("click",function(){

    if(audio.paused){

        audio.play();
        playBtn.innerHTML="⏸";

    }else{

        audio.pause();
        playBtn.innerHTML="▶";

    }

});

// Next
nextBtn.addEventListener("click",function(){

    currentSong++;

    if(currentSong>=songs.length){

        currentSong=0;

    }

    loadSong(currentSong);
    audio.play();
    playBtn.innerHTML="⏸";

});

// Previous
prevBtn.addEventListener("click",function(){

    currentSong--;

    if(currentSong<0){

        currentSong=songs.length-1;

    }

    loadSong(currentSong);
    audio.play();
    playBtn.innerHTML="⏸";

});

// Playlist
function playSong(index){

    currentSong=index;

    loadSong(currentSong);

    audio.play();

    playBtn.innerHTML="⏸";

}

// Progress
audio.addEventListener("timeupdate",function(){

    if(audio.duration){

        progress.max=audio.duration;
        progress.value=audio.currentTime;

        let min=Math.floor(audio.currentTime/60);
        let sec=Math.floor(audio.currentTime%60);

        if(sec<10) sec="0"+sec;

        currentTime.innerHTML=min+":"+sec;

    }

});

// Duration
audio.addEventListener("loadedmetadata",function(){

    progress.max=audio.duration;

    let min=Math.floor(audio.duration/60);
    let sec=Math.floor(audio.duration%60);

    if(sec<10) sec="0"+sec;

    duration.innerHTML=min+":"+sec;

});

// Seek
progress.addEventListener("input",function(){

    audio.currentTime=progress.value;

});

// Volume
volume.addEventListener("input",function(){

    audio.volume=volume.value;

});

// Autoplay Next Song
audio.addEventListener("ended",function(){

    currentSong++;

    if(currentSong>=songs.length){

        currentSong=0;

    }

    loadSong(currentSong);

    audio.play();

});