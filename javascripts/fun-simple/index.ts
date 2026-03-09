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
function Minmax (X: number, Y: number): void {
    //
    let c: number = X;
    if (X > Y) {
        X = Y;
        Y = c;
    }
    console.log('X = ' + X, 'Y = ' + Y);
}
let a: number = 10, b: number = 11, c: number = 5, d: number = 19;
Minmax(a, b);
Minmax(c, d);
Minmax(a, c);
Minmax(b, d);

// ==================== FunSimple 12 ====================
// ==================== FunSimple 13 ====================
// ==================== FunSimple 14 ====================
// ==================== FunSimple 15 ====================
// ==================== FunSimple 16 ====================
// ==================== FunSimple 17 ====================
// ==================== FunSimple 18 ====================
// ==================== FunSimple 19 ====================
// ==================== FunSimple 20 ====================
// ==================== FunSimple 21 ====================
// ==================== FunSimple 22 ====================
// ==================== FunSimple 23 ====================
