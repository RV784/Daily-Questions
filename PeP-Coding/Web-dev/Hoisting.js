// console.log(global);
console.log(this);

// console.log(a);  //before even declaring, we get undefined value for a. before running a code, memory was allocated for var a
// var a;
// console.log(a);
// a = 10;
// console.log(a);

//functions statement
// fn();
// function fn(){
//     console.log("I was called before my declaration");
// }

//Questions
// execution context is formed
// function real(){
//     console.log("Im real")
// }
// real();
// function real(){
//     console.log("I am real not you")
// }
// function real(){
//     console.log("You both fake, Im real")
// }

// console.log(fnContainer);
// var fnContainer = function(){
//     console.log("hi");
// }
// fnContainer();

//here before execution, it'll try allocation memory in heap, and one by one it'll point to the final real function


// There is no MAIN in JS
//code runs in execution context
// execution context is kind of a wrapper. JS provides you necessary tools in this context.
// First it provides a Global Object!, Similar to that in browser we get a Window Object
// we also get a this variable. in NodeJS, it is empty.
//but when seen in browser, this object is not empty..it is equal to window obj by default


// Anything not inside a functions is global area. wrapper for this is Global execution context.
// Therefore for Node - global Object, this Obj
// for windows        - window obj, This obj (By default equal to window obj)

// creation phase - before even running a code.
// ex - for variables, memory is alocated before the code is run for variables. This is called HOISTING.
// for functions statements, memeory is allocated in advanced before running the code in heap  and reference in stack