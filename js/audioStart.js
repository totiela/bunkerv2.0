var backMelodyAudio = document.getElementById("backMelody");
        var toggleSoundButton = document.getElementById("toggleSoundButton");
        
        toggleSoundButton.addEventListener("click", function() {
            if (backMelodyAudio.paused) {
                backMelodyAudio.play();
                toggleSoundButton.innerText = "Выключить звук";
                var audio = document.getElementById("backgroundAudio");
                audio.play();
            } else {
                backMelodyAudio.pause();
                toggleSoundButton.innerText = "Включить звук";
                var audio = document.getElementById("backgroundAudio");
                audio.play();
            }
        });