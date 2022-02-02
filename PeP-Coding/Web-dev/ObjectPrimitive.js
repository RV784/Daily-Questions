// node ObjectPrimitive.js
// objects
// key : value pairs  - key can be string or number
// let obj = {
//     name: "Rajat",
//     lastName: "verma", 
//     sayHi: function(){
//          console.log("Rajat Say's hi");
//     }
// }
// // console.log(obj);
// obj.sayHi();
// //loop
// for(let key in obj){
//     console.log(key, " ", obj[key]);
// }

//Arrays
// they are objects deep down. thats why even if you declare const arr, methods like slics and split work
// let arr = [1,2,3,4,5];
// arr.myprop = "hellp";   //arrays are basically objects

// arr.Print = function(){
//     console.log("hello from array");
// }
// arr[95] = 100;
// // for(let key in arr){
// //     console.log(key, " ", arr[key]);
// // }
// console.log(arr.length);


// //functions
// //they also behave like objects with keyValue pair with one extra feature ie code property than can be executed when you call/Execute a function.
// function fn(){
//     console.log("hello from fn");
// }

// fn.prop = "property of function";
// fn.myFn = function fn(){
//     console.log("Im a Methodfn inside function fn");
// }
// console.log(fn);
// fn();
// fn.myFn();


// EveryThing is object -> Dates, errors, modules. 
// 6 types of primitive(not object) - Number, String, boolean, undefined, null, Symbol
// either you are primitive, or you become an Object. end of story