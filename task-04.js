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
  // Распределяем окончания слов соответственно числам
  if(twoEndNumbers > 10 && twoEndNumbers < 20) { // если последние 2 числа больше 10 и меньше 20, то
    return count + " " + wordArray[1] // добавяем слово во множ. числе и род. падеже (пример, 20 сообщений)
  }
	if(endNumbers > 1 && endNumbers < 5) { // если последняя цифра в числе больше 1 и меньше 5, то
    return count + " " + wordArray[0] // добавляем слово в ед. числе и род. падеже (пример, 3 сообщения)
  }
	if(endNumbers == 1) { // если последняя цифра в числе 1, то 
    return count + " " + wordArray[2] // добавляем слово в ед.числе и имен. пажеде (пример, 1 сообщение)
  } else { // если все вышеперечисленные варианты не подощли, то
    return count + " " + wordArray[1] // добавляем слово во множ. числе и род. падеже (пример, 78 сообщений)
  }
} 

const ending1 = changeEnding(11, word1);
const ending2 = changeEnding(201, word2);
console.log(ending1);
console.log(ending2);

export {changeEnding}; //Добавляет возможность импортировать модуль в другом файле

