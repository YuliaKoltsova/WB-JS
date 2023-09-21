// Реализовать функцию конвертации JSON в строку

// Тестовые данные
const object = {
  name: "John",
  age: 30,
  isStudent: false,
  friends: ["Mike", "Anna"]
};

const convertToString = (obj) => {
return JSON.stringify(obj); //преобазуем в строку с помощью метода JSON.stringify()
}
const convertedToStringStringify = convertToString(object);
console.log(convertedToStringStringify);

// Без использования JSON.stringfy()
// Функция для конвертации объекта или значения в строку
const jsonToString = (obj) => {
// Если это строка, возвращаем в кавычках
if (typeof obj === 'string') {
  return obj;

}
// Если это число или булевое значение, возвращаем его как строку
if (typeof obj === 'number' || typeof obj === 'boolean') {
  return obj.toString();
}
// Если это массив, конвертируем каждый элемент и объединяем в строку
if (Array.isArray(obj)) {
  const items = obj.map((item) => jsonToString(item)).join(',');
  return items;
}
// Если это объект, конвертируем каждую пару ключ-значение в строку
if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj); // Получаем массив, элементами которого являются массивы, соответствующие перечисляемому свойству пары [key, value]
    const strEntries = entries.map(([key, value]) => {
      return `"${key}":${jsonToString(value)}`; // Возвращаем массив с [[key, value],[key, value],..]
    }).join(','); //Объединяем все элементы массива в строку
    return strEntries;
}
// Если значение не удовлетворяет ни одному из вышеперечисленных условий, возвращаем null
return null;
}

const convertedToString = jsonToString(object);
console.log(convertedToString);
