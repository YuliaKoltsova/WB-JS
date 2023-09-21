// Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, если это число является странным, 
// и false в противном случае. Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.

const getStrangeNumber = (number) => {
  //Находим все делители(кроме самого числа) и записываем в массив
  const divisors = [];
  for(let i = 1; i <= number; i++) {
    if (number % i === 0 && i != number) {
      divisors.push(i);
    }
  }
  //Суммируем все делители
  const summDivisors = divisors.reduce((summ, number) => summ + number);
  // вывводим в консоль true или false
  return summDivisors === number;
}

const isStrangeNumber = getStrangeNumber(6);
console.log(isStrangeNumber);


