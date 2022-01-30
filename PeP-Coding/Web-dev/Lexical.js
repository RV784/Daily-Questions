//function vs execution context, Scope, Lexical scope, scope chain

// var varName = 10;
// function fn(){
//     console.log(varName); //undefined. it is from the execution context of fn function.
//     var varName = 20;
//     console.log(varName);
// }
// fn();

// everycode runs in a execution context.
// Execution context is in a Stack (callStack).Execution
//  any function WHEN CALLED creates its own execution context in callStack over global execution context.
//  therefore for fn() there will be an executon context over global context with its own global and this obj 
//  and memory will be allocated seperately for its varibales.

var varName = 10;
// function fn(){
//     console.log(varName); 
//     var varName = 20;
//     function b(){
//         console.log(varName); // here there is no varName declaration in Execution context of function B, so 
//                               // it'll try searching the scope ABOVE its function declaration to find if varName exists or not and 
//                               // will keep going till global execution. if function b was declare out of fn, then we'll go above that 
//                               // for finding varriables. Shown below in example!
//     }
//     b();
//     console.log(varName);
// }
// fn();


function b(){
    console.log(varName);
}
function fn(){
    console.log(varName); 
    var varName = 20;
                              // here there is no varName declaration in Execution context of function B, so 
                              // it'll try searching the scope ABOVE its function declaration to find if varName exists or not and 
                              // will keep going till global execution. if function b was defined out of fn, then we'll go above that 
                              // for finding varriables. 
    b();
    console.log(varName);
}
fn();
//This is called Lexically seeing the scope above.