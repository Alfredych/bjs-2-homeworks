"use strict";

// ------------------------------
// ### Задача 1. Сравнить массивы
//-------------------------------

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

let arr1 = [8, 9];
let arr2 = [6];
let arr3 = [8, 9, 5, 4];
let arr4 = [8, 9, 5, 4, 8, 3, 5];
let arr5 = [9, 2, 4, 8, 2];
let arr6 = [9, 2, 4];
let arr7 = [1, 2, 3];
let arr8 = [2, 3, 1];
let arr9 = [8, 1, 2];
let arr10 = [8, 1, 2];

console.log(compareArrays(arr1, arr2));
console.log(compareArrays(arr3, arr4));
console.log(compareArrays(arr5, arr6));
console.log(compareArrays(arr7, arr8));
console.log(compareArrays(arr9, arr10));

//-------------------------------------------------
//### Задача 2. Фильтрация и преобразование массива
//-------------------------------------------------

const people = [
  {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
  {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
  {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
  {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
  {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
  {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
  {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
  {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
  {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
  {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
  {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
  {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
  {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
  {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
  ]

function getUsersNamesInAgeRange(users, gender) {
  let oneGender = users.filter(item => item.gender == gender);
  if (oneGender.length == 0) {
    return 0;
  } else {
    let average = (oneGender.map(item => item.age).reduce((sum, item) => sum + item, 0)) / oneGender.length;
    return average;
  }
}

console.log(getUsersNamesInAgeRange(people, "мужской"));
console.log(getUsersNamesInAgeRange(people, "женский"));
console.log(getUsersNamesInAgeRange([], "женский"));
console.log(getUsersNamesInAgeRange(people, "инопланетянин"));