// =============== Min-Max 1 ===============
// let N = +prompt("N ni kiriting:");
//
// let son = +prompt("1-sonni kiriting:");
// let min = son;
// let max = son;
//
// let i = 2;
//
// while (i <= N) {
//     son = +prompt(i + "-sonni kiriting:");
//
//     if (son > max) {
//         max = son;
//     }
//
//     if (son < min) {
//         min = son;
//     }
//
//     i++;
// }
//
// console.log("Eng kichik son:", min);
// console.log("Eng katta son:", max);

// =============== Min-Max 2 ===============
// let N = +prompt('N ni kiriting');
// let a = +prompt('a = ');
// let b = +prompt('n = ');
// let min = a * b / 2;
// let i = 1;
//
// while (i <= N) {
//     //
//     a = +prompt('a = ');
//     b = +prompt('n = ');
//     if(min > a * b) {
//         min = a * b;
//     }
//     i ++;
// }
//
// console.log(min);

// =============== Min-Max 3 ===============
// let N = +prompt('N ni kiriting');
// let a = +prompt('a = ');
// let b = +prompt('n = ');
// let p = a + b + Math.sqrt(a * a + b * b);
// let i = 2;
//
// while (i <= N) {
//     //
//     a = +prompt('a = ');
//     b = +prompt('n = ');
//     let tempP = a + b + Math.sqrt(a * a + b * b);
//     if(p < tempP) {
//         p = tempP;
//     }
//     i ++;
// }
//
// console.log(p);

// =============== Min-Max 4 ===============
// let N = 3;
// let son = +prompt('son kiriting: ');
// let index = 1;
// let min = son;
// let i = 1;
//
// while (i <= N) {
//     son = +prompt('son kiriting: ');
//     if(son < min) {
//         min = son;
//         index++;
//     }
//     i++;
// }
// console.log('index = ' + index);

// =============== Min-Max 5 ===============
// let N = 5;
// let m = +prompt('og\'irlik(m): ');
// let v = +prompt('hajm(v): ')
// let i = 1;
// let max = m / v;
//
// while (i <= N) {
//     //
//     m = +prompt('og\'irlik(m): ');
//     v = +prompt('hajm(v): ')
//     if(max < m / v) {
//         max = m / v;
//     }
//     i ++;
// }
// console.log(max);

// =============== Min-Max 6 ===============
// let N = 9;
// let son = +prompt('son: ');
// let max = son, min = son;
// let indexMax = 1, indexMin = 1;
// let i = 2;
//
// while (i <= N) {
// //
//     son = +prompt('son: ');
//     if (son >= max) {
//         max = son;
//         indexMax = i;
//     }
//     if (son < min) {
//         min = son;
//         indexMin = i;
//     }
//     i++;
// }
//
// console.log(indexMin, indexMax);

// =============== Min-Max 7 ===============
// let N = 9;
// let son = +prompt('son: ');
// let max = son, min = son;
// let indexMax = 1, indexMin = 1;
// let i = 2;
//
// while (i <= N) {
// //
//     son = +prompt('son: ');
//     if (son > max) {
//         max = son;
//         indexMax = i;
//     }
//     if (son <= min) {
//         min = son;
//         indexMin = i;
//     }
//     i++;
// }
//
// console.log(indexMax, indexMin);

// =============== Min-Max 8 ===============
// let N = 5;
// let son = +prompt('son: ');
// let minFirst = son, minLast = son;
// let indexFirst = 1, indexLast = 1;
// let i = 2;
//
// while (i <= N) {
// //
//     son = +prompt('son: ');
//     if (son < minFirst) {
//         minFirst = son;
//         indexFirst = i;
//     }
//     if(son === minFirst) {
//         minLast = son;
//         indexLast = i;
//     }
//     i++;
// }
// console.log(indexFirst, indexLast);

// =============== Min-Max 9 ===============
// let N = 5;
// let son = +prompt('son: ');
// let maxFirst = son, maxLast = son;
// let indexFirst = 1, indexLast = 1;
// let i = 2;
//
// while (i <= N) {
// //
//     son = +prompt('son: ');
//     if (son > maxFirst) {
//         maxFirst = son;
//         indexFirst = i;
//     }
//     if(son === maxFirst) {
//         maxLast = son;
//         indexLast = i;
//     }
//     i++;
// }
// console.log(indexFirst, indexLast);

// =============== Min-Max 10 ===============
// let N = 5;
// let son = +prompt("1-sonni kiriting:");
// let min = son;
// let max = son;
// let indexMin = 1, indexMax = 1;
//
// let i = 2;
//
// while (i <= N) {
//     son = +prompt(i + "-sonni kiriting:");
//
//     if (son > max) {
//         max = son;
//         indexMax = i;
//     }
//
//     if (son < min) {
//         min = son;
//         indexMin = i;
//     }
//
//     i++;
// }
// indexMin > indexMax ? console.log(indexMax) : console.log(indexMin);

// =============== Min-Max 11 ===============
// let N = 5;
// let son = +prompt("1-sonni kiriting:");
// let min = son;
// let max = son;
// let indexMin = 1, indexMax = 1;
//
// let i = 2;
//
// while (i <= N) {
//     son = +prompt(i + "-sonni kiriting:");
//
//     if (son >= max) {
//         max = son;
//         indexMax = i;
//     }
//
//     if (son <= min) {
//         min = son;
//         indexMin = i;
//     }
//
//     i++;
// }
// indexMin > indexMax ? console.log(indexMin) : console.log(indexMax);

// =============== Min-Max 12 ===============
// let n = 5;
// let positive = 0;
// let son = +prompt('son: ');
// let min = son > 0 ? son : 0;
// let i = 2;
//
// while (i <= n) {
//     //
//     son = +prompt('son: ');
//     if (son > 0 && positive === 0) {
//         positive = son;
//         min = son;
//     }
//     if(son > 0 && son < min) {
//         positive = son;
//         min = son;
//     }
//     i++;
// }
// console.log(positive);

// =============== Min-Max 13 ===============
// let n = 5;
// let son = +prompt('son: ');
// let index = son % 2 === 1 ? 1 : 0;
// let i = 2;
//
// while (i <= n && index !== 1) {
//     //
//     son = +prompt('son: ');
//     if(son % 2 === 1) {
//         index = i;
//         break;
//     }
//     i++;
// }
// console.log('index: ' + index);

// =============== Min-Max 14 ===============
// let B = 5;
// let son = +prompt('son: ');
// let max = son > B ? son : B;
// let hasMax = false;
//
// if (son > B) {
//     console.log(1);
// } else {
//     let i = 2;
//
//     while (i <= 10) {
//     //
//         son = +prompt('son: ');
//         if (son > B) {
//             max = B;
//             hasMax = true;
//             break;
//         }
//         i++;
//     }
//     if(!hasMax) console.log(0, 0);
//     else console.log(i);
// }


// =============== Min-Max 15 ===============
// let B = 5;
// let C = 10;
// let son = +prompt('son: ');
//
// let max =  0;
// let hasMax = false;
// let indexMax = 0;
//
// if(B < son && son < C) {
//     max = son;
//     hasMax = true;
//     indexMax = 1;
// }
//
// let i = 2;
//
// while (i <= 10) {
//     //
//     son = +prompt('son: ');
//     if (B < son && son < C && max < son) {
//         max = son;
//         hasMax = true;
//         indexMax = i;
//     }
//     i++;
// }
// if (!hasMax) console.log(0, 0);
// else console.log(max, indexMax);

// =============== Min-Max 16 ===============
// let N = 5;
// let son = +prompt('son: ');
// let min = son;
// let count = 0;
// let isNotFirst = false;
//
// let i = 2;
//
// while (i <= N) {
//     //
//     son = +prompt('son: ');
//     if (son < min) {
//         min = son;
//         count ++;
//         isNotFirst = true;
//     }
//     i ++;
// }
//
// if (isNotFirst) {
//     count ++;
// }
// console.log(count);

// =============== Min-Max 17 ===============
// let N = 5;
// let son = +prompt('son: ');
// let max = son;
// let count = 0;
//
// let i = 2;
//
// while (i <= N) {
//     //
//     son = +prompt('son: ');
//     if (son >= max) {
//         max = son;
//         count = 0;
//     }
//     count ++;
//     i ++;
// }
// console.log(count - 1);

// =============== Min-Max 18 ===============
// let N = 6;
// let son = +prompt('son: ');
// let max = son;
// let count = 0;
// let stopCounting = false;
//
// let i = 2;
//
// while (i <= N) {
//     //
//     son = +prompt('son: ');
//     if (son > max) {
//         max = son;
//         count = 0;
//     } else if (son === max) stopCounting = true;
//     if (!stopCounting) count++;
//     i++;
// }
//
// console.log(count - 1);

// =============== Min-Max 19 ===============
// let N = 5;
// let son = +prompt('son: ');
// let min = son;
//
// let i = 2;
// let count = 0;
//
// while (i <= N) {
//     //
//     son = +prompt('son: ');
//     if (son < min) {
//         min = son;
//         count = 0;
//     } else if(son === min) {
//         count++;
//     }
//     i++;
// }
// console.log(count + 1);

// =============== Min-Max 20 ===============
// let N = 7;
// let son = +prompt('son: ');
// let min = son;
// let max = son;
//
// let countMax = 0, countMin = 0;
// let i = 2;
//
// while (i <= N) {
//     //
//     son = +prompt('son: ');
//     if (son > max) {
//         max = son;
//         countMax = 1;
//     } else if(son === max) {
//         countMax ++;
//     }
//
//     if (son < min) {
//         min = son;
//         countMin = 1;
//     } else if(son === min) {
//         countMin ++;
//     }
//     i++;
// }
// console.log(countMax, countMin);

// =============== Min-Max 21 ===============
// let N = 7;
// let son = +prompt('son: ');
// let min = son;
// let max = son;
// let sum = son;
//
// let countMax = 0, countMin = 0;
// let i = 2;
//
// while (i <= N) {
//     //
//     son = +prompt('son: ');
//     sum += son;
//     if (son > max) {
//         max = son;
//         countMax = 1;
//     } else if(son === max) {
//         countMax ++;
//
//     }
//     if (son < min) {
//         min = son;
//         countMin = 1;
//     } else if(son === min) {
//         countMin ++;
//     }
//     i++;
// }
// sum -= countMax * max + countMin * min;
// console.log(sum / (N - countMin - countMax));

// =============== Min-Max 22 ===============
// let N = 5;
//
// let son = +prompt('son: ');
// let min = son;
//
// son = +prompt('son: ');
// let nextMin = son;
// let c;
//
// if(min > nextMin) {
//     c = min;
//     min = nextMin;
//     nextMin = c;
// }
//
// let i = 3;
//
// while (i <= N) {
//     //
//     son = +prompt('son: ');
//
//     if (son < min) {
//         nextMin = min;
//         min = son;
//     } else if (son < nextMin) {
//         nextMin = son;
//     }
//     i++;
// }
//
// console.log(min, nextMin);

// =============== Min-Max 23 ===============
// let N = 5;
//
// let son = +prompt('son: ');
// let max1 = son;
//
// son = +prompt('son: ');
// let max2 = son;
//
// son = +prompt('son: ');
// let max3 = son;
//
// let c;
//
// if (max1 >= max2 && max1 >= max3) {
//     if(max2 < max3) {
//         c = max2;
//         max2 = max3;
//         max3 = c;
//     }
// } else if (max2 >= max3 && max2 >= max1) {
//     if(max1 > max3) {
//         c = max1;
//         max1 = max2;
//         max2 = c;
//     }
// } else {
//     if(max1 < max2) {
//         c = max1;
//         max1 = max3;
//         max3 = c;
//     }
// }
//
// let i = 3;
//
// while (i <= N) {
//     //
//     son = +prompt('son: ');
//     if(son >= max1) {
//         max3 = max2;
//         max2 = max1;
//         max1 = son;
//     } else if(son >= max2) {
//         max3 = max2;
//         max2 = son;
//     } else if(son > max3) {
//         max3 = son;
//     }
//     i++;
// }
//
// console.log(max1, max2, max3);

// =============== Min-Max 24 ===============
// let N = 5;
// let son1 = +prompt('son: ');
// let son2 = +prompt('son: ');
//
// let sum = son1 + son2;
//
// let i = 3;
//
// while (i <= N) {
//     //
//     son1 = son2;
//     son2 = +prompt('son: ');
//     if (sum < son1 + son2) {
//         sum = son1 + son2;
//     }
//     i++;
// }
//
// console.log(sum);

// =============== Min-Max 25 ===============
// let N = 5;
// let son1 = +prompt('son: ');
// let son2 = +prompt('son: ');
//
// let multiply = son1 * son2;
//
// let i = 2;
// let index1, index2;
//
// while (i <= N) {
//     //
//     son1 = son2;
//     son2 = +prompt('son: ');
//     if (multiply > son1 * son2) {
//         multiply = son1 * son2;
//         index1 = i;
//         index2 = i + 1;
//     }
//     i++;
// }
//
// console.log(index1, index2);


// =============== Min-Max 26 ===============
// let N = 5;
// let son = +prompt('son: ');
// let countEven = son % 2 === 0 ? 1 : 0;
// let oldCount = countEven;
//
// let i = 2;
//
// while (i <= N) {
//     //
//     son = +prompt('son: ');
//     if (son % 2 === 0) {
//         countEven ++;
//         oldCount = countEven;
//     } else {
//         if(oldCount < countEven) {
//             oldCount = countEven;
//         }
//         countEven = 0;
//     }
//
//     i++;
// }
// console.log(oldCount);

// =============== Min-Max 27 ===============
// let N = 10;
// let son = +prompt('son: ');
// let count = 1;
// let maxCount = 1;
// let oldNum = son;
// let startIndex = 1;
//
// let tempIndex = 1;
//
// let i = 2;
//
// while (i <= N) {
//     //
//     son = +prompt('son: ');
//     if (son === oldNum) {
//         count++;
//     } else {
//         oldNum = son;
//         if (count > maxCount) {
//             maxCount = count;
//             startIndex = tempIndex;
//         }
//         tempIndex = i;
//         count = 1;
//     }
//
//     i++;
// }
//
// if(count > 1 && maxCount === 1) {
//     console.log(tempIndex, count);
// } else {
//     console.log(startIndex, maxCount);
// }

// =============== Min-Max 28 ===============
// let N = 10;
// let son = +prompt('son: ');
// let count = son;
// let maxCount = son;
// let startIndex = 1;
//
// let tempIndex = 1;
//
// let i = 2;
//
// while (i <= N) {
//     //
//     son = +prompt('son: ');
//     if (son === 1) {
//         count++;
//     } else {
//         if (count > maxCount) {
//             maxCount = count;
//             startIndex = tempIndex;
//         }
//         tempIndex = i;
//         count = 0;
//     }
//
//     i++;
// }
//
// if(count > 0 && maxCount === 0) {
//     console.log(tempIndex, count);
// } else {
//     console.log(startIndex, maxCount);
// }

// =============== Min-Max 29 ===============
// let N = +prompt("N ni kiriting");
//
// let i = 1;
// let min = Infinity;
// let count = 0;
// let maxCount = 0;
// let son;
//
// while (i <= N) {
//     son = +prompt(i + "-sonni kiriting");
//
//     if (son < min) {
//         min = son;
//         count = 1;
//         maxCount = 1;
//     }
//     else if (son === min) {
//         count++;
//         if (count > maxCount) {
//             maxCount = count;
//         }
//     }
//     else {
//         count = 0;
//     }
//
//     i++;
// }
//
// console.log("Eng kichik son:", min);
// console.log("Ketma-ket maksimal soni:", maxCount);

// =============== Min-Max 30 ===============
// let N = +prompt("N ni kiriting:");
//
// let i = 1;
// let max = -Infinity;
// let count = 0;
// let minCount = 0;
// let son;
//
// while (i <= N) {
//     son = +prompt(i + "-sonni kiriting:");
//
//     if (son > max) {
//         max = son;
//         count = 1;
//         minCount = 1;
//     }
//     else if (son === max) {
//         count++;
//     }
//     else {
//         if (count > 0) {
//             if (count < minCount) {
//                 minCount = count;
//             }
//             count = 0;
//         }
//     }
//
//     i++;
// }
//
// // agar oxirida ham max lar ketma-ketligi tugamay qolgan bo‘lsa
// if (count > 0 && count < minCount) {
//     minCount = count;
// }
//
// console.log("Eng katta son:", max);
// console.log("Ketma-ket kelgan eng katta elementlarning minimal soni:", minCount);
