const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

audio.onloadedmetadata = () => {
    durationDisplay.textContent = formatTime(audio.duration);
    progress.max = Math.floor(audio.duration);
};

audio.ontimeupdate = () => {
    progress.value = Math.floor(audio.currentTime);
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
};

progress.oninput = () => {
    audio.currentTime = progress.value;
};

playPauseBtn.onclick = () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
};

// Os outros botões podem ser personalizados depois
document.getElementById('back').onclick = () => { audio.currentTime -= 10; };
document.getElementById('forward').onclick = () => { audio.currentTime += 10; };
document.getElementById('shuffle').onclick = () => { alert("Shuffle ainda não implementado."); };
document.getElementById('repeat').onclick = () => { audio.loop = !audio.loop; };
document.getElementById('like').onclick = (e) => {
    e.target.textContent = e.target.textContent === '♡' ? '♥' : '♡';
};