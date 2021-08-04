let textItem = document.getElementById("textItem");
let addButtonItem = document.getElementById("addItem");

addButtonItem.onclick = function () {
  let text;
  textItem.value !== "" ? (text = textItem.value) : false;
  console.log(text);
  addElement();
};

function addElement() {
  // Создаём новый элемент div
  // и добавляем в него немного контента

  var newDiv = document.createElement("div");
  newDiv.innerHTML = "<h1>Привет!</h1>";

  // Добавляем только что созданный элемент в дерево DOM

  my_div = document.getElementById("records");
  document.body.insertBefore(newDiv, my_div);
}
