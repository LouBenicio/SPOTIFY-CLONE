console.log("JS funcionando");

const buttons = document.querySelectorAll(".play");
const display = document.getElementById("current-music");
const audio = document.getElementById("audio");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const time = document.getElementById("time");

const songs = [
  {
    name: "Treino",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {    
   name: "Estudos",
   src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    name: "Favoritas",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    name: "Pagode",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    name: "Forró",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    name: "Eletrônica",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  }
];

let currentSong = null;

buttons.forEach((btn, index) => {
  btn.addEventListener("click",() => {
    currentSong = songs[index];
    audio.src = currentSong.src;

    audio.play().catch(() => {
      console.log("erro ao tocar");
    });

    display.textContent = "Tocando: " + currentSong.name;
  });
});

playPause.addEventListener("click", () => {
  if (!audio.src) return;

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }

  let minutes = Math.floor(audio.currentTime / 60);
  let seconds = Math.floor(audio.currentTime %60);

  if (seconds <10) seconds = "0" + seconds;

  time.textContent = `${minutes}:${seconds}`;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

const playlists = {
  hits: [
    { name: "Hit 1", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", img: "https://picsum.photos/200?10" },
    { name: "Hit 2", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", img: "https://picsum.photos/200?11" }
  ],

  sofrencia: [
    { name: "Triste 1", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", img: "https://picsum.photos/200?12" },
    { name: "Triste 2", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", img: "https://picsum.photos/200?13" }
  ],

  treino: [
    { name: "Treino 1", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", img: "https://picsum.photos/200?14" },
    { name: "Treino 2", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", img: "https://picsum.photos/200?15" }
  ]
};