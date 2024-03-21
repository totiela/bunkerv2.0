document.getElementById("playAudioButton").addEventListener("click", function() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();
    setTimeout(function() {
    window.location.href = "enter_info.html";
}, 200); // Измените значение задержки по вашему усмотрению
});





// Получаем данные из localStorage
var name = localStorage.getItem("name");
var age = localStorage.getItem("age");
var NoAge = localStorage.getItem("ageNotSpecified");


// Отображаем данные на странице
document.getElementById("resultName").innerText = " " + name;
if (NoAge === "true"){
    document.getElementById("resultAge").innerText = "---";
}else{
    document.getElementById("resultAge").innerText = " " + age;
}


var randomNum;

if (NoAge === "true") {
    document.getElementById("randomNumber").innerText = "---";
} else {
    randomNum = Math.floor(Math.random() * (age - 17));

    if (randomNum >= 0 && randomNum <= 4) {
        if (randomNum == 0) {
            document.getElementById("randomNumber").innerText = "< 1 года";
        } else if (randomNum == 1) {
            document.getElementById("randomNumber").innerText = randomNum + " год";
        } else if (randomNum >= 2 && randomNum <= 4) {
            document.getElementById("randomNumber").innerText = randomNum + " года";
        }
    } else {
        document.getElementById("randomNumber").innerText = randomNum + " лет";
    }
}

localStorage.setItem("randomNum", randomNum);

var randomPer = Math.floor(Math.random() * 10) * 10 + 10;
document.getElementById("randomPercent").innerText = " " + randomPer + "%";

localStorage.setItem("randomPer", randomPer);

var phobias = [
    "Арахнофобия (боязнь пауков)",
    "Агорафобия (боязнь открытых пространств)",
    "Клаустрофобия (боязнь закрытых пространств)",
    "Акрофобия (боязнь высоты)",
    "Герпетофобия (боязнь рептилий)",
    "Гемофобия (боязнь крови)",
    "Некрофобия (боязнь смерти)",
    "Трипанофобия (боязнь игл)",
    "Авиафобия (боязнь полетов)",
    "Гидрофобия (боязнь воды)",
    "Нет фобий",
    "Гомофобия (боязнь гомосексуальности)",
    "Фотофобия (боязнь света)",
    "Дентофобия (боязнь стоматологов и зубоврачебных процедур)",
    "Кинофобия (боязнь собак)",
    "Электрофобия (боязнь электричества)",
    "Тетрафобия (боязнь числа 4)",
    "Киберфобия (боязнь компьютеров и технологий)",
    "Генефобия (боязнь старых людей)",
    "Орнитофобия (боязнь птиц)",
    "Десмофобия (боязнь узоров)",
    "Мизофобия (боязнь грязи и бактерий)",
    "Теофобия (боязнь бога)",
    "Офидиофобия (боязнь змей)",
    "Лепидофобия (боязнь бабочек)",
    "Трипофобия (боязнь кластеров маленьких отверстий)",
    "Судофобия (боязнь вождения автомобиля)",
    "Гамофобия (боязнь брака)",
    "Киномеханофобия (боязнь киномеханизмов и роботов)",
    "Иньекциофобия (боязнь инъекций)",
    "Орфидеофобия (боязнь поэзии)",
    "Китаифобия (боязнь китайцев)",
    "Олеофобия (боязнь масла)",
    "Фотолехнофобия (боязнь фото- и видеотехники)",
    "Кайлетофобия (боязнь уродства)",
    "Аутофобия (боязнь одиночества)",
    "Нет Фобии",
    "Театрофобия (боязнь театра)",
    "Шакофобия (боязнь упакованных подарков)",
    "Гигантофобия (боязнь гигантских предметов)",
    "Демонофобия (боязнь демонов)",
    "Зоосадофобия (боязнь секса с животными)",
    "Криптофобия (боязнь скрытых вещей)",
    "Левофобия (боязнь левой стороны)",
    "Миллофобия (боязнь оружия)",
    "Митридатофобия (боязнь ядов)",
    "Нудофобия (боязнь нюдистов)",
    "Овофобия (боязнь яиц)",
    "Орофобия (боязнь открытых пространств)",
    "Педофобия (боязнь детей)",
    "Тафофобия (боязнь могил)",
    "Трентофобия (боязнь троллейбусов)",
    "Фрактофобия (боязнь мусора)",
    "Фунтофобия (боязнь смеха)",
  
];


// Выбираем случайную фобию
var randomPhobia = phobias[Math.floor(Math.random() * phobias.length)];
document.getElementById("phobia").innerText = " " + randomPhobia;

localStorage.setItem("randomPhobia", randomPhobia);


var bodyTypes = [
    "Худой",
    "Толстый",
    "Полный",
    "Атлет",
    "Среднее",
    "Бодибилдер"
];

var randomBodyType = bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
document.getElementById("bodyType").innerText = " " + randomBodyType;

localStorage.setItem("randomBodyType", randomBodyType);


var special = Math.floor(Math.random() * 65) + 1;
localStorage.setItem("special", special);

if (special == 2){
    console.log("Справа от вас враг")
    var phrase = "Особые условия: справа от вас враг, ваша задача избавиться от него";
    localStorage.setItem("phrase", phrase);
    document.getElementById("extra").innerText = phrase
};
if (special == 3){
    console.log("Слева от вас враг")
    var phrase = "Особые условия: слева от вас враг, ваша задача избавиться от него";
    localStorage.setItem("phrase", phrase);
    document.getElementById("extra").innerText = phrase
};
if (special == 4){
    console.log("Справа от вас друг")
    var phrase = "Особые условия: справа от вас друг, вам нужно протащить его в бункер";
    localStorage.setItem("phrase", phrase);
    document.getElementById("extra").innerText = phrase
};
if (special == 5){
    console.log("Слева от вас друг")
    var phrase = "Особые условия: слева от вас друг, вам нужно протащить его в бункер";
    localStorage.setItem("phrase", phrase);
    document.getElementById("extra").innerText = phrase
};
if (special == 0 || special > 5){
    var phrase = "";
    localStorage.setItem("phrase", phrase);
}
