console.log('Welcome to Spotify');

let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let masterSong = document.getElementById('masterSong')
let myprogressBar = document.getElementById('myprogressbar');
let audioElement = new Audio('music/1.mp3');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('SongItemPlay'));
let timestamp = Array.from(document.getElementsByClassName('timestamp'));

let songs = [
    {songName: 'let me Love You', Filepath: 'music/1.mp3', Coverpath: 'covers/1.jpg'},
    {songName: 'DVRST Close Eyes', Filepath: 'music/2.mp3', Coverpath: 'covers/2.jpg'},
    {songName: 'Love me Like You Do', Filepath: 'music/3.mp3', Coverpath: 'covers/3.jpg'},
    {songName: 'Still DRE', Filepath: 'music/4.mp3', Coverpath: 'covers/4.jpg'},
    {songName: 'Hymn For the Weekend', Filepath: 'music/5.mp3', Coverpath: 'covers/5.jpg'},
    {songName: 'Just Regular Everyday', Filepath: 'music/6.mp3', Coverpath: 'covers/6.jpg'},
    {songName: 'Peaky Blinders', Filepath: 'music/7.mp3', Coverpath: 'covers/7.jpg'},
    {songName: 'Papi Papi', Filepath: 'music/8.mp3', Coverpath: 'covers/8.jpg'},
    {songName: '13 LANY', Filepath: 'music/9.mp3', Coverpath: 'covers/9.jpg'},
    {songName: 'Tokyo Drift', Filepath: 'music/10.mp3', Coverpath: 'covers/10.jpg'}
] 
console.log('songs/music/1.mp3'.duration);

songItem.forEach((element, i)=>{
     element.getElementsByTagName('img')[0].src = songs[i].Coverpath;
     element.getElementsByTagName('span')[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', ()=>{
     if (audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
         gif.style.opacity = 1;
     }
     else{
         audioElement.pause();
         masterPlay.classList.remove('fa-circle-pause');
         masterPlay.classList.add('fa-circle-play');
         gif.style.opacity = 0;
     }
});

audioElement.addEventListener('timeupdate', ()=>{
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myprogressBar.value = progress;  
});    

myprogressBar.addEventListener('change', ()=>{
     audioElement.currentTime = myprogressBar.value/100*audioElement.duration;
});

const makeallplays = ()=>{
    songItemPlay.forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
};

songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songIndex = parseInt(e.target.id);  
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `music/${songIndex+1}.mp3`;
        masterSong.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
});

document.getElementById('previous').addEventListener('click', ()=>{
     if(songIndex<=0){
         songIndex = 9;
     }
     else{
         songIndex -= 1;
     }
        audioElement.src = `music/${songIndex+1}.mp3`;
        masterSong.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        if (songIndex === 9){
            document.getElementById('9').classList.remove('fa-circle-play');
            document.getElementById('9').classList.add('fa-circle-pause');
            document.getElementById('0').classList.remove('fa-circle-pause');
            document.getElementById('0').classList.add('fa-circle-play');
        }
        document.getElementById(`${songIndex+1}`).classList.remove('fa-circle-pause');
        document.getElementById(`${songIndex+1}`).classList.add('fa-circle-play');
        document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
        document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
});
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    if (songIndex === 0){
        document.getElementById('9').classList.remove('fa-circle-pause');
        document.getElementById('9').classList.add('fa-circle-play');
        document.getElementById('0').classList.remove('fa-circle-play');
        document.getElementById('0').classList.add('fa-circle-pause');
    }
    else{
        document.getElementById(`${songIndex-1}`).classList.remove('fa-circle-pause');
        document.getElementById(`${songIndex-1}`).classList.add('fa-circle-play');
        document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
        document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
    }
});













