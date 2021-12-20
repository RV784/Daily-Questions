let arr = [10, 20, [30, [50, [70, 50, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110];
let res0 = arr.flat(0);
let res1 = arr.flat(1);
let res2 = arr.flat(2);
let res3 = arr.flat(3);
console.log(res0);
console.log(res1);
console.log(res2);
console.log(res3);



//[10, 20, [30, [50, [70, 50, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110]