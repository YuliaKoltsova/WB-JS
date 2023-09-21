// Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент, 
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.

const createNewElement = () => {
  const div = document.createElement("div");
  div.innerHTML = "<h1>Новый элемент</h1>";
  div.style.backgroundColor = "blue";
  div.style.color = "white"
  document.body.append(div);
}

createNewElement();
