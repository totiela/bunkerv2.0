document.getElementById("playAudioButton").addEventListener("click", function() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();
    setTimeout(function() {
    window.location.href = "choose.html";
}, 200); // Измените значение задержки по вашему усмотрению
});

document.getElementById("showRandomTextButton").addEventListener("click", function() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();

});

