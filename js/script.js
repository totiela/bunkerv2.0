


document.addEventListener("DOMContentLoaded", function() {
    var rulesContainer = document.getElementById("rules");
    var questionButton = document.querySelector(".question-button");
    var closeButton = document.querySelector(".close-button");

    function toggleRulesContainer() {
        if (rulesContainer.style.display === "none") {
            rulesContainer.style.display = "block";
            var audio = document.getElementById("backgroundAudio");
            audio.play();
        } else {
            rulesContainer.style.display = "none";
            var audio = document.getElementById("backgroundAudio");
            audio.play();
        }
    }

    
        // Добавление обработчиков событий для кнопок questionButton и closeButton
        questionButton.addEventListener("click", toggleRulesContainer);
        closeButton.addEventListener("click", toggleRulesContainer);

});

document.getElementById("playAudioButton3").addEventListener("click", function() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();
    setTimeout(function() {
    window.location.href = "choose.html";
}, 200); // Измените значение задержки по вашему усмотрению
});


// function validateInput() {
//     var name = document.getElementById("name").value;
//     var age = document.getElementById("age").value;

//     // Очищаем предыдущие ошибки
//     document.getElementById("nameError").innerText = "";
//     document.getElementById("ageError").innerText = "";

//     // Проверяем, что введено имя
//     if (!name) {
//         document.getElementById("nameError").innerText = "Введите имя.";
//     }

//     // Проверяем, что введен возраст в виде числа и в допустимом диапазоне
//     if (!isNaN(age)) {
//         if (age <= 18 || age >= 120) {
//             document.getElementById("ageError").innerText = "Возраст должен быть от 18 и меньше 120.";
//         }
//     } else {
//         document.getElementById("ageError").innerText = "Введите корректный возраст.";
//     }

//     // Если ошибок нет, сохраняем данные и переходим на страницу результата
//     if (name && !isNaN(age) && age >= 18 && age < 120) {
//         localStorage.setItem("name", name);
//         localStorage.setItem("age", age);
//         window.location.href = "character.html";
//     }
// }


var ageInput = document.getElementById("age");
var ageNotSpecifiedCheckbox = document.getElementById("ageNotSpecified");

// Добавляем обработчик события input для поля ввода возраста
ageInput.addEventListener("input", function() {
    // Сбрасываем состояние чекбокса, если поле ввода содержит текст
    if (ageInput.value.trim() !== "") {
        ageNotSpecifiedCheckbox.checked = false; // Сбрасываем состояние чекбокса
    }
});

// Добавляем обработчик события change для чекбокса
ageNotSpecifiedCheckbox.addEventListener("change", function() {
    // Если чекбокс отмечен, очищаем поле ввода возраста
    if (ageNotSpecifiedCheckbox.checked) {
        ageInput.value = ""; // Очищаем поле ввода
    }
});

function validateInput() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var ageNotSpecified = document.getElementById("ageNotSpecified").checked;
    localStorage.setItem("ageNotSpecified", ageNotSpecified);

    // Очищаем предыдущие ошибки
    document.getElementById("nameError").innerText = "";
    document.getElementById("ageError").innerText = "";

    var audio = document.getElementById("backgroundAudio");
    audio.play();


    // Проверяем, что введено имя
    if (!name) {
        document.getElementById("nameError").innerText = "Введите имя.";
    }

    // Проверяем, что введен возраст в виде числа и в допустимом диапазоне
    if (!ageNotSpecified) {
        if (!isNaN(age)) {
            if (age < 18 || age >= 120) {
                document.getElementById("ageError").innerText = "Возраст должен быть от 18 и меньше 120.";
            }
        } else {
            document.getElementById("ageError").innerText = "Введите корректный возраст.";
        }
    }

    // Если ошибок нет или чекбокс "не указан" нажат, сохраняем данные и переходим на страницу результата
    if (name && (ageNotSpecified || (!isNaN(age) && age >= 18 && age < 120))) {
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        setTimeout(function() {
            window.location.href = "character.html";
        }, 200);

    }
}
