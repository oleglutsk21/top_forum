$(document).ready (function () {
    videoHendler();
});

function videoHendler() {
    let playButton = document.getElementById("promo-video__play-button");
    let video = document.getElementById("promo-video");
    playButton.addEventListener("click", function() {
        video.play();
        playButton.style.display = 'none';
        video.paused = false;
    });
    video.addEventListener("play", function() {
        playButton.style.display = 'none';
    });
    video.addEventListener("pause", function() {
        playButton.style.display = 'flex';
    });
};
