// =============== Boolean 1 ===============
// let a = 10;
// console.log(a > 0);

// =============== Boolean 2 ===============
// let a = 5;
// console.log(a % 2 === 1);

// =============== Boolean 3 ===============
// let a = 7;
// console.log(a % 2 === 0);

// =============== Boolean 4 ===============
// let a = 7;
// let b = 3;
// console.log(a > 2 && b <= 3);

// =============== Boolean 5 ===============
// let a = 3;
// let b = 2;
// console.log(a >= 0 || b < -2);

// =============== Boolean 6 ===============
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a <= b && b <= c);

// =============== Boolean 7 ===============
// let a = 1;
// let b = 2;
// let c = 10;
// console.log(a < b && b < c);

// =============== Boolean 8 ===============
// let a = 3;
// let b = 5;
// console.log(a % 2 === 1 && b % 2 === 1);

// =============== Boolean 9 ===============
// let a = 3;
// let b = 5;
// console.log(a % 2 === 1 || b % 2 === 1);

// =============== Boolean 10 ===============
// let a = 3;
// let b = 5;
// console.log(a % 2 === 1 && b % 2 === 0 || a % 2 === 0 && b % 2 === 1);

// =============== Boolean 11 ===============
// let a = 3;
// let b = 5;
// console.log(a % 2 === 1 && b % 2 === 1 || a % 2 === 0 && b % 2 === 0);

// =============== Boolean 12 ===============
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a > 0 && b > 0 && c > 0);

// =============== Boolean 13 ===============
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a > 0 || b > 0 || c > 0);

// =============== Boolean 14 ===============
// let a = 1;
// let b = 2;
// let c = 3;
// console.log((a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c < 0) || (a < 0 && b < 0 || c > 0));

// =============== Boolean 15 ===============
// let a = 1;
// let b = 2;
// let c = 3;
// console.log((a > 0 && b > 0 && c < 0) || (a < 0 && b < 0 && c > 0) || (a < 0 && b > 0 || c > 0));

// =============== Boolean 16 ===============
// let son = 22;
// console.log(son < 100 && son > 9 && son % 2 === 0);

// =============== Boolean 17 ===============
// let son = 333;
// console.log(99 < son && son < 1000 && son % 2 === 1);

// =============== Boolean 18 ===============
// let a = 1;
// let b = 1;
// let c = 19;
// console.log(a === b || a === c || b === c);

// =============== Boolean 19 ===============
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(-a === b || -a === c || -b === c);

// =============== Boolean 20 ===============
// let son = 321;
// let a = Math.trunc(son % 1000 / 100);
// let b = son % 10;
// let c = Math.trunc(son % 100 / 10);
// console.log(a !== b && a !== c && b !== c);

// =============== Boolean 21 ===============
// let son = 321;
// let a = Math.trunc(son % 1000 / 100);
// let c = Math.trunc(son % 100 / 10);
// let b = son % 10;
// console.log(a < c && c < b);

// =============== Boolean 22 ===============
// let son = 321;
// let a = Math.trunc(son % 1000 / 100);
// let c = Math.trunc(son % 100 / 10);
// let b = son % 10;
// console.log(a < c && c < b || a > c && c > b);

// =============== Boolean 23 ===============
// let son = 321;
// let a = Math.trunc(son % 1000 / 100);
// let c = Math.trunc(son % 100 / 10);
// let b = son % 10;
// console.log(a === b);

// =============== Boolean 24 ===============
// let a = 1;
// let b = 2;
// let c = 3;
//
// let D = b * b - 4 * a * c;
// let X1 = (-b + Math.sqrt(D)) / 2 * a;
// let X2 = (-b - Math.sqrt(D)) / 2 * a;
//
// console.log(a * X1 * X1 + b * X1 + c === 0 || a * X2 * X2 + b * X2 + c === 0);

// =============== Boolean 25 ===============
// let x = 2;
// let y = 3;
//
// console.log(x < 0 && y > 0);

// =============== Boolean 26 ===============
// let x = 2;
// let y = 3;
//
// console.log(x > 0 && y < 0);

// =============== Boolean 27 ===============
// let x = 2;
// let y = 3;
//
// console.log(x < 0 && y > 0 || x < 0 && y < 0);

// =============== Boolean 28 ===============
// let x = 2;
// let y = 3;
//
// console.log(x > 0 && y > 0 || x < 0 && y < 0);

// =============== Boolean 29 ===============
// let x = -6;
// let y = 6;
// let x1 = -9;
// let y1 = 9;
// let x2 = -3;
// let y2 = 3;
//
// console.log((x2 < x && x < x1) && (y2 < y && y < y1));

// =============== Boolean 30 ===============
// let a = 3;
// let b = 4;
// let c = 6;
//
// console.log(a === b && a === c);

// =============== Boolean 31 ===============
// let a = 3;
// let b = 4;
// let c = 6;
// console.log(a === b || a === c || b === c);

// =============== Boolean 32 ===============
// let a = 3;
// let b = 4;
// let c = 5;
//
// console.log(a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a);

// =============== Boolean 33 ===============
// let a = 3;
// let b = 5;
// let c = 2;
//
// console.log(a + b > c && a + c > b && b + c > a);

// =============== Boolean 34 ===============
// let x = 2;
// let y = 8;
//
// console.log(x % 2 === 1 && y % 2 === 0 || x % 2 === 0 && y % 2 === 1);

// =============== Boolean 35 ===============
// let x1 = 3;
// let y1 = 5;
// let x2 = 4;
// let y2 = 8;
//
// console.log((x1 % 2 === 0 && y1 % 2 === 1) && (x2 % 2 === 0 && y2 % 2 === 1) || (x1 % 2 === 1 && y1 % 2 === 0) && (x2 % 2 === 1 && y2 % 2 === 0));

// =============== Boolean 36 ===============
// let x1 = 3;
// let y1 = 5;
// let x2 = 4;
// let y2 = 8;
//
// console.log(x1 === x2 || y1 === y2);

// =============== Boolean 37 ===============
// let x1 = 3;
// let y1 = 5;
// let x2 = 4;
// let y2 = 8;
//
// console.log(Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1);

// =============== Boolean 38 ===============
// let x1 = 3;
// let y1 = 5;
// let x2 = 4;
// let y2 = 8;
//
// console.log(x2 - x1 === y2 - y1);

// =============== Boolean 39 ===============
// let x1 = 3;
// let y1 = 5;
// let x2 = 4;
// let y2 = 8;
//
// console.log((x2 - x1 === y2 - y1) || (x1 === x2 || y1 === y2));

// =============== Boolean 40 ===============
// let x1 = 3;
// let y1 = 5;
// let x2 = 4;
// let y2 = 8;
//
// console.log(Math.abs(x2 - x1) === 2 && Math.abs(y2 - y1) === 1 || Math.abs(x2 - x1) === 1 && Math.abs(y2 - y1) === 2);