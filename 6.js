// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
// Напишите код, который сортирует этот массив по возрастанию возраста, а при равных возрастах сортирует 
// по алфавиту по полю name.

const arrayPeoples = [
  { name: 'Саша', age: 25 },
  { name: 'Катя', age: 18 },
  { name: 'Маша', age: 30 },
  { name: 'Олег', age: 10 },
  { name: 'Алина', age: 25 },
]

const sortedArray = (array) => {
  array.sort((x, y) => {
    //Сортируем по возрасту, от меньшего к большему
    if (x.age < y.age) return -1; 
    if (x.age > y.age) return 1;
    // При равном возрасте сортируем по имени
    if (x.name < y.name) return -1;
    if (x.name > y.name) return 1;
    return 0;
  });
  return array;
};

sortedArray(arrayPeoples);