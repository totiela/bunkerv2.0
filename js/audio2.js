document.getElementById("playAudioButton").addEventListener("click", function() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();
    setTimeout(function() {
    window.location.href = "bunker_info.html";
}, 200); // Измените значение задержки по вашему усмотрению
});

document.getElementById("playAudioButton2").addEventListener("click", function() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();
    setTimeout(function() {
    window.location.href = "enter_info.html";
}, 200); // Измените значение задержки по вашему усмотрению
});

document.getElementById("playAudioButton10").addEventListener("click", function() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();
    setTimeout(function() {
    window.location.href = "index.html";
}, 200); // Измените значение задержки по вашему усмотрению
});



