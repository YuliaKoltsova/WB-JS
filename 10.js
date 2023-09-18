// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

// Тестовые данные
const str = '{"name": "Kate", "age": "25" }';

const fromJson = (string) => {
  try {
    return JSON.parse(string)
  }
  catch (error) {
    return null
  }
} 

const converted = fromJson(str);
console.log(converted);


// Конвертация строки в JSON без JSON.parse
const stringToJson = (string) =>{
  return new Function(`return ${string};`)(); // Здесь используем конструктор Function для выполнения строки как кода JavaScript
}

const convertedJson = stringToJson(str);
console.log(convertedJson);