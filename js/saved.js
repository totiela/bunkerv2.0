function loadLastData(){
    var audio = document.getElementById("backgroundAudio");
    audio.play();
    setTimeout(function() {
        window.location.href = "saved.html";
    }, 200); // Измените значение задержки по вашему усмотрению
    
}

document.getElementById("playAudioButton6").addEventListener("click", function() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();
    setTimeout(function() {
    window.location.href = "enter_info.html";
}, 200); // Измените значение задержки по вашему усмотрению
});


function LoadLastInfo(){
    var name = localStorage.getItem("name");
    var age = localStorage.getItem("age");
    var randomPer = localStorage.getItem("randomPer");
    var randomBodyType = localStorage.getItem("randomBodyType");
    var randomPhobia = localStorage.getItem("randomPhobia");
    var randomNum = localStorage.getItem("randomNum");
    var phrase = localStorage.getItem("phrase")
    var NoAge = localStorage.getItem("ageNotSpecified");
    if (NoAge === "true"){
        document.getElementById("resultAge2").innerText = "---";
    }else{
        document.getElementById("resultAge2").innerText = " " + age;
    }
    document.getElementById("resultName2").innerText = " " + name;
    document.getElementById("bodyType2").innerText = " " + randomBodyType;
    document.getElementById("randomPercent2").innerText = " " + randomPer + "%";
    document.getElementById("phobia2").innerText = " " + randomPhobia;

    if (NoAge === "true") {
        document.getElementById("randomNumber2").innerText = "---";
    } else {
    
        if (randomNum >= 0 && randomNum <= 4) {
            if (randomNum == 0) {
                document.getElementById("randomNumber2").innerText = "< 1 года";
            } else if (randomNum == 1) {
                document.getElementById("randomNumber2").innerText = randomNum + " год";
            } else if (randomNum >= 2 && randomNum <= 4) {
                document.getElementById("randomNumber2").innerText = randomNum + " года";
            }
        } else {
            document.getElementById("randomNumber2").innerText = randomNum + " лет";
        }
    }
    
    
    
    
    
    // if (randomNum >=0 && randomNum <=4){
    // if (randomNum == 0){
    //     document.getElementById("randomNumber2").innerText = " " + "< 1" + " года";
    // }
    // if (randomNum == 1){
    //     document.getElementById("randomNumber2").innerText = randomNum + " год";
    // } 
    // if (randomNum >= 2 && randomNum <= 4)
    // {
    // document.getElementById("randomNumber2").innerText = " " + randomNum + " года";
    // }}
    // else {
    //     document.getElementById("randomNumber2").innerText = " " + randomNum + " лет";
    // };

    document.getElementById("extra").innerText = phrase;
 };

 LoadLastInfo();