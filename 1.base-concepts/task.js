"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  
  if (d > 0) {
    const x1 = (-b + Math.sqrt(d) ) / (2 * a);
    const x2 = (-b - Math.sqrt(d) ) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    const x = -b / (2 * a);
    arr.push(x);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let perInMonth = percent / 100 / 12;
  let creditBody = amount - contribution;
  let paymentMonthly = creditBody * (perInMonth + (perInMonth / (((1 + perInMonth) ** countMonths) - 1)));
  let totalAmount = paymentMonthly * countMonths;
  totalAmount = Number(totalAmount.toFixed(2)); 
  return totalAmount;
}