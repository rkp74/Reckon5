setInterval(updateTime, 1000);

function updateTime() {
    time.innerHTML = new Date();
}

function startVideo() {
    var video = document.getElementById("mainVideo");
    var overlay = document.querySelector(".video-overlay");
    var playButton = document.getElementById("playButton");

    video.play();
    overlay.style.display = "none";
    playButton.style.display = "none";
}