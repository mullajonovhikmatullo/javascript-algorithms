// ============================== Integer 1 ==============================
// let L = 101;
// let lInMeter = L / 100;
// lInMeter = Math.floor(lInMeter);
// console.log(lInMeter);

// ============================== Integer 2 ==============================
// let M = 1009;
// let mInTonna = Math.floor(M / 1000);
// console.log(mInTonna);

// ============================== Integer 3 ==============================
// let bayt = 2056;
// let baytToKb = Math.round(bayt / 1024);
// console.log(baytToKb);

// ============================== Integer 4 ==============================
// let A = 21;
// let B = 8;
//
// console.log(Math.floor(A / B));

// ============================== Integer 5 ==============================
// let A = 21;
// let B = 8;
//
// let qoldiq = A % B;
// console.log(qoldiq);

// ============================== Integer 6 ==============================
// let son = 25;
//
// let tenth = Math.floor(son / 10);
// let oneth = son % 10;
//
// console.log(tenth, oneth);

// ============================== Integer 7 ==============================
// let son = 25;
//
// let tenth = Math.floor(son / 10);
// let oneth = son % 10;
//
// console.log(tenth + oneth);

// ============================== Integer 8 ==============================
// let son = 25;
//
// let tenth = Math.floor(son / 10);
// let oneth = son % 10;
//
// console.log(tenth + oneth * 10);

// ============================== Integer 9 ==============================
// let son = 123;
// console.log(Math.trunc(son / 100));

// ============================== Integer 10 ==============================
// let son = 123;
//
// let oneth = son % 10;
// let tenth = Math.floor(son / 10) % 10;
//
// console.log(oneth, tenth);

// ============================== Integer 11 ==============================
// let son = 123;
// let sum = son % 10 + Math.floor(son / 10) % 10 + Math.floor(son / 100);
// console.log(sum);

// ============================== Integer 12 ==============================
// let son = 123;
// let sum = son % 10 * 100 + Math.floor(son / 10) % 10 * 10 + Math.floor(son / 100);
// console.log(sum);

// ============================== Integer 13 ==============================
// let son = 578;
// let sum = son % 10 * 10 + Math.floor(son / 10) % 10 * 100 + Math.floor(son / 100);
// console.log(sum);

// ============================== Integer 14 ==============================
// let son = 123;
// let sum = son % 10 * 100 + Math.floor(son / 10) % 10 + Math.floor(son / 100) * 10;
// console.log(sum);

// ============================== Integer 15 ==============================
// let son = 123;
// let sum = son % 10 + Math.floor(son / 10) % 10 * 100 + Math.floor(son / 100) * 10;
// console.log(sum);

// ============================== Integer 16 ==============================
// let son = 123;
// let sum = son % 10 * 10 + Math.floor(son / 10) % 10 + Math.floor(son / 100) * 100;
// console.log(sum);

// ============================== Integer 17 ==============================
// let son = 1928231;
// console.log(Math.trunc((son / 100) % 10))

// ============================== Integer 18 ==============================
// let son = 1928231;
// console.log(Math.trunc((son / 1_000) % 10))

// ============================== Integer 19 ==============================
// let N = 785;
// console.log(Math.trunc(N / 60) + ' minut o\'tdi.');

// ============================== Integer 20 ==============================
// let N = 7185;
// console.log(Math.trunc(N / 3600) + ' soat o\'tdi.');

// ============================== Integer 21 ==============================
// let N = 785;
//
// let minute = Math.trunc(N / 60);
// let secund = N % 60;
//
// console.log(minute + ' minute ' + secund + ' secund');

// ============================== Integer 22 ==============================
// let N = 7850;
//
// let hour = Math.trunc(N / 3600);
// let secund = N % 3600;
//
// console.log(hour + ' hour ' + secund + ' secund');

// ============================== Integer 23 ==============================
// let N = 7853;
//
// let hour = Math.trunc(N / 3600);
// let minute = Math.trunc(N % 3600 / 60);
// let secund = N % 60;
//
// console.log(hour + ' hour ' + minute + ' minute ' + secund + ' secund');

// ============================== Integer 24 ==============================
// let K = 12;
// let Q = K % 7;
//
// switch (Q) {
//     case 0: console.log('Yakshanba'); break;
//     case 1: console.log('Dushanba'); break;
//     case 2: console.log('Seshanba'); break;
//     case 3: console.log('Chorshanba'); break;
//     case 4: console.log('Payshanba'); break;
//     case 5: console.log('Juma'); break;
//     case 6: console.log('Shanba'); break;
//     default: break;
// }

// ============================== Integer 25 ==============================
// let K = 12;
// let Q = K % 7;
//
// switch (Q) {
//     case 0: console.log('Chorshanba'); break;
//     case 1: console.log('Payshanba'); break;
//     case 2: console.log('Juma'); break;
//     case 3: console.log('Shanba'); break;
//     case 4: console.log('Yakshanba'); break;
//     case 5: console.log('Dushanba'); break;
//     case 6: console.log('Seshanba'); break;
//     default: break;
// }

// ============================== Integer 26 ==============================
// let K = 12;
// let Q = K % 7;
//
// switch (Q) {
//     case 0: console.log('Dushanba'); break;
//     case 1: console.log('Seshanba'); break;
//     case 2: console.log('Chorshanba'); break;
//     case 3: console.log('Payshanba'); break;
//     case 4: console.log('Juma'); break;
//     case 5: console.log('Shanba'); break;
//     case 6: console.log('Yakshanba'); break;
//     default: break;
// }

// ============================== Integer 27 ==============================
// let K = 12;
// let Q = K % 7;
//
// switch (Q) {
//     case 0: console.log('Shanba'); break;
//     case 1: console.log('Yakshanba'); break;
//     case 2: console.log('Dushanba'); break;
//     case 3: console.log('Seshanba'); break;
//     case 4: console.log('Chorshanba'); break;
//     case 5: console.log('Payshanba'); break;
//     case 6: console.log('Juma'); break;
//     default: break;
// }

// ============================== Integer 28 ==============================
// let K = 12;
// let Q = K % 7;
// let N = 3;
//
// switch (Q) {
//     case 0: console.log('Chorshanba'); break;
//     case 1: console.log('Payshanba'); break;
//     case 2: console.log('Juma'); break;
//     case 3: console.log('Shanba'); break;
//     case 4: console.log('Yakshanba'); break;
//     case 5: console.log('Dushanba'); break;
//     case 6: console.log('Seshanba'); break;
//     default: break;
// }

// ============================== Integer 29 ==============================
// let A = 8;
// let B = 8;
// let C = 3;
//
// let dona = Math.floor(A / C) + Math.floor(B / C);
// let QoldiqYuza = A * B - C * C * dona;
//
// console.log(dona, QoldiqYuza)

// ============================== Integer 30 ==============================
// let year = 1910;
//
// let butun = Math.floor(year / 100);
// let qoldiq = year % 100;
//
// let result = qoldiq > 0 ? butun + 1 : butun;
//
// console.log(result + ' - yuz yillik');

