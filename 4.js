// Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
// 112 сообщения
// 12 сообщений
// 1 сообщение
// 1024 пользователя
// 1026 пользователей
// 121 пользователь

const word1 = ["сообщения", "сообщений", "сообщение"];
const word2 = ["пользователя", "пользователей", "пользователь"];

const changeEnding = (count, wordArray) => {
  positiveNumberString = Math.abs(count).toString();  // делаем число положительным(на случай если придет отрицательное)
  const twoEndNumbers = positiveNumberString.slice(positiveNumberString.length - 2); //Находим последние 2 числа 
  const endNumbers = positiveNumberString.slice(positiveNumberString.length - 1);//находим последнее число
  if(twoEndNumbers > 10 && twoEndNumbers < 20) { 
    return console.log(count + " " + wordArray[1])
  }
	if(endNumbers > 1 && endNumbers < 5) {
    return console.log(count + " " + wordArray[0])
  }
	if(endNumbers == 1) {
    return console.log(count + " " + wordArray[2])
  } else {
    return console.log(count + " " + wordArray[1])
  }
} 

changeEnding(11, word1);
changeEnding(201, word2);
