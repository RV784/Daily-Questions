// //2015 es6
// //code runs in two steps, first memory allocation...called hoisting.
// console.log(varName);
// //declare
// var varName;
// //assign
// varName = 10;
// //reAssign
// varName = 20;

// //you can also reDeclare too
// var varName;
// console.log(varName);

// function fn(){
//     console.log(a);
//     var a = 10;
//     console.log("L18 ", a);
//     if(a == 10){
//         var a = 15; //same a as above because it is directly under the same function.
//         console.log("L21 ", a);
//     }
//     console.log( "L23 ", a);
// }
// fn();

var a = 10;
console.log("L28 ", a);
function fn(){
    console.log("L30 ", a);
    var a = 25;
    a++;
    console.log("L33", a);

    if(a == 26){
        var a = 36;
        a++;
        console.log("L38 ", a);
    }

    console.log("L41 ", a);
}
fn();
console.log("L44 ", a);