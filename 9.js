// Реализовать функцию конвертации JSON в строку


// Пример JSON файла
const object = {
  "query": "Виктор Иван",
  "count": 7
}

const convertToString = (file) => {
  return console.log(JSON.stringify(file)); //преобазуем в строку с помощью метода JSON.stringify()
}

convertToString(object);
