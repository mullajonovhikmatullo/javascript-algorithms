// ==================== FunSimple 1 ====================
// function PowerA3(son: number):void {
//     let result: number = son * son * son;
//     console.log(result.toFixed(2));
// }
// let A = 2.1, B = 3.2, C = 4.5;
// let D = 5, E = 4;
// PowerA3(A);
// PowerA3(B);
// PowerA3(C);
// PowerA3(D);
// PowerA3(E);

// ==================== FunSimple 2 ====================
// function Power234 (son: number): void {
//     let result:number = son * son;
//     console.log(result.toFixed(2));
//     result *= son;
//     console.log(result.toFixed(2));
//     result *= son;
//     console.log(result.toFixed(2));
// }
//
// let A = 2.1, B = 3.1, C = 4.1;
// Power234(A);
// Power234(B);
// Power234(C);

// ==================== FunSimple 3 ====================
// function MEAN (x: number, y: number) {
//     //
//     let middleArif:number = (x + y) / 2;
//     let middleGeom:number = Math.sqrt(x * y);
//
//     console.log(middleArif.toFixed(1), middleGeom.toFixed(1));
// }
// let A:number = 2, B:number = 3, C:number = 5, D:number = 8;
// MEAN(A, B);
// MEAN(A, C);
// MEAN(A, D);

// ==================== FunSimple 4 ====================
// function Triangle (a: number) {
//     //
//     let p: number = 3 * a;
//     let S: number = a * a * Math.sqrt(3) / 4;
//     console.log('S = ', Number(S.toFixed(2)));
//     console.log('p = ', p);
// }
// Triangle(2);
// Triangle(3);
// Triangle(4);

// ==================== FunSimple 5 ====================
// function RectPC (x1: number, y1: number, x2: number, y2: number): void {
//     let a:number = Math.abs(x2 - x1);
//     let b:number = Math.abs(y2 - y1);
//     let S:number = a * b;
//     let p:number = 2 * (a + b);
//     console.log('S = ', S);
//     console.log('p = ', p);
// }
// RectPC(5, 3, 7, 8);
// RectPC(10, 22, 7, 8);

// ==================== FunSimple 6 ====================
// function DigitCountSum (son: number) {
//     let sum: number = 0;
//     let count: number = 0;
//     while (son > 0) {
//         sum += son % 10;
//         son = son / 10;
//         son = Math.floor(son);
//         count ++;
//     }
//     console.log('Raqamlari soni: ' + count);
//     console.log('Raqamlari yig\'indisi: ' + sum);
// }
// DigitCountSum(0);
// DigitCountSum(172811);

// ==================== FunSimple 7 ====================
// function InvertDigit(son: number): void {
//     //
//     if (son < 0 || son > Math.floor(son)) {
//         return console.log('Bu musbat butun son emas !');
//     }
//     let result: number = 0;
//     while (son > 0) {
//         //
//         result *= 10;
//         result += son % 10;
//         son = Math.floor(son / 10);
//     }
//     console.log(result);
// }
// InvertDigit(777);
// InvertDigit(189);

// ==================== FunSimple 8 ====================
// function AddRightDigit (son: number, R: number): void {
//     //
//     if (R > 9 || R < 1) {
//         return console.log('Can\'nt add this number !');
//     }
//     let result: number = son * 10 + R;
//     console.log(result);
// }
//
// AddRightDigit(1200, 5);

// ==================== FunSimple 9 ====================
// function AddLeftDigit (son: number, R: number): void {
//     //
//     if (R > 9 || R < 1) {
//         return console.log('Can\'nt add this number !');
//     }
//     let count: number = 0;
//     let originalSon: number = son;
//     while (son > 0) {
//         son = Math.floor(son / 10);
//         count ++;
//     }
//     let result: number = Math.pow(10, count) * R + originalSon;
//     console.log(result);
// }
//
// AddLeftDigit(1200, 5);

// ==================== FunSimple 10 ====================
// function Swap (a: number, b: number) {
//     //
//     let c: number = a;
//     a = b;
//     b = c;
//     console.log(a, b);
// }
// let A: number = 1, B: number = 22, C: number = 18, D: number = 100;
// Swap(A, B);
// Swap(D, C);

// ==================== FunSimple 11 ====================
// function Minmax (X: number, Y: number): void {
//     //
//     let c: number = X;
//     if (X > Y) {
//         X = Y;
//         Y = c;
//     }
//     console.log('X = ' + X, 'Y = ' + Y);
// }
// let a: number = 10, b: number = 11, c: number = 5, d: number = 19;
// Minmax(a, b);
// Minmax(c, d);
// Minmax(a, c);
// Minmax(b, d);

// ==================== FunSimple 12 ====================
// function SortInc3(a: number, b: number, c: number): void {
//     //
//     let temp: number;
//     if (a > b) {
//         temp = a;
//         a = b;
//         b = temp;
//     }
//     if (a > c) {
//         temp = a;
//         a = c;
//         c = temp;
//     }
//     if (b > c) {
//         temp = b;
//         b = c;
//         c = temp;
//     }
//
//     console.log(a, b, c);
// }
//
// SortInc3(8, 5, 1);

// ==================== FunSimple 13 ====================
// function SortDec3(a: number, b: number, c: number): void {
//     //
//     let temp: number;
//     if (a < b) {
//         temp = a;
//         a = b;
//         b = temp;
//     }
//     if (a < c) {
//         temp = a;
//         a = c;
//         c = temp;
//     }
//     if (b < c) {
//         temp = b;
//         b = c;
//         c = temp;
//     }
//
//     console.log(a, b, c);
// }
//
// SortDec3(8, 9, 10);

// ==================== FunSimple 14 ====================
// function ShiftRight3 (A: number, B: number, C: number): void {
//     let temp: number = C;
//     C = B;
//     B = A;
//     A = temp;
//     console.log(A, B, C);
// }
//
// ShiftRight3(1, 2, 3);

// ==================== FunSimple 15 ====================
// function ShiftLeft3 (A: number, B: number, C: number): void {
//     let temp: number = A;
//     A = B;
//     B = C;
//     C = temp;
//     console.log(A, B, C);
// }
//
// ShiftLeft3(1, 2, 3);

// ==================== FunSimple 16 ====================
// function Ishora(son: number): number {
//     if (son > 0) return 1;
//     else if (son < 0) return -1;
//     else return son;
// }
// let sum: number = Ishora(-19.2) + Ishora(0);
// console.log(sum);

// ==================== FunSimple 17 ====================
// function quadraticEquation(A: number, B: number, C: number):void {
//     let D:number = B * B - 4 * A * C;
//     let X1:number = (-B + Math.sqrt(D)) / 2 * A;
//     let X2:number = (-B - Math.sqrt(D)) / 2 * A;
//
//     let count: number = 0;
//     if (A * X1 * X1 + B * X1 + C === 0) count ++;
//     if (A * X2 * X2 + B * X2 + C === 0) count ++;
//     console.log('Kvadrat tenglama ildizlari yechimi ' + count + ' ta: ');
//     console.log(X1.toFixed(2), X2.toFixed(2));
// }
// quadraticEquation(1, 3, 1);

// ==================== FunSimple 18 ====================
// function circleFace (R: number): void {
//     const PI = 3.1415;
//     const result = PI * R * R;
//     console.log(result);
// }
// circleFace(2);
// circleFace(3);

// ==================== FunSimple 19 ====================
// function RingS(R1: number, R2: number): void {
//     let result: string = Math.abs(Math.PI * (R1 * R1 - R2 * R2)).toFixed(2);
//     console.log(result);
// }
// RingS(3, 5);

// ==================== FunSimple 20 ====================
// function TriangleP (a: number, b: number): void {
//     let c: number = Math.sqrt(a * a + b * b);
//     let p: number = a + b + c;
//     console.log('Perimetr = ' + p);
// }
// TriangleP(3, 4);

// ==================== FunSimple 21 ====================
// function SumRange (A: number, B: number): number {
//     //
//     let sum = 0;
//     if(A > B) return sum;
//     A++;
//     while (A < B) {
//         sum += A;
//         A++;
//     }
//     return sum;
// }
// let result: number = SumRange(50, 8);
// console.log(result);

// ==================== FunSimple 22 ====================
// function Calc (A: number, B:number, Op:number) {
//     //
//     let sum: number;
//     switch (Op) {
//         case 1: sum = A - B; break;
//         case 2: sum = A / B; break;
//         case 3: sum = A * B; break;
//         default: sum = A + B;
//     }
//     console.log(sum);
// }
// Calc(10, 5, 5);

// ==================== FunSimple 23 ====================
// function Quarter (X: number, Y: number): void {
//     //
//     if (X > 0 && Y > 0) {
//         console.log('I - chorak');
//     } else if (X < 0 && Y > 0) {
//         console.log('II - chorak');
//     } else if (X < 0 && Y < 0) {
//         console.log('III - chorak');
//     } else {
//         console.log('IV - chorak');
//     }
// }
// Quarter(1, 1);
// Quarter(-1, 1);
// Quarter(-1, -1);
// Quarter(1, -1);

// ==================== FunSimple 24 ====================
// function Even(K: number): boolean {
//     //
//     let result: boolean;
//     result = !(K % 2);
//
//     return result;
// }
//
// console.log(Even(5));
// console.log(Even(7));
// console.log(Even(10));

// ==================== FunSimple 25 ====================
// function IsSquare(K: number): boolean {
//     //
//     let Kbutun = Math.sqrt(K);
//     return Kbutun === Math.floor(Kbutun);
// }
//
// console.log(IsSquare(16));

// ==================== FunSimple 26 ====================
// function IsPower5(son: number): boolean {
//     //
//     let isDegree = true;
//     while (son > 1) {
//         if (son % 5 !== 0) {
//             isDegree = false;
//             break;
//         }
//         son = son / 5;
//     }
//     return isDegree;
// }
// let result = IsPower5(0);
// console.log(result);

// ==================== FunSimple 27 ====================
// function IsPowerN (K: number, N: number): boolean {
//     //
//     let isPower = false;
//     if(N === 1) return isPower;
//
//     let i = 0;
//     let tempRes = 1;
//     while (K > tempRes) {
//         i++;
//         tempRes = Math.pow(N, i);
//         if(tempRes === K) {
//             isPower = true;
//             break;
//         }
//     }
//     return isPower;
// }
// console.log(IsPowerN(4, 2));

// ==================== FunSimple 28 ====================
// function IsPrime (N: number): boolean {
//     //
//     if(N < 1) return false;
//
//     let i = 2;
//     let isPrime = true;
//     while (Math.sqrt(N) >= i) {
//         if(N % i === 0) {
//             isPrime = false;
//             break;
//         }
//         i++;
//     }
//     return isPrime;
// }
//
// console.log(IsPrime(10));

// ==================== FunSimple 29 ====================
// function DigitCount(K: number):number {
//     //
//     let count = 0;
//     while (K > 0) {
//         K = Math.floor(K / 10);
//         count ++;
//     }
//     return count;
// }
// console.log(DigitCount(1));
// console.log(DigitCount(12));
// console.log(DigitCount(123));

// ==================== FunSimple 30 ====================
// function DigitN(K: number, N: number): number {
//     //
//     let count: number = 0, q: number;
//     while (K > 0) {
//         q = K % 10;
//         K = Math.floor(K / 10);
//         if(N === count + 1) {
//             return q;
//         }
//         count ++;
//     }
// }
//
// console.log(DigitN(1987, 1));

// ==================== FunSimple 31 ====================
// function IsPalindrom(N:number):boolean {
//     let count = DigitCount(N);
//     let i = 1;
//     let isPalind = true;
//     while (i <= count / 2) {
//         console.log(DigitN(N, i), DigitN(N, count + 1 - i))
//         if(DigitN(N, i) !== DigitN(N, count + 1 - i)) {
//             isPalind = false;
//             return isPalind;
//         }
//         i++;
//     }
//     return isPalind;
// }
//
// console.log(IsPalindrom(1011101));


// ==================== FunSimple 32 ====================
// function DegToRad (D: number):number {
//     //
//     if(0 < D && D < 360) {
//         return Number((D * Math.PI / 180).toFixed(2));
//     }
//     return 0;
// }
//
// console.log(DegToRad(90));
// console.log(DegToRad(40));
// console.log(DegToRad(10));

// ==================== FunSimple 33 ====================
// function RadToDeg (R: number): number {
//     //
//     return Number((R * 180 / Math.PI).toFixed(2));
// }
//
// console.log(RadToDeg(1.57));
// console.log(RadToDeg(2.43));
// console.log(RadToDeg(7.19));

// ==================== FunSimple 34 ====================
// function Fact(N: number): number {
//     let sumFact = N ? 1 : 0;
//     let i = 1;
//     while (i <= N) {
//         sumFact *= i;
//         i ++;
//     }
//     return sumFact;
// }
// console.log(Fact(5));

// ==================== FunSimple 35 ====================
// function Fact2(N: number): number {
//     //
//     let sumFact2 = 1;
//     while(N > 1) {
//         sumFact2 *= N;
//         N-=2;
//     }
//     return sumFact2;
// }
//
// console.log(Fact2(5));

// ==================== FunSimple 36 ====================
// function Fib(N: number): number {
//     let had:number = 1;
//     let nextHad:number = 1;
//     let nextNextHad: number = had + nextHad;
//     let i:number = 4;
//     while (i <= N) {
//         had = nextHad;
//         nextHad = nextNextHad;
//         nextNextHad = had + nextNextHad;
//         i ++;
//     }
//     return N < 3 ? 1 : nextNextHad;
// }
// console.log(Fib(6));

// ==================== FunSimple 37 ====================
// function Power(A: number, B: number):number {
//     let result = 1;
//     let i = 1;
//     while (i <= B) {
//         result *= A;
//         i++;
//     }
//     return result;
// }
// let res = Power(2, 5);
// console.log(res);

// ==================== FunSimple 38 ====================
// function Power2(A: number, N: number): number {
//     let result = 1;
//     let i = 1;
//     while (i <= Math.abs(N)) {
//         result *= A;
//         i++;
//     }
//
//     return N < 0 ? 1 / result : result;
// }
// let res = Power2(5, 0);
// console.log(res);
// res = Power2(2, -1);
// console.log(res);
// res = Power2(5, 2);
// console.log(res);

// ==================== FunSimple 39 ====================
// function Power3 (A:number, N:number): number {
//     //
//     return A - Math.floor(A) ? Power(A, N) : Power2(A, N);
// }
// console.log(Power3(2.1, 3))

// ==================== FunSimple 40 ====================
// function Exp1(x: number, e: number): number {
//     //
//     let sum: number = 1;
//     let sumFact: number = 1;
//
//     if(x <= 0 || e <= 1) return -1;
//
//     let i: number = 1;
//     let had: number;
//
//     while (true) {
//         sumFact *= i;
//         had = Math.pow(x, i) / sumFact;
//         if (had < e) break;
//         sum += had;
//         i++;
//     }
//     return sum;
// }
//
// console.log(Exp1(2, 2));


// ==================== FunSimple 41 ====================
// function factorial(n: number) {
//     let sum = 1, i = 1;
//     while (i <= n) {
//         sum *= i;
//         i ++;
//     }
//     return sum;
// }
//
// function sin1(x: number, e: number): number {
//     //
//     let sum: number = 1;
//     let sumFact: number = 1;
//
//     if (x <= 0 || e <= 1) return -1;
//
//     let i: number = 0;
//     let had: number;
//
//     while (true) {
//         sumFact *= i;
//         had = Math.pow(-1, i) * Math.pow(x, 2 * i + 1) / factorial(2 * i + 1);
//         if (Math.abs(had) < e) break;
//         sum += had;
//         i++;
//     }
//     return sum;
// }
//
// console.log(sin1(2, 5));

// ==================== FunSimple 42 ====================
// function factorial(n: number) {
//     let sum = 1, i = 1;
//     while (i <= n) {
//         sum *= i;
//         i ++;
//     }
//     return sum;
// }
//
// function cos1(x: number, e: number): number {
//     //
//     let sum: number = 1;
//     let sumFact: number = 1;
//
//     if (x <= 0 || e <= 1) return -1;
//
//     let i: number = 0;
//     let had: number;
//
//     while (true) {
//         sumFact *= i;
//         had = Math.pow(-1, i) * Math.pow(x, 2 * i) / factorial(2 * i);
//         if (Math.abs(had) < e) break;
//         sum += had;
//         i++;
//     }
//     return sum;
// }
//
// console.log(cos1(2, 5));

// ==================== FunSimple 43 ====================
// function factorial(n: number) {
//     let sum = 1, i = 1;
//     while (i <= n) {
//         sum *= i;
//         i ++;
//     }
//     return sum;
// }
//
// function Ln1(x: number, e: number): number {
//     //
//     let sum: number = 1;
//     let sumFact: number = 1;
//
//     if (x <= 0 || e <= 1) return -1;
//
//     let i: number = 0;
//     let had: number;
//
//     while (true) {
//         sumFact *= i;
//         had = Math.pow(-1, i) * Math.pow(x, i + 1) / factorial(i + 1);
//         if (Math.abs(had) < e) break;
//         sum += had;
//         i++;
//     }
//     return sum;
// }
//
// console.log(Ln1(2, 5));

// ==================== FunSimple 44 ====================
// function Ln1(x: number, e: number): number {
//     //
//     let sum: number = 1;
//     let sumFact: number = 1;
//
//     if (x <= 0 || e <= 1) return -1;
//
//     let i: number = 0;
//     let had: number;
//
//     while (true) {
//         sumFact *= i;
//         had = Math.pow(-1, i) * Math.pow(x, 2*i + 1) / 2 * i + 1;
//         if (Math.abs(had) < e) break;
//         sum += had;
//         i++;
//     }
//     return sum;
// }
//
// console.log(Ln1(2, 5));

// ==================== FunSimple 45 ====================
// function factorial(n: number): number {
//     let sum = 1, i = 1;
//     while (i <= n) {
//         sum *= i;
//         i++;
//     }
//     return sum;
// }
//
// function frontSum(a: number, n: number): number {
//     //
//     let sum = 1;
//     let i = 0;
//     while (i < n) {
//         //
//         sum *= a * (a - i);
//         i++;
//     }
//     return sum;
// }
//
// function Power4(x: number, a: number, e: number): number {
//     //
//     let sum = 1;
//     let i = 0;
//     let had: number;
//
//     while (true) {
//         //
//         had = frontSum(a, i) * Math.pow(x, i) / factorial(i);
//         if (Math.abs(had) < e) return sum;
//         sum += had;
//     }
// }
//
// console.log(Power4(3, 1, 3))

// ==================== FunSimple 46 ====================
// function EKUB(A:number, B:number):number {
// //
//     let i = 1;
//     let min = A > B ? B : A;
//     let ekub:number = i;
//     while (i <= min) {
//         //
//         i++;
//         if(A % i === 0 && B % i === 0) {
//             ekub = i;
//         }
//     }
//     return ekub;
// }
//
// let A = 10;
// let B = 10;
// console.log(EKUB(A, B));

// ==================== FunSimple 47 ====================
// function Frac1(a: number, b: number):string {
//     let ekub = EKUB(a, b);
//     a = a / ekub;
//     b = b / ekub;
//     return `${a} / ${b}`;
// }
//
// console.log(Frac1(15, 12));

// ==================== FunSimple 48 ====================
// function EKUK(a:number, b:number):number {
//     //
//     let ekub = EKUB(a, b);
//     a = a / ekub;
//     b = b / ekub;
//     let ekuk = a * b * ekub;
//     return ekuk;
// }
//
// console.log(EKUK(15, 12));

// ==================== FunSimple 49 ====================
// function EKUB3(A:number, B:number, C:number):number {
//     //
//     let ekubAB = EKUB(A, B);
//     let ekubAC = EKUB(A, C);
//     let ekubBC = EKUB(B, C);
//
//     let mainEkub = Math.min(ekubAB, ekubAC, ekubBC);
//     console.log(mainEkub);
// }
//
// EKUB3(15, 12, 3);

// ==================== FunSimple 50 ====================
// function TimeToHMS (time:number):string {
//     //
// let hour: string | number = Math.floor(time / 3600);
// let min: string | number = Math.floor(time % 3600 / 60);
// let sec:string | number = time % 60;
//
//     sec = sec > 9 ? sec : '0' + sec;
//     min = min > 9 ? min : '0' + min;
//     hour = hour > 9 ? hour : '0' + hour;
//
//     return hour + ':' + min + ':' + sec;
// }
//
// console.log(TimeToHMS(800));

// ==================== FunSimple 51 ====================
// function IncTime (H, M, S, T) {
//     //
//     let seconds = 3600 * H + M * 60 + S + T;
//     let hour: string | number = Math.floor(seconds / 3600);
//     let min: string | number = Math.floor(seconds % 3600 / 60);
//     let sec:string | number = seconds % 60;
//
//     sec = sec > 9 ? sec : '0' + sec;
//     min = min > 9 ? min : '0' + min;
//     hour = hour > 9 ? hour : '0' + hour;
//     return hour + ':' + min + ':' + sec;
// }
//
// console.log(IncTime(3, 20, 15, 45));

// ==================== FunSimple 52 ====================
// function IsLeapYear(Y: number): boolean {
// //
//     let isKabisaYear = (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
//     return isKabisaYear;
// }

//
// console.log(IsLeapYear(1600));

// ==================== FunSimple 53 ====================
// function MonthDays(M: number, Y: number): number {
//     //
//     let isCabisa = IsLeapYear(Y);
//     switch (M) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             return 31;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             return 30;
//         case 2:
//             return isCabisa ? 29 : 28;
//     }
// }

// MonthDays(2, 1200);

// ==================== FunSimple 54 ====================
// function PrevDate(D, M, Y) {
// //
//     if(D === 1) {
//         return MonthDays(M === 1 ? 12 : M - 1, Y);
//     } else {
//         return D - 1;
//     }
// }

// console.log(PrevDate(1, 3, 2000));

// ==================== FunSimple 55 ====================
// function NextDate(D, M, Y) {
// //
//     let days = MonthDays(M, Y);
//     if(D < days) return D + 1;
//     else return 1;
// }
//
// console.log(NextDate(28, 2, 2000));

// ==================== FunSimple 56 ====================
// function Leng(x1, y1, x2, y2) {
//     //
//     return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
// }
//
// console.log(Leng(5, 3, 9, 6));

// ==================== FunSimple 57 ====================
// function Perim(x1, y1, x2, y2, x3, y3) {
//     let ab = Leng(x1, y1, x2, y2);
//     let ac = Leng(x1, y1, x3, y3);
//     let bc = Leng(x2, y2, x3, y3);
//     return ab + ac + bc;
// }

// ==================== FunSimple 58 ====================
// function Area(x1, y1, x2, y2, x3, y3) {
//     //
//     let ab = Leng(x1, y1, x2, y2);
//     let ac = Leng(x1, y1, x3, y3);
//     let bc = Leng(x2, y2, x3, y3);
//     let p = Perim(x1, y1, x2, y2, x3, y3) / 2;
//     return Math.sqrt(p * (p - ab) * (p - ac) * (p - bc));
// }

// ==================== FunSimple 59 ====================

// ==================== FunSimple 60 ====================
