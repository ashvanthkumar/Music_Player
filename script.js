let prev=document.querySelector('#pre');
let play=document.querySelector('#play');
let next=document.querySelector('#next');
let title=document.querySelector('#title');
let artist=document.querySelector('#artist');
let slider=document.querySelector('#dur_slider');
let song_img=document.querySelector('#song_img');

let timer;
let autoplay=1;
let index=0;
let playing=false;

let track=document.createElement('audio');

let All_song=[
    {  name:"Alone",
       path:"songs/Alone(PagalWorld).mp3",
       img :"images/alone.jpg",
       artist:"Alan Walker"
    },
    {  name:"Abcdefu",
       path:"songs/Abcdefu(PagalWorld).mp3",
       img :"images/abcdefu.jpg",
       artist:"Gayle"
    },
    {  name:"Let Me Down Slowely",
       path:"songs/Let Me Down Slowly x Main Dhoondne Ko Zamaane Mein Mashup(PagalWorld).mp3",
       img :"images/Letmedownslowely.jpg",
       artist:"Alec Benjamin"
    },
    {  name:"Arcade",
       path:"songs/Arcade(PagalWorld).mp3",
       img :"images/arcade.jpg",
       artist:"Duncan Laurence"
    }
];

function load_track(index)
{
    clearInterval(timer);
    reset_slider();

    track.src= All_song[index].path;
    title.innerHTML=All_song[index].name;
    song_img.src=All_song[index].img;
    artist.innerHTML=All_song[index].artist;

    timer=setInterval(slider,1000);
    total.innerHTML=All_song.length;
    present.innerHTML=index+1;
}
load_track(index);

function curr_song()
{
     if(playing==false)
     {
        playsong();
     }
     else{
        pausesong();
     }
}

function reset_slider()
{
    slider.value=0;
}

function playsong()
{
    track.play();
    playing=true;
    play.innerHTML='<i class="fa fa-pause"></i>';
}

function pausesong()
{
    track.pause();
    playing=false;
    play.innerHTML='<i class="fa fa-play"></i>';
}

function next_song(){
    play.innerHTML='<i class="fa fa-play"></i>';
    playing=false;
    if(index < All_song.length-1){
        index+=1;
        load_track(index);
        playsong();
    }
    else{
        index=0;
        load_track(index);
        playsong();
    }
}

function prev_song(){
    play.innerHTML='<i class="fa fa-play"></i>';
    playing=false;
    if(index > 0){
        index-=1;
        load_track(index);
        playsong();
    }
    else{
        index=All_song.length-1;
        load_track(index);
        playsong();
    }
}

function ChangeDuration()
{
    slider_position=track.duration*(slider.value/100);
    track.currentTime=slider_position;
}

console.log(prev);