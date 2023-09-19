// Задача на работу с объектами: создайте объект, представляющий собой книгу. Объект должен иметь свойства, такие как: 
// название книги, автор и год издания. Напишите методы для получения и изменения значений свойств книги.

const book = {
  name: "Gone With the Wind",
  author: "Margaret Mitchell",
  year: "1936"
}

// Получение значений
const getValue = (key) => {
  return book[key];
}

const value = getValue("name");
console.log(value); // выводим в консоль значение, соответствующее заданному ключу 

// Изменение значений
const changeValue = (key, value) => {
  book[key] = value;
}

changeValue("year", "1950");
console.log(book); // Проверяем что значение year в объекте изменилось