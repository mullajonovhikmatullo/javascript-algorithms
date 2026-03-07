// =============== While 1 ===============
// let B = 3, A = 20;
//
// while (A >= B) {
//     A = A - B;
// }
// console.log(A);

// =============== While 2 ===============
// let B = 3, A = 20, count = 0;
//
// while (A >= B) {
//     A = A - B;
//     count ++;
// }
// console.log('A kesmada B kesmadan joylashadi: ' + count);

// =============== While 3 ===============
// let N = 17, K = 4, count = 0;
// while (N >= K) {
//     N -= K;
//     count ++;
// }
// console.log('Butun: ' + count);
// console.log('Qoldiq: ' + N);

// =============== While 4 ===============
// let n = 27;
// while (n >= 3) {
//     n -= 3;
// }
// if(n === 0) {
//     console.log('3-ning darajasi');
// } else {
//     console.log('3-ning darajasi emas !');
// }

// =============== While 5 ===============
// let n = 32;
// let k = 0, sum = 1;
// while (n > sum) {
//     sum *= 2;
//     k ++;
// }
// console.log(k);

// =============== While 6 ===============
// let n = 5;
// let multiply = 1;
// let ayirma = 0;
//
// while (n - ayirma > 0) {
//     multiply = multiply * (n - ayirma);
//     ayirma += 2;
// }
//
// console.log(multiply);

// =============== While 7 ===============
// let n = 20, k = 2;
//
// while (n > k * k) {
//     k ++;
// }
// console.log(k);


// =============== While 8 ===============
// let n = 16, k = 2;
//
// while (true) {
//     if(n >= k * k && n <= Math.pow(k + 1, 2)) {
//         break;
//     }
//     k ++;
// }
// console.log(k);

// =============== While 9 ===============
// let n = 10;
// let degree = 1;
//
// while (Math.pow(3, degree) < n) {
//     degree ++;
// }
// console.log(degree);

// =============== While 10 ===============
// let n = 10;
// let degree = 1;
//
// while (true) {
//     if(Math.pow(3, degree) <= n && n <= Math.pow(3, degree + 1)) {
//         break;
//     }
//     degree ++;
// }
// console.log(degree);

// =============== While 11 ===============
// let n = 11;
// let sum = 0;
// let k = 0;
//
// while (sum < n) {
//     sum += k;
//     k ++;
// }
// console.log(sum, k);

// =============== While 12 ===============
// let n = 16;
// let k = 1;
// let sum = 0;
//
// while (sum + k <= n) {
//     sum += k;
//     k ++;
// }
// console.log('sum = ' + sum, 'k = ' + k);

// =============== While 13 ===============
// let a = 3;
// let k = 1;
// let sum = 0;
//
// while (sum < a) {
//     sum += 1 / k;
//     k ++;
// }
// console.log(k);

// =============== While 14 ===============
// let a = 3;
// let k = 1;
// let sum = 0;
//
// while (sum + 1 / k < a) {
//     sum += 1 / k;
//     k ++;
// }
// console.log(k);

// =============== While 15 ===============
// let S = 20_000;
// let tempS = S;
// let p = 10;
// let month = 0;
//
// if(0 < p && p < 25) {
//     while (tempS <= 2 * S) {
//         tempS += tempS * p / 100;
//         month ++;
//     }
//     console.log(month + ' oydan keyin: ' + tempS.toFixed(2));
// } else {
//     console.log('Bankimiz bunday foiz bera olmaydi');
// }

// =============== While 16 ===============
// let S = 10;
// let tempS = S;
// let p = 10;
// let month = 0;
//
// if(0 < p && p < 50) {
//     while (tempS < 200) {
//         tempS += tempS * p / 100;
//         month ++;
//     }
//     console.log(month + ' kundan keyin: ' + Math.trunc(tempS) + ' km');
// } else {
//     console.log('Sportsmenlar bunday qo\'shimcha yugura olishmaydi');
// }

// =============== While 17 ===============
// let n = 21, m = 5, count = 0;
// if(n > m) {
//     while (n >= m) {
//         n -= m;
//         count ++;
//     }
//     console.log('Butun ' + count + ' qoldiq: ' + n);
// } else {
//     console.log('shartga mos kelmadi');
// }

// =============== While 18 ===============
// let n = 2191;
// let qoldiq;
// let reverseN = 0;
//
// while (n !== 0) {
//     qoldiq = n % 10;
//     n = Math.trunc(n / 10);
//
//     reverseN *= 10;
//     reverseN += qoldiq;
// }
// console.log(reverseN);

// =============== While 19 ===============
// let n = 2191;
// let qoldiq, count = 0;
// let sum = 0;
//
// while (n !== 0) {
//     qoldiq = n % 10;
//     n = Math.trunc(n / 10);
//
//     sum += qoldiq;
//     count ++;
// }
// console.log(sum, count);

// =============== While 20 ===============
// let n = 10191;
// let qoldiq, hasTwo = false;
//
// while (n !== 0) {
//     qoldiq = n % 10;
//     n = Math.trunc(n / 10);
//
//     if(qoldiq === 2) {
//         hasTwo = true;
//         break;
//     }
// }
// console.log(hasTwo);

// =============== While 21 ===============
// let n = 2088;
// let qoldiq, hasOdd = false;
//
// while (n !== 0) {
//     qoldiq = n % 10;
//     n = Math.trunc(n / 10);
//
//     if(qoldiq % 2) {
//         hasOdd = true;
//         break;
//     }
// }
// console.log(hasOdd);

// =============== While 22 ===============
// let n = 7;
// let isPrime = true;
// let i = 2;
//
// while (i <= Math.sqrt(n)) {
//     if(n % i === 0) {
//         isPrime = false;
//         break;
//     }
//     i++;
// }
// if(isPrime) console.log('Yes! This is a prime number.');
// else console.log('No! This is not prime number.');

// =============== While 23 ===============
// let a = 21;
// let b = 14;
// let min = a > b ? b : a;
// let count = 1;
// let EKUB = 2;
//
// while (min > 0) {
//     if(a % count === 0 && b % count === 0) {
//         EKUB = count;
//     }
//     count ++;
//     min--;
// }
// console.log(EKUB);

// =============== While 24 ===============
// let n = 5;
// let FkminusTwo = 1;
// let FkminusOne = 1;
// let Fk = FkminusOne + FkminusTwo;
// let isNFibonaci = false;
//
// while (Fk <= n) {
//     if(Fk === n) {
//         isNFibonaci = true;
//         break;
//     }
//     FkminusTwo = FkminusOne;
//     FkminusOne = Fk;
//     Fk = FkminusOne + FkminusTwo;
// }
//
// if(isNFibonaci) console.log('Yes ! It\'s fibonaci number');
// else console.log('No ! It\'s not fibonaci number');

// =============== While 25 ===============
// let n = 5;
// let FkminusTwo = 1;
// let FkminusOne = 1;
// let Fk = FkminusOne + FkminusTwo;
//
// while (Fk <= n) {
//     FkminusTwo = FkminusOne;
//     FkminusOne = Fk;
//     Fk = FkminusOne + FkminusTwo;
// }
// console.log(Fk);

// =============== While 26 ===============
// let n = 21;
// let FkminusTwo = 1;
// let FkminusOne = 1;
// let Fk = FkminusOne + FkminusTwo;
//
// while (Fk <= n) {
//     FkminusTwo = FkminusOne;
//     FkminusOne = Fk;
//     Fk = FkminusOne + FkminusTwo;
// }
// console.log('Oldingisi: ' + FkminusTwo);
// console.log("O'zi: " + n);
// console.log('Keyingisi: ' + Fk);

// =============== While 27 ===============
// let n = 1;
// let FkminusTwo = 1;
// let FkminusOne = 1;
// let Fk = FkminusOne + FkminusTwo;
// let count = 3;
//
// while (Fk <= n) {
//     FkminusTwo = FkminusOne;
//     FkminusOne = Fk;
//     Fk = FkminusOne + FkminusTwo;
//     count ++;
// }
// console.log(n + ' soni ' + (count - 1) + ' - fibonachi son.');

// =============== While 28 ===============
// let e = 1;
// let aKminusOne = 2;
// let ak = aKminusOne + 1 / aKminusOne;
// let k = 2;
//
// while (Math.abs(ak - aKminusOne) > e) {
//     aKminusOne = ak;
//     ak = aKminusOne + 1 / aKminusOne;
//     k ++;
// }
//
// console.log(ak, aKminusOne, k);

// =============== While 29 ===============
// let e = 1;
// let aKminusTwo = 1;
// let aKminusOne = 2;
// let ak = (aKminusTwo + 2 * aKminusOne) / 3;
// let k = 3;
//
// while (Math.abs(ak - aKminusOne) > e) {
//     aKminusOne = ak;
//     ak = (aKminusTwo + 2 * aKminusOne) / 3;
//     k ++;
// }
//
// console.log(ak, aKminusOne, k);


// =============== While 30 ===============
// let A = 5, B = 10, C = 3;
// let countA = 0, countB = 0;
//
// while (A >= C || B >= C) {
//     A -= C;
//     B-= C;
//     if(A >= 0) countA ++;
//     if(B >= 0) countB ++;
// }
// console.log(countA * countB);