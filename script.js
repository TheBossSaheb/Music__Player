console.log("Welcome to Spotify")

//Initialize the Variables
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressbar');
let gif= document.getElementById('gif');
let measterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {SongName:"warriyo Mortar [NCS released]", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {SongName:"Cielo-huma-huma", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {SongName:"Deaf KEV", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {SongName:"Different Heaven", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {SongName:"Janji-Heroes", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {SongName:"Saleam-E-Ishq", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {SongName:"Saleam-E-Ishq", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},

]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].SongName;
})
//audioElement.play();

//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress; 
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        measterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1; 
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    measterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    measterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})