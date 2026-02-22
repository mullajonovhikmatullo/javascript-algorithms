// =============== if 1 ===============
// let son = 10;
//
// if(son > 0) son += 1;
//
// console.log(son);

// =============== if 2 ===============
// let son = 10;
//
// if(son > 0) son += 1;
// else son -= 2;
//
// console.log(son);

// =============== if 3 ===============
// let son = 9;
//
// if(son > 0) son += 1;
// else if(son < 0) son -= 2;
// else son = 10;
//
// console.log(son);

// =============== if 4 ===============
// let a = 1;
// let b = 2;
// let c = -1;
// let count = 0;
//
// if(a > 0) count ++;
// if(b > 0) count ++;
// if(c > 0) count ++;
//
// console.log(count);

// =============== if 5 ===============
// let a = 1;
// let b = 2;
// let c = -1;
// let countManfiy = 0;
// let countMusbat = 0;
//
// if(a > 0) countMusbat ++;
// else if(a < 0) countManfiy ++;
//
// if(b > 0) countMusbat ++;
// else if(b < 0) countManfiy ++;
//
// if(c > 0) countMusbat ++;
// else if(c < 0) countManfiy ++;
//
// console.log(countMusbat + ' ta musbat va ' + countManfiy + ' ta manfiy son bor.');

// =============== if 6 ===============
// let a = 1;
// let b = 10;
// let max;
//
// if (a > b) max = a;
// else max = b;
//
// console.log(max);

// =============== if 7 ===============
// let a = 8;
// let b = 3;
// let order;
//
// if(a <= b) order = 1;
// else order = 2;
//
// console.log('Kichik sonning tartib raqami: ' + order);

// =============== if 8 ===============
// let a = 1;
// let b = 2;
//
// let max, min;
//
// if(a >= b) {
//     max = a;
//     min = b;
// } else {
//     max = b;
//     min = a;
// }
//
// console.log(max, min);

// =============== if 9 ===============
// let a = 11;
// let b = 10;
//
// let c;
//
// if (a > b) {
//     c = a;
//     a = b;
//     b = c;
// }
//
// console.log(a, b);

// =============== if 10 ===============
// let a = 11;
// let b = 12;
// let sum;
//
// if(a !== b) {
//     sum = a + b;
//     a = sum;
//     b = sum;
// } else {
//     a = 0;
//     b = 0;
// }
// console.log(a, b);

// =============== if 11 ===============
// let a = 11;
// let b = 12;
// let max;
//
// if(a !== b) {
//     //
//     if(a > b) max = a;
//     else max = b;
//     a = max;
//     b = max;
// } else {
//     a = 0;
//     b = 0;
// }
// console.log(a, b);

// =============== if 12 ===============
// let a = 11;
// let b = 22;
// let c = 11;
// let min;
//
// if(a <= b && a <= c) min = a;
// else if(b <= a && b <= c) min = b;
// else min = c;
//
// console.log(min);

// =============== if 13 ===============
// let a = 11;
// let b = 9;
// let c = 11;
// let middle;
//
// if(b <= a && a <= c || c <= a && a <= b) middle = a;
// else if(a <= b && b <= c || c <= b && b <= a) middle = b;
// else middle = c;
//
// console.log(middle);

// =============== if 14 ===============
// let a = 1;
// let b = 11;
// let c = 12;
// let min, max;
//
// if(a <= b && a <= c) {
//     min = a;
//     if(b >= c) max = b;
//     else max = c;
// }
// else if (b <= a && b <= c) {
//     min = b;
//     if(a >= c) max = a;
//     else max = c;
// } else {
//     min = c;
//     if(a >= b) max = a;
//     else max = b;
// }
//
// console.log(min, max);

// =============== if 15 ===============
// let a = 1;
// let b = 11;
// let c = 12;
//
// if(a + b >= a + c && a + b >= b + c) {
//     console.log(a, b);
// } else if(a + c >= a + b && a + c >= b + c) {
//     console.log(a, c);
// } else {
//     console.log(b, c);
// }

// =============== if 16 ===============
// let a = 14;
// let b = 11;
// let c = 12;
//
// if(a <= b && b <= c) {
//     a *= 2;
//     b *= 2;
//     c *= 2;
// } else {
//     a *= -1;
//     b *= -1;
//     c *= -1;
// }
// console.log(a, b, c);

// =============== if 17 ===============
// let a = 14;
// let b = 11;
// let c = 12;
//
// if(a <= b && b <= c || a >= b && b >= c) {
//     a *= 2;
//     b *= 2;
//     c *= 2;
// } else {
//     a *= -1;
//     b *= -1;
//     c *= -1;
// }
// console.log(a, b, c);

// =============== if 18 ===============
// let a = 2;
// let b = 2;
// let c = 5;
// let order;
//
// if (a === b) order = 3;
// else if(a === c) order = 2;
// else order = 1;
//
// console.log(order);

// =============== if 19 ===============
// let a = 2;
// let b = 9;
// let c = 2;
// let d = 2;
// let order;
//
// if(a === b && b === c) order = 4;
// else if(a === c && c === d) order = 2;
// else if(a === b && b === d) order = 3;
// else order = 1;
//
// console.log(order);

// =============== if 20 ===============
// let a = 2;
// let b = 2;
// let c = 5;
//
// if(Math.abs(a - b) >= Math(a - c)) {
//     console.log(c, Math.abs(a - c))
// } else {
//     console.log(b, Math.abs(a - b))
// }

// =============== if 21 ===============
// let x = 5;
// let y = 2;
//
// if (x === 0 && y === 0) {
//     console.log(0);
// } else if (y === 0) {
//     console.log(1);
// } else if (x === 0) {
//     console.log(2);
// } else {
//     console.log(3);
// }

// =============== if 22 ===============
// let x = 5;
// let y = 4;
//
// if (x > 0 && y > 0) {
//     console.log("I - chorak")
// } else if(x < 0 && y > 0) {
//     console.log("II - chorak")
// } else if(x < 0 && y < 0) {
//     console.log('III - chorak')
// } else {
//     console.log('IV - chorak')
// }

// =============== if 23 ===============
// let x1 = 3;
// let y1 = 1;
//
// let x2 = 6;
// let y2 = 1;
//
// let x3 = 3;
// let y3 = 4;
//
// let x4, y4;
//
// if(x1 === x2) x4 = x3;
// else if(x1 === x3) x4 = x2;
// else x4 = x1;
//
// if(y1 === y2) y4 = y3;
// else if(y1 === y3) y4 = y2;
// else y4 = y1;
//
// console.log(x4, y4);

// =============== if 24 ===============
// let x = 5;
// let result;
//
// if(x > 0) {
//     result = 2 * Math.sin(x);
// } else {
//     result = x - 6;
// }
// console.log(result);

// =============== if 25 ===============
// let x = 5;
// let result;
//
// if(x < -2 || x > 2) {
//     result = 2 * x;
// } else {
//     result = -3 * x;
// }
// console.log(result);

// =============== if 26 ===============
// let x = 2;
// let result;
//
// if(x <= 0) result = -x;
// else if(0 < x && x < 2) result = x * x;
// else if(x >= 2) result = 4;
//
// console.log(result);

// =============== if 27 ===============
// let x = 3;
// let result;
//
// if(x < 0) {result = 0;}
// else if (Math.floor(x) % 2 === 0) {result = 1;}
// else if(Math.floor(x) % 2 === 1) {result = -1}
//
// console.log(result);

// =============== if 28 ===============
// My Solution
// let year = 1900;
// let days;
//
// if(year % 4 === 0) {
//     if(year % 100 === 0) {
//         days = year % 400 === 0 ? 366 : 355;
//     } else {
//         days = 366;
//     }
// } else {
//     days = 365;
// }
//
// console.log(days);

// Pro Answer.
// let year = 1900;
//
// let days = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
//     ? 366
//     : 365;
//
// console.log(days);

// =============== if 29 ===============
// 'musbat toq son', 'manfiy juft son', 'son nolga teng'
// MY SOLUTION

// let son = 25;
//
// let isPositive = false, isEven = false, isNull = false;
//
// if(son === 0) isNull = true;
// if(son > 0) isPositive = true;
// if(son % 2 === 0) isEven = true;
//
// if(isNull) console.log('Berilgan son 0 ga teng');
// if(isPositive && isEven) console.log('Berilgan son Musbat juft son');
// if(!isPositive && isEven) console.log('Berilgan son Manfiy juft son');
// if(isPositive && !isEven) console.log('Berilgan son Musbat toq son');
// if(!isPositive && !isEven) console.log('Berilgan son Manfiy toq son');

// Pro Answer.
// let son = 25;
//
// if (son === 0) {
//     console.log('Berilgan son 0 ga teng');
// } else {
//     let sign = son > 0 ? 'Musbat' : 'Manfiy';
//     let parity = son % 2 === 0 ? 'juft' : 'toq';
//
//     console.log(`Berilgan son ${sign} ${parity} son`);
// }

// =============== if 30 ===============
//1-999
// 'ikki xonali juft son', 'uch xonali toq son'
// let son = 9999;
// let result;
//
// if(son < 10) {
//     result = son % 2 === 0 ? 'Birxonali juft' : 'Birxonali toq';
// } else if(son < 100) {
//     result = son % 2 === 0 ? 'Ikki xonali juft' : 'Ikki xonali toq';
// } else if(son < 1000) {
//     result = son % 2 === 0 ? 'Uchxonali juft' : 'Uchxonali toq';
// } else {
//     result = 'Berilgan son 1-999 oraliqda bo\'lishi kerak';
// }
// console.log(result);