// =============== For loop 1 ===============
// let k = 3;
// let n = 5;
//
// for(let i = 0; i < n; i ++) {
//     console.log(k);
// }

// =============== For loop 2 ===============
// let a = 5;
// let b = 20;
//
// for(let i = a; i <= b; i++) {
//     console.log(i);
// }

// =============== For loop 3 ===============
// let a = 5;
// let b = 20;
// let count = 0;
//
// for(let i = b; b > a; b --) {
//     count ++;
//     console.log(i);
// }
// console.log(count);

// =============== For loop 4 ===============
// let narx = 17000;
// for(let i = 1; i <= 10; i++) {
//     console.log(i + ' kg konfet narxi = ' + narx * i);
// }

// =============== For loop 5 ===============
// let narx = 17000;
// for(let i = 0.1; i <= 1; i += 0.1) {
//     console.log(i + ' kg konfet narxi = ' + Math.round(narx * i));
// }

// =============== For loop 6 ===============
// let narx = 17000;
// for(let i = 1.2; i <= 2; i += 0.2) {
//     console.log(i + ' kg konfet narxi = ' + Math.round(narx * i));
// }

// =============== For loop 7 ===============
// let a = 1;
// let b = 5;
// let sum = 0;
//
// for(let i = a + 1; i < b; i += 1) {
//     i = Math.floor(i);
//     sum = sum + i;
// }
// console.log(sum);

// =============== For loop 8 ===============
// let a = 1;
// let b = 5;
// let multiply = 1;
//
// for(let i = a; i < b; i += 1) {
//     i = Math.floor(i);
//     multiply = multiply * i;
// }
// console.log(multiply);

// =============== For loop 9 ===============
// let a = 1;
// let b = 5;
// let multiply = 0;
//
// for(let i = a; i <= b; i += 1) {
//     i = Math.floor(i);
//     multiply = multiply + i * i;
// }
// console.log(multiply);

// =============== For loop 10 ===============
// let n = 10;
// let sum = 0;
//
// for(let i = 1; i <= n; i ++) {
//     sum = sum + 1 / i;
// }
// console.log(sum);

// =============== For loop 11 ===============
// let n = 10;
// let sum = 0;
//
// for(let i = 0; i <= n; i ++) {
//     sum = sum + Math.pow(n + i, 2);
// }
// console.log(sum);

// =============== For loop 12 ===============
// let n = 10;
// let multiply = 1;
// let a1 = 1.1;
//
// for(let i = 1; i <= n; i ++) {
//     multiply = multiply * a1;
//     a1 += 0.1;
// }
// console.log(multiply);

// =============== For loop 13 ===============
// let n = 10;
// let sum = 0;
// let a1 = 1.1;
//
// for(let i = 1; i <= n; i ++) {
//     sum = sum + a1;
//     a1 += 0.1;
//     a1 *= -1;
// }
// console.log(sum);

// =============== For loop 14 ===============
// let n = 2;
// let sum = 0;
//
// for(let i = 1; i <= 2 * n - 1; i += 2) {
//     sum += i;
// }
// console.log(sum);

// =============== For loop 15 ===============
// let a = 2;
// let n = 5;
// let multiple = 1;
//
// for(let i = 1; i <= n; i ++) {
//     multiple *= a;
// }
// console.log(multiple);

// =============== For loop 16 ===============
// let a = 2;
// let n = 5;
// let multiple = 1;
//
// for(let i = 1; i <= n; i ++) {
//     multiple *= a;
//     console.log(i + '-daraja: ' + multiple);
// }

// =============== For loop 17 ===============
// let a = 2;
// let n = 5;
// let multiple = 1;
// let sum = 0;
//
// for(let i = 1; i <= n; i ++) {
//     multiple *= a;
//     sum += multiple;
//     console.log(i + '-daraja: ' + multiple);
// }
// console.log('darajalari yigindisi: ' + sum);

// =============== For loop 18 ===============
// let a = 2;
// let n = 5;
// let multiple = 1;
// let sum = 0;
//
// for(let i = 0; i <= n + 1; i ++) {
//     multiple *= a;
//     sum += Math.pow(-1, i) * multiple;
//     console.log(i + 1 + '-daraja: ' + multiple);
// }
// console.log('darajalari yigindisi: ' + sum);

// =============== For loop 19 ===============
// let n = 3;
// let factorial = 1;
//
// for(let i = factorial; i <= n; i ++) {
//     factorial *= i;
// }
// console.log(factorial);

// =============== For loop 20 ===============
// let n = 3;
// let factorial = 1;
// let sum = 0;
//
// for (let i = factorial; i <= n; i++) {
//     factorial *= i;
//     sum += factorial;
// }
// console.log(sum);

// =============== For loop 21 ===============
// let n = 3;
// let factorial = 1;
// let sum = 1;
//
// for (let i = factorial; i <= n; i++) {
//     factorial *= i;
//     sum += 1 / factorial;
// }
// console.log(sum);

// =============== For loop 22 ===============
// let n = 2;
// let factorial = 1;
// let x = 2;
// let sum = 0;
//
// for (let i = 0; i <= n; i++) {
//     if (i !== 0) {
//         factorial *= i;
//     }
//     sum += Math.pow(x, i) / factorial;
// }
// console.log(sum);

// =============== For loop 23 ===============
// let n = 5;
// let x = 4;
// let sum = 0;
// let factorial = 1;
// let j = 0;
//
// for (let i = 1; i <= 2 * n + 1; i += 1) {
//     factorial *= i;
//     if (i % 2 === 1) {
//         sum += Math.pow(-1, j) * Math.pow(x, i) / factorial;
//         j++;
//     }
// }
// console.log(sum);

// =============== For loop 24 ===============
// let n = 5;
// let x = 4;
// let sum = 0;
// let factorial = 1;
// let j = 0;
//
// for (let i = 0; i <= 2 * n; i += 1) {
//     if(i !== 0) factorial *= i;
//     if (i % 2 === 0) {
//         sum += Math.pow(-1, j) * Math.pow(x, i) / factorial;
//         j++;
//     }
// }
// console.log(sum);

// =============== For loop 25 ===============
// let n = 5;
// let x = 0.5;
// let sum = 0;
//
// for (let i = 1; i <= n; i ++) {
//     sum += Math.pow(-1, i - 1) * Math.pow(x, i) / i;
// }
// console.log(sum);


// =============== For loop 26 ===============
// let n = 5;
// let x = 0.5;
// let sum = 0;
// let j = 0;
//
// for (let i = 1; i <= 2*n + 1; i += 2) {
//     sum += Math.pow(-1, j) * Math.pow(x, i) / i;
//     j ++;
// }
// console.log(sum);

// =============== For loop 27 ===============
// let n = 1;
// let x = 2;
// let sumOdd = 0, sumEven = 0;
// let sum = 0;
//
// for (let i = 0; i <= 2 * n + 1; i ++) {
//     for(let j = 0; j <= 2 * i + 1; j ++) {
//         if(j % 2 === 1 && j <= 2 * i - 1) sumOdd += j;
//         else sumEven += j;
//     }
//
//     sum += sumOdd * Math.pow(x, i) / sumEven;
// }
// console.log(sum);

// =============== For loop 28 ===============
// let x = 10;
// let n = 5;
// let multiplyOdd = 1, multiplyEven = 1;
// let sum = 0;
//
// for(let i = 1; i <= n; i++) {
//     for(let j = 1; j <= 2 * i; j++) {
//         if(j % 2 === 1 && j <= i) multiplyOdd *= j;
//         if(j % 2 === 0) multiplyEven *= j;
//     }
//     sum += Math.pow(-1, i - 1) * multiplyOdd * Math.pow(x, i) / multiplyEven;
// }
// console.log(sum);

// =============== For loop 29 ===============
// let n = 4;
// let A = 4;
// let B = 20;
// let l = Math.abs(A - B);
// let qoldiq = l;
//
// for (let i = 0; i <= n; i ++) {
//     console.log(qoldiq);
//     qoldiq = qoldiq - l / n;
// }

// =============== For loop 30 ===============
// let n = 4;
// let A = 4;
// let B = 20;
// let l = Math.abs(A - B);
// let qoldiq = l;
// let sum;
//
// for (let i = 0; i <= n; i ++) {
//     qoldiq = qoldiq - l / n;
//     sum = 1 - Math.sin(qoldiq);
//     console.log(sum);
// }

// =============== For loop 31 ===============
// Ak = 2 + 1 / A(k-1);
// let n = 5;
// let AkMinus1 = 2;
// let Ak;
//
// for(let k = 1; k <= n; k ++) {
//     Ak = AkMinus1 + 1 / AkMinus1;
//     AkMinus1 = Ak;
//     console.log(Ak);
// }

// =============== For loop 32 ===============
// let n = 10;
// let AkMinus1 = 1;
// let Ak;
//
// for (let k = 1; k <= n; k ++) {
//     Ak = (AkMinus1 + 1) / k;
//     AkMinus1 = Ak;
//     console.log(Ak);
// }

// =============== For loop 33 ===============
// let n = 6;
// let F1 = 1;
// let F2 = 1;
// let F3;
//
// console.log(F1);
// console.log(F2);
// for(let i = 1; i <= n; i ++) {
//     F3 = F1 + F2;
//     F1 = F2;
//     F2 = F3;
//     console.log(F3);
// }

// =============== For loop 34 ===============
// let n = 6;
// let A1 = 1;
// let A2 = 2;
// let AK = (A1 + 2 * A2) / 3;
//
// for (let i = 4; i <= n; i++) {
//     console.log(A1);
//     console.log(A2);
//     console.log(AK);
//     A1 = A2;
//     A2 = AK;
//     AK = (A2 + 2 * AK) / 3;
// }

// =============== For loop 35 ===============
// let n = 5;
// let A1 = 1;
// let A2 = 2;
// let A3 = 3;
// let AK = A3 + A2 - 2 * A1;
//
// for (let i = 4; i <= n; i++) {
//     console.log(A1);
//     console.log(A2);
//     console.log(A3);
//     console.log(AK);
//     A1 = A2;
//     A2 = A3;
//     A3 = AK;
//     AK = A3 + A2 - 2 * A1;
// }

// =============== For loop 36 ===============
// let N = 5;
// let K = 3;
// let sum = 0;
//
// for (let i = 0; i <= N; i ++) {
//     sum += Math.pow(i, K);
// }
// console.log(sum);

// =============== For loop 37 ===============
// let n = 3;
// let sum = 0;
// for(let i = 1; i <= n; i ++) {
//     sum += Math.pow(i, i);
// }
// console.log(sum);

// =============== For loop 38 ===============
// let n = 3;
// let sum = 0;
// for(let i = 0; i <= n; i ++) {
//     sum += Math.pow(i, n - i);
// }
// console.log(sum);

// =============== For loop 39 ===============
// let A = 3;
// let B = 5;
// for(let i = A; i < B; i ++) {
//     for(let j = 1; j <= i; j ++) {
//         console.log(i);
//     }
// }

// =============== For loop 40 ===============
// let A = 3;
// let B = 5;
// let count = 1;
// for(let i = A; i < B; i ++) {
//     for(let j = 1; j <= count; j ++) {
//         console.log(i);
//     }
//     count ++;
// }