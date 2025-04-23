//--------------------------
// Задача 1. Форматтер чисел
//--------------------------

function parseCount(number) {
  const parsedNamber = Number.parseFloat(number);
  if (isNaN(parsedNamber)) {
    throw new Error("Невалидное значение")
  }
  return parsedNamber;
}

function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  }
}


//----------------------
// Задача 2. Треугольник
//----------------------

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this._perimeter;
    this._area;
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  
  get perimeter() {
    return this._perimeter = this.a + this.b + this.c;
  }

  get area() {    
    const pp = (this.a + this.b + this.c) / 2; // полупериметр для формулы Герона
    return this._area = Number((Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c))).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}
