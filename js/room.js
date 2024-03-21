

var yearsInBunker = Math.floor(Math.random() * 10) + 1;

// Отображаем случайное число на странице
if (yearsInBunker >= 1 && yearsInBunker <= 4){
if (yearsInBunker == 1) {
    document.getElementById("yearsInBunker").innerText = yearsInBunker + " год";
} else{ (yearsInBunker >= 2 && yearsInBunker <= 4)
    document.getElementById("yearsInBunker").innerText = yearsInBunker + " года"; 
}}
 else {
    document.getElementById("yearsInBunker").innerText = yearsInBunker + " лет"
}

// Генерация случайного числа от 30 до 500 с шагом 10
function generateRandomNumber() {
    var min = 30;
    var max = 500;
    var step = 10;

    // Вычисление возможных значений
    var possibleValues = [];
    for (var i = min; i <= max; i += step) {
        possibleValues.push(i);
    }

    // Выбор случайного значения из возможных
    var randomIndex = Math.floor(Math.random() * possibleValues.length);
    return possibleValues[randomIndex];
}

// Пример использования
var size = generateRandomNumber();
document.getElementById("size").innerText = " " + size;


var randomTexts = [
    "Литий",
    "Пусто(((",
    "Автоматическая туррель",
    "Сломанное радио",
    "Гаечный ключ",
    "Канистра бензина",
    "Газета 'Правда'",
    "Набор первой помощи",
    "Марихуана XD",
    "Мешок кофе",
    "Настольная игра 'бункер'",
    "Набор рыбака",
    "Смартфон",
    "Тетрадь с ручкой",
    "Бритва Gillette",
    "Наушники с плеером",
    "Морфин",
    "Антикварные часы Rolex",
    "Гроб",
    "Плакат с Джеки Чаном",
    "Полицейские наручники",
    "Мешок сахара 5кг",
    "Колеса с шестёрки",
    "Пластилин",
    "CD-Диск с 10гб порно",
    "100гр жареных тараканов",
    "10 икринок лосося",
    "Телескоп",
    "Микрофон",
    "Батарейки ААА 8шт",
    "Несколько деревянных досок",
    "Фильтр для очистки воды",
    "Горшок с проростком розы",
    "Бутылка Русского Стандарта"

];

var addedItemsCount = 0;

function showRandomText() {
    if (addedItemsCount < 3) {
        var randomIndex = Math.floor(Math.random() * randomTexts.length);
        var randomText = randomTexts[randomIndex];
        var randomTextContainer = document.getElementById("randomTextContainer");
        var newDiv = document.createElement("div");
        newDiv.textContent = "Предмет " + (addedItemsCount + 1) + ": " + randomText; // Создаем новый элемент <div> для каждого предмета
        randomTextContainer.appendChild(newDiv); // Добавляем новый элемент <div> в контейнер
        addedItemsCount++;

        if (addedItemsCount === 3) {
            // Если добавлено 3 предмета, скрываем кнопку "Добавить предмет"
            document.getElementById("showRandomTextButton").style.display = "none";
        }
    }
}

document.getElementById("showRandomTextButton").addEventListener("click", showRandomText);
