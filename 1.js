// Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом. 
// Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра »).

let checkPalindrome = (string) => {
  let normalizeString = string.replaceAll(' ', '').toUpperCase(); //у заданной строки убираем пробелы между словами и приводим к одному регистру
  let invertedString = ''; //Создаем строку(пока пустую), куда запишем перевернутую строку
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    invertedString += normalizeString[i]; //записываем по одной букве с конца заданной фразы(normalizeString) в пустую строку(invertedString)
  };
  return console.log(invertedString === normalizeString); // сравниваем строку с фразой наоборот с заданной строкой. 
  //если они одинаковые, выводим в консоль true, если нет - false;
}

checkPalindrome("топот");