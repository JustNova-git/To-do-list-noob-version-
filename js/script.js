// Использование LocalStorage в качестве хранилища записей
// Используется один ключ records со всеми записями в виде одной строки
// Функция addCheck проверяет отсутсвие пустой строки и создаёт фокус на элемент ввода, после подключает функцию addElement
// Функция addElement генерирует текст для отправки в HTML и в LocalStorage ячейку records
// Функция addElement принимает параметр text как текст, которые необходимо вывести в содержимое записи
// Функция addElement прибавляет сгенерированное значение к значению ключу records
//

let textItem = document.getElementById("textItem"); // Поле ввода текста
let addButtonItem = document.getElementById("addItem"); // Кнопка для добавления
let records = document.getElementById("records"); // Блок с записями

addButtonItem.onclick = addCheck;
textItem.onkeypress = function (event) {
  event.keyCode == 13 ? addCheck() : false;
};

function addCheck() {
  if (textItem.value !== "") {
    text = textItem.value;
    addElement(text);
    ``;
  } else {
    textItem.focus();
  }
}

// function addElement(text) {
//   records.insertAdjacentHTML(
//     "afterbegin",
//     '<div class="todo__record_item" id="item"> <p class="todo__record_record" id="item-text">' +
//       text +
//       '</p> <div class="todo__record_right"> <div class="todo__record_change" id="item-change">&#9998;</div> <div class="todo__record_del" id="item-del">&#10006;</div> </div> </div>'
//   );
// }

function addElement(text) {
  recordsText =
    '<div class="todo__record_item" id="item"> <p class="todo__record_record" id="item-text">' +
    text +
    "</p> </div>";
  recordItem = records.insertAdjacentHTML("afterbegin", recordsText);

  nowItems = localStorage.getItem("records");
  localStorage.setItem("records", nowItems + recordsText);

  textItem.value = "";
  text = "";
}

if (localStorage.getItem("records")) {
  let localValue = localStorage.getItem("records");
  records.insertAdjacentHTML("afterbegin", localValue);
}
