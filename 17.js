// Необходимо реализовать простое поле ввода адреса с функцией геокодинга: пользователь вводит данные в поле 
// с помощью одного из геоинформационных сервисов (Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес. 
// Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.

// Реализация функции дебаунсинга
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
          fn(...args);
      }, delay);
  };
}

// Реализация функции защиты от троттлинга
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
      const now = Date.now();
      if (now - lastCall >= limit) {
          lastCall = now;
          fn(...args);
      }
  };
}

// Реализация функции геокодирования
const API_KEY = 'ВАШ_КЛЮЧ_YANDEX_API';

function geocode(query, callback) {
const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${query}`;
fetch(url)
  .then(response => response.json()) 
  .then(data => {
    const items = data.response.GeoObjectCollection.featureMember;
    callback(items.map(item => item.GeoObject.name));
  });
}

const debouncedGeocode = debounce(geocode, 300);  // задержка в 300 мс

// Реализация поля ввода с подсказками
const inputAdress = document.getElementById("address"); // Находим поле дл ввода адреса
inputAdress.addEventListener('input', function() { //Добавляем слушатель на поле ввода адреса. Будет срабатывать при изменении поля ввода
const query = this.value; // Записываем значение поля ввода в переменную
console.log(query);
  if (!query) { // Если поле ввода пустое, то в предложения ничего не выводим
    document.getElementById('suggestions').innerHTML = '';
    return;
  }

debouncedGeocode(query, function(suggestions) {
  const suggestionsList = document.getElementById('suggestions'); //Находим в документе поле, куда будут записываться предложения найденных данных
  suggestionsList.innerHTML = ''; //Очищаем список с предложениями
  suggestions.forEach(suggestion => { // Для каждого предложения создаем элемент списка 
    const li = document.createElement('li');
    li.textContent = suggestion;
    li.addEventListener('click', function() { // Вешаем обработчик событий по клику на каждое предложение
      document.getElementById('address').value = this.textContent; // Если кликнули, то заменяем текст внутри поля ввода на текст предложения
      suggestionsList.innerHTML = '';
    });
    suggestionsList.appendChild(li); //Добавляем элемент с предложенным вариантов в список всех вариантов
    });
  });
});

// Таким образом, при вводе текста в поле ввода, с задержкой в 300 миллисекунд будет отправляться запрос на геокодирование. 
// Полученные адреса будут отображены в виде списка под полем ввода, и пользователь сможет выбрать нужный адрес из списка.