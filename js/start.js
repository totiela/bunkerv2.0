document.getElementById("playAudioButton").addEventListener("click", function() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();
    setTimeout(function() {
    window.location.href = "choose.html";
}, 200); // Измените значение задержки по вашему усмотрению
});

var infoButton = document.getElementById("info");
        var infoBox = document.getElementById("infoBox");
        var closeButton = document.getElementById("closeInfo");

        infoButton.addEventListener("click", function() {
            infoBox.classList.toggle("show");
            var audio = document.getElementById("backgroundAudio");
            audio.play();
        });

        closeButton.addEventListener("click", function() {
            infoBox.classList.remove("show");
            var audio = document.getElementById("backgroundAudio");
            audio.play();

        });