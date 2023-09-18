// Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет каждую функцию в этом массиве 
// и выведет их порядковый номер. Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
// Другими словами, нужно выполнить следующие шаги:
// Вызвать первую функцию из массива.
// После завершения работы первой функции вызвать вторую функцию.
// После завершения работы второй функции вызвать третью функцию.
// И так далее, пока все функции в массиве не будут вызваны по порядку.

const function1 = () => console.log("Функция 1");
const function2 = () => console.log("Функция 2");
const function3 = () => console.log("Функция 3");
const function4 = () => console.log("Функция 4");

// Массив функций
const arrayFunctions = [function1, function2, function3, function4];

const callFunctions = async (array) => {
  for (let i = 0; i < array.length; i++) {
    await array[i]();
  }
}

const calledFunctions = callFunctions(arrayFunctions);
console.log(calledFunctions);
