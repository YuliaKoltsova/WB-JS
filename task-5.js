// Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON, содержащий список объектов, на выходе 
// объект, представляющий из себя односвязный список.

// Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON, содержащий список объектов, на выходе 
// объект, представляющий из себя односвязный список.

const data = ([{id: 1, name: "John"}, {id: 2, name: "Kate"}]);
const dataString = JSON.stringify(data);

class LinkedList {
  constructor() { 
    this.head = null; // ссылка на узел в начале списка;
    this.tail = null; // ссылка на узел в конце списка.
    // Указателям head и tail присваивается значение null, поскольку при первоначальном создании объекта связного списка он не содержит никаких узлов.
  }
  
  // Создание нового узла
  append(value) { 
    const newNode = new LinkedList(value);
    // Если нет head или tail, делаем новым узлом head и tail.
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    // Присоединяем новый узел к концу связного списка.
    // Берём последний узел и указываем, что его next будет новым узлом.
    this.tail.next = newNode;
    // Переназначаем tail на новый узел.
    this.tail = newNode;
    return this;
  }

  // Вывод списка
  getList() {
    return this.head;
  }
}

const jsonToLinkedList = (dataString) => { // Создаем связный список
  const dataList = JSON.parse(dataString); //"разбираем" JSON
  const linkedList = new LinkedList(); // Создаем экземпляр класса LinkedList
  dataList.forEach(element => linkedList.append(element)) // каждый элемент полученного JSON файла добавляем в связный список
  return linkedList.getList();
}

// выводим список 
const result = jsonToLinkedList(dataString);
console.log(result);

