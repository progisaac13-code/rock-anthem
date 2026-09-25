const musicas = [
    {
        titulo: "MIND OF STEEL",
        artista: "ROCK ANTHEM",
        capa: "img/capa-1.jpg",
        audio: "audio/mind-of-steel.mp3"
    },

    {
        titulo: "WHO I BECOME",
        artista: "ROCK ANTHEM",
        capa: "img/capa-2.jpg",
        audio: "audio/who-i-become.mp3"
    },

    {
        titulo: "FIGHT FOR YOUR PURPOSE",
        artista: "ROCK ANTHEM",
        capa: "img/capa-3.jpg",
        audio: "audio/fight-for-your-purpose.mp3"
    }
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const volumeBtn = document.getElementById("volumeBtn");

playBtn.addEventListener("click", () => {

    if (audio.paused) {
        audio.play();
        playBtn.textContent = "❚❚";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }

});

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {

    const percentage =
        (audio.currentTime / audio.duration) * 100;

    progress.value = percentage;

    currentTime.textContent =
        formatTime(audio.currentTime);

});

progress.addEventListener("input", () => {

    const time =
        (progress.value / 100) * audio.duration;

    audio.currentTime = time;

});

audio.addEventListener("ended", () => {
    playBtn.textContent = "▶";
    progress.value = 0;
});

volumeBtn.addEventListener("click", () => {

    audio.muted = !audio.muted;

    volumeBtn.textContent =
        audio.muted ? "🔇" : "🔊";

});

function formatTime(seconds) {

    if (isNaN(seconds)) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2, "0")}`;
}