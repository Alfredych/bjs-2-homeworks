// Задача 1
//---------

let arr1 = [-99, 99, 10];
let arr2 = [1, 2, 3, -100, 10];
let arr3 = [5];

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);

  return {
    'min': min, 
    'max': max, 
    'avg': avg
  };
}

console.log(getArrayParams(arr1));
console.log(getArrayParams(arr2));
console.log(getArrayParams(arr3));

//---------------------------------------
// Задача 2
//---------

let arr4 = [10, 10, 11, 20, 10];

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
      return arr.reduce(function(sum, elem) {
        return sum + elem;
      }, 0);
  }
}

console.log(summElementsWorker(arr4));

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
      let min = Infinity;
      let max = -Infinity;
      if (Math.min(...arr) < min) {
        min = Math.min(...arr);
      }
      if (Math.max(...arr) > max) {
        max = Math.max(...arr);
      }
      return max - min;
  }
}

console.log(differenceMaxMinWorker(arr4));

let arr5 = [94, 51, 57, 41, 47, 66, 58, 10, 38, 17];
let arr6 = [15, 97, 85, 64, 67, 10, 69, 40, 15, 35];
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
      let sumEvenElement = 0;
      let sumOddElement = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
        } else {
          sumOddElement += arr[i];
        }
      }
      return sumEvenElement - sumOddElement;
    }
}

console.log(differenceEvenOddWorker(arr7));
console.log(differenceEvenOddWorker(arr5));
console.log(differenceEvenOddWorker(arr6));

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  }
}

console.log(averageEvenElementsWorker(arr7));
console.log(averageEvenElementsWorker(arr6));

//------------------------------------------
// Задача 3
//---------

let arr8 = [
  [10, 10, 11, 20, 10], 
  [67, 10, 2, 39, 88], 
  [72, 75, 51, 87, 43], 
  [30, 41, 55, 96, 62]
];

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let subArr of arrOfArr) {
    const currentResult = func(...subArr);
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
  }
  return maxWorkerResult;
}

console.log(makeWork(arr8, summElementsWorker));
console.log(makeWork(arr8, differenceMaxMinWorker));
console.log(makeWork(arr8, differenceEvenOddWorker));
console.log(makeWork(arr8, averageEvenElementsWorker));