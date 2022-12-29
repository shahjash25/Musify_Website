const music=new Audio('audio/1.mp3');
// music.play();

const songs=[
    {
        id: 1,
        songName:'On My Way <br><div class="subtitle">Alan Walker</div>',
        poster:"img/1.jpg"
    },{
        id: 2,
        songName:'faded <br><div class="subtitle">Alan Walker</div>',
        poster:"img/2.jpg"
    },
    {
        id: 3,
        songName:'On and On <br><div class="subtitle">Cartoon</div>',
        poster:"img/3.jpg"
    },
    {
        id: 4,
        songName:'Warriyo <br><div class="subtitle">Mortals</div>',
        poster:"img/4.jpg"
    },
    {
        id: 5,
        songName:'Ertugrul Ghazi <br><div class="subtitle">Ertugrul</div>',
        poster:"img/5.jpg"
    },
    {
        id: 6,
        songName:'Electroic Music <br><div class="subtitle">Electro</div>',
        poster:"img/6.jpg"
    },
    {
        id: 7,
        songName:'Agar Tum sath ho <br><div class="subtitle">Alka Yagnik</div>',
        poster:"img/7.jpg"
    },
    {
        id: 8,
        songName:'Suna hai <br><div class="subtitle">Neha kakkar</div>',
        poster:"img/8.jpg"
    },
    {
        id: 9,
        songName:'Dilbar <br><div class="subtitle">Neha kakkar</div>',
        poster:"img/9.jpg"
    },
    {
        id: 10,
        songName:'Duniya <br><div class="subtitle">Akhil</div>',
        poster:"img/10.jpg"
    },
    {
        id: 11,
        songName:'Lagdi Lahore di <br><div class="subtitle">Guru Randha</div>',
        poster:"img/11.jpg"
    },
    {
        id: 12,
        songName:'Putt jatt da <br><div class="subtitle">Putt jatt da</div>',
        poster:"img/12.jpg"
    },
    {
        id: 13,
        songName:'On My Way <br><div class="subtitle">Alan Walker</div>',
        poster:"img/13.jpg"
    },
    {
        id: 14,
        songName:'Baarishen <br><div class="subtitle">Atif Aslam</div>',
        poster:"img/14.jpg"
    },
    {
        id: 15,
        songName:'Lut gaye<br><div class="subtitle">Jubin nautiyal</div>',
        poster:"img/15.jpg"
    },
    {
        id: 16,
        songName:'Meri zindagi hai Tu <br><div class="subtitle">Jubin nautiyal</div>',
        poster:"img/16.jpg"
    },
    {
        id: 17,
        songName:'Jab wo dil churaya tha <br><div class="subtitle">Rahat Fateh ali khan</div>',
        poster:"img/17.jpg"
    },
    {
        id: 18,
        songName:'Pasoori <br><div class="subtitle">Ali sethi,Shae gill</div>',
        poster:"img/18.jpg"
    },
    {
        id: 19,
        songName:'Ek Munde pagal ne saare <br><div class="subtitle">Ap dhillon</div>',
        poster:"img/19.jpg"
    },
    {
        id: 20,
        songName:'Dunny 2k<br><div class="subtitle">Ap Dhillon</div>',
        poster:"img/20.jpg"
    },

]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;

});

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');


masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
});

let index=0;
// index++;
// console.log(index);

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        let abc=el.target.id;
        // console.log(abc);
        music.src=`audio/${index}.mp3`;
        music.play();
    })
})

let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');

let pop_song=document.getElementsById('pop_song_script');

pop_song_right.addEventListener('click',() => {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
})
