// Задача 1
//---------

let arr = [1, 2, 3, -100, 10];

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

const result = getArrayParams(...arr);
console.log(result);

//---------------------------------------
// Задача 2
//---------

arr = [25, 33, 44, 97, 62];

function summElementsWorker(arr) {
  if (!arr.length) {
    return 0;
  } else {
      return arr.reduce(function(sum, elem) {
        return sum + elem;
      }, 0);
  }
}

console.log(summElementsWorker(arr));

function differenceMaxMinWorker(arr) {
  if (arr.length === 0) {
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

console.log(differenceMaxMinWorker(arr));

function differenceEvenOddWorker(arr) {
  if (arr.length === 0) {
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

console.log(differenceEvenOddWorker(arr));

function averageEvenElementsWorker(arr) {
  if (arr.length === 0) {
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

console.log(averageEvenElementsWorker(arr));

//------------------------------------------
// Задача 3
//---------

arr = [
  [10, 10, 11, 20, 10], 
  [67, 10, 2, 39, 88], 
  [72, 75, 51, 87, 43], 
  [30, 41, 55, 96, 62]
];

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (subArr of arrOfArr) {
    const currentResult = func(subArr);
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
  }
  return maxWorkerResult;
}

console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));