const musicas = [
    {
        titulo: "MIND OF STEEL",
        artista: "ROCK ANTHEM",
        capa: "img/thumb/MIND OF STEEL.png",
        audio: "audio/MIND OF STEEL.mp3"
    },
    {
        titulo: "WISDOW AND PRUDENCE",
        artista: "ROCK ANTHEM",
        capa: "img/thumb/WISE AND PRUDENCE.png",
        audio: "audio/WISE MIND.mp3"
    },
    {
        titulo: "RISE AND CONQUER",
        artista: "ROCK ANTHEM",
        capa: "img/thumb/RISE AND CONQUER.png",
        audio: "audio/RISE AND CONQUER.mp3"
    },
    {
        titulo: "A PRECIOUS PREASURE",
        artista: "ROCK ANTHEM",
        capa: "img/thumb/A PRECIOUS PREASURE.png",
        audio: "audio/A PRECIOUS PREASURE.mp3"
    },
    {
        titulo: "FIGHT FOR YOU PURPOSE",
        artista: "ROCK ANTHEM",
        capa: "img/thumb/FIGHT FOR YOU PURPOSE.png",
        audio: "audio/FIGHT FOR YOU PURPOSE.mp3"
    },
    {
        titulo: "NO MORE FAILURE",
        artista: "ROCK ANTHEM",
        capa: "img/thumb/NO MORE FAILURE.png",
        audio: "audio/NO MORE FAILURE.mp3"
    },
    {
        titulo: "FEAR WONT DECIDE",
        artista: "ROCK ANTHEM",
        capa: "img/thumb/FEAR WONT DECIDE.png",
        audio: "audio/FEAR WONT DECIDE.mp3"
    },
    {
        titulo: "WHO I BECOME",
        artista: "ROCK ANTHEM",
        capa: "img/thumb/WHO I BECOME.png",
        audio: "audio/WHO I BECOME.mp3"
    }
];
function play_music(i) {
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
}

function play_(i) {
    const title = document.getElementById('music_title');
    const img = document.getElementById('thumb_img');
    const audio = document.getElementById("audio");

    title.textContent = musicas[i].titulo;
    img.src = musicas[i].capa;
    audio.src = musicas[i].audio;
    play_music(i)
}