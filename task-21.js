// Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

let i = 0;

const func = () => { //Создаем функцию, которая вызывает сама себя и прибавляет счетчик
  i++;
  func();
};

try {
  func();
} catch (error) { // Ловим ошибку переполнения стэка и выводим значение счетчика в консоль
  console.log(i);
}

// CHROME 1 078 567 байт
// количество вызовов функции без объявления в ее теле переменных: 13917 раз
// если объявить 2 переменнные: 11387 раз
// functionSize = (n + k*8) * количество вызовов  (8, т.к каждое число занимает 8 байт)
// вычисляем для количества вызовов без переменных и с 2 переменными и получаем n=77.5 байта.
// 77.5 * 113917 = 1078567 байт.

// Firefox 20 263 602.6 байта
// количество вызовов функции без объявления в ее теле переменных: 31578 раз
// если объявить 2 переменнные: 30810 раз
//n=641.7 

// Opera 1 004 121 байт
// количество вызовов функции без объявления в ее теле переменных: 13950 раз
// если объявить 2 переменнные: 11413 раз
//n=71.98