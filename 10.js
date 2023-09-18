// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

const stringToJson = (str) =>{
  return new Function(`return ${str};`)(); // Здесь используем конструктор Function для выполнения строки как кода JavaScript
}

const convertedJson = stringToJson(object);
console.log(convertedJson);