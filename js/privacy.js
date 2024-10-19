document.addEventListener("DOMContentLoaded", function () {
    const myCursor = document.getElementById("cursor");
    console.log(myCursor);

    const video = document.getElementById("privacyVideo");

    video.pause();

    video.addEventListener("loadedmetadata", function () {
        video.currentTime = 0.5;
    });

    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    window.addEventListener("mousemove", function (e) {
        const x = e.clientX;
        const y = e.clientY;
        const cursorWidth = myCursor.offsetWidth;
        const cursorHeight = myCursor.offsetHeight;

        myCursor.style.transform = `translate(${x - cursorWidth / 2}px, ${y - cursorHeight / 2}px)`;
    });
});
