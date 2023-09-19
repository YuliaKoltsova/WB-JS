// Задача: Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента на веб-странице, 
// например, плавное изменение его положения или размера.

const button = document.querySelector(".button"); // Находим кнопку, к которой будем применять анимацию

// Добавление css свойств анимации с помощью js (по нажатию кнопка будет плавно окрашиваться в красный в течение 5 секунд)
button.addEventListener("click", (evt) => { // Анимация будет запускаться по клику на кнопку
  button.style.backgroundColor = "red"; // Цвет кнопки будет меняться на красный
  button.style.transitionProperty = "background-color"; // Тут указываем какое css свойство будем анимировать
  button.style.transitionDuration = "5s"; // Длительность анимации
})

// Анимация на js (по нажатию на кнопку, она будет плавно передвигаться вправо на 150 пикселей и обратно в течение 3 секунд)
button.addEventListener("click", (evt) => { // Анимация будет запускаться по клику на кнопку
  const animation = button.animate([ // Задаем параметры анимации
    {transform: 'translate(0)'},
    {transform: 'translate(150px, 0)'},
    {transform: 'translate(0)'}
  ], 3000); // Задаем время анимации
  animation.addEventListener('finish', function() { // Действия, после завершения анимации
    button.style.transform = 'translate(0, 0)'; // Кнопка возвращается на исходное место
  });
});
