// Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, 
// которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.

const function1 = () => 'Функция 1';
const function2 = () => 'Функция 2';
// Массив функций
const arrayFunctions = [function1, function2];

const compose = (array) => { // Функция принимает массив функций 
  return function () { // Функция, которая вызывает каждую функцию из массива с помощью .map
    return array.map(element => element());
  }
}

const composed = compose(arrayFunctions);
console.log(composed());