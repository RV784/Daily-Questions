// //type of functions
// //function statement
// //define
// // function sayHello(param){
// //     console.log("hello", param);
// // }
// // //invoke
// // sayHello();
// // sayHello([1,2,3,4]);

// //functions are first class citizens
// //functions are treated as variables
// //assignment is possible. 
// // let a = [1, 2, 3, 4, 5];
// // let b = a;

// //function expressions
// // let fnContainer = function (){
// //     console.log("I am expression");
// //     console.log("I am also anonymous");
// // }

// // fnContainer();

// // IIFE
// (function fn(){
//     console.log("I am IIFE");
//     console.log("I'll run on my own");
// })();

// //arrow functions - important for React
// // let fn = (num)=>{
// //     return num*num;
// // }
// // console.log(fn(5));

// //first class citizens
// // 1. assignment
// // 2. variabe can be passed as a parameter, EVEN A functions can be passed as a parameter in any funtion 
// // 3. callbacks.
// // 4. a functions can have  a return value a function

// function sayHello(param){
//     console.log("hello", param);
//     param();
// }

// function smaller(){
//     console.log("hello I'm smaller");
// }

// function outer(){
//     console.log("I'm outer returning inner");
//     return function inner(){ //can be anonymous too
//         console.log("This is a return inner function");
//     }
// }

// let rval = outer();
// rval();
// // sayHello(smaller);

console.log("varName", varName);
var varName;
console.log("varName", varName);
varName = "rajat";
console.log("varName", varName);
fn();
function fn(){
    console.log("Hello from fn");
}
fn();
fnContainer();
var fnContainer = function(){
    console.log("I'm fncontainer");
}
fnContainer();

