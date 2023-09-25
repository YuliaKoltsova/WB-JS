// Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент, 
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.

const createNewElement = () => {
  const div = document.createElement("div"); // создаем элемент div
  div.innerHTML = "<h1>Новый элемент</h1>"; // добавляем содержимое div'a
  div.style.backgroundColor = "blue"; // задаем фоновый цвет
  div.style.color = "white"; // задаем цвет текста
  document.body.append(div); // добавляем созданный и стилизованный div на страницу
}

createNewElement();
