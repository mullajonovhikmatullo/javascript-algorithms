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
function IsSquare (K: number) {

}

// ==================== FunSimple 26 ====================


// ==================== FunSimple 27 ====================


// ==================== FunSimple 28 ====================


// ==================== FunSimple 29 ====================


// ==================== FunSimple 30 ====================
