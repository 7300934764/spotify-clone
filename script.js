console.log("welcome to spotify");

//initialize the variables
let songIndex = 0;
let audioElement= new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let playbar=document.getElementById('playbar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    { songName:" Namo-Namo",filepath:"songs/1.mp3",coverpath:"cover/1.jpg" },
    { songName:" sabse juda h teri", filepath:"songs/2.mp3", coverpath:"cover/2.jpg" },
    { songName:" pee-loon",filepath:"songs/3.mp3",coverpath:"cover/3.jpeg" },
    { songName:" Gun-guna",filepath:"songs/4.mp3",coverpath:"cover/4.jpeg" },
    { songName:" jeene lga hoon",filepath:"songs/5.mp3",coverpath:"cover/5.jpeg" },
    { songName:" tune jo na kaha ",filepath:"songs/6.mp3",coverpath:"cover/6.jpeg" },
    { songName:" te-amo",filepath:"songs/7.mp3",coverpath:"cover/7.jpeg" },
    { songName:" chitta",filepath:"songs/8.mp3",coverpath:"cover/8.jpeg" }
]

songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innertext = songs[i].songName;
})

//play/pause click..
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else { audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity=0;
    }
})
// songItemContainer.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//        songItemContainer.classList.remove('fa-circle-play');
//         songItemContainer.classList.add('fa-circle-pause');
//         masterplay.classList.remove('fa-circle-play');
//         masterplay.classList.add('fa-circle-pause');
//         gif.style.opacity=1;
//     }
//     else { audioElement.pause();
//     songItemContainer.classList.remove('fa-circle-pause');
//     songItemContainer.classList.add('fa-circle-play');
//     masterplay.classList.remove('fa-circle-pause');
//     masterplay.classList.add('fa-circle-play');
//     gif.style.opacity=0;
//     }

// })

// Play the audio
audioElement.play();

//listen to event
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//  console.log(progress);
 playbar.value=progress;
})

playbar.addEventListener('change',()=>{
    audioElement.currentTime=playbar.value*audioElement.duration/100;
})

const makeallplays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       makeallplays();
       songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');  
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })

 })
document.getElementById(`next`).addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0
    }
    else{
         songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})
document.getElementById(`previous`).addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
         songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})



