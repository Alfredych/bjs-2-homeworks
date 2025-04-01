"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant) ) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant) ) / (2 * a);
    arr.push(x1, x2);
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    arr.push(x);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const perInMonth = percent / 100 / 12;
  const creditBody = amount - contribution;
  const paymentMonthly = creditBody * (perInMonth + (perInMonth / (((1 + perInMonth) ** countMonths) - 1)));
  let totalAmount = paymentMonthly * countMonths;
  totalAmount = Number(totalAmount.toFixed(2)); 
  return totalAmount;
}