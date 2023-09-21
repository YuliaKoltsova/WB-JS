// Задача на классы и наследование: создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра. 
// Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник. 
// Реализуйте методы расчета площади и периметра для каждой фигуры.
class Shape {
  constructor(name) {
    this.name = name;
  }
  
// Площадь
  getSquareRectangle() { // Метод расчета площади прямоугольника
    return console.log(`Площадь ${this.width * this.height}`);
  }
  getSquareTriangle() { // Метод расчета площади треугольнкиа (base-основание треугольника)
    return console.log(`Площадь ${(this.firstSideTriangle * this.height) / 2}`);
  }
  getSquareСircle() { // Метод расчета площади круга
    return console.log(`Площадь ${(Math.PI * this.radius**2).toFixed(2)}`);
  }
  
//  Периметр
  getPerimeterRectangle() { // Метод расчета периметра прямоугольника
    return console.log(`Периметр ${2 * (this.width + this.height)}`);
  }
  getPerimeterTriangle() { // Метод расчета периметра треугольника
    return console.log(`Периметр ${this.firstSideTriangle + this.secondSideTriangle + this.thirdSideTriangle}`);
  }
  getPerimeterСircle() { // Метод расчета периметра круга
    return console.log(`Периметр ${(Math.PI * 2 * this.radius).toFixed(2)}`);
  }
}

//Прямоугольник
class Rectangle extends Shape { //Создаем класс Rectangle на основе базового класса Shape
  constructor (name, width, height) { 
    super(name); // имя из конструктора базового класса
    this.width = width; 
    this.height = height;
  }
}
const rectangle = new Rectangle("Прямоугльник", 2, 3); //Создаем 
rectangle.getSquareRectangle(); //Находим площадь
rectangle.getPerimeterRectangle(); // Находим периметр

//Треугольник
class Triangle extends Shape { //Создаем класс Triangle на основе базового класса Shape
  constructor (name, firstSideTriangle, height, secondSideTriangle, thirdSideTriangle) { 
    super(name); // имя из конструктора базового класса
    this.firstSideTriangle = firstSideTriangle; 
    this.height = height;
    this.secondSideTriangle = secondSideTriangle;
    this.thirdSideTriangle = thirdSideTriangle;
  }
}
const triangle = new Triangle("Треугольник", 2, 3, 4, 7); //Создаем 
triangle.getSquareTriangle(); //Находим площадь
triangle.getPerimeterTriangle(); // Находим периметр

//Круг
class Сircle extends Shape { //Создаем класс Сircle на основе базового класса Shape
  constructor (name, radius) { 
    super(name); // имя из конструктора базового класса
    this.radius = radius; 
  }
}
const circle = new Сircle("Круг", 3); //Создаем 
circle.getSquareСircle(); //Находим площадь
circle.getPerimeterСircle(); // Находим периметр
