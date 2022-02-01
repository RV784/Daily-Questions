
//TDZ
    //  a zone before declaration of a let variable
    //code will run in TDZ even if there is an redeclared error in js file or not
    //cannot access variable here.
//TDZ ends here

// //let
// //declare
// let varName;
// console.log(varName);
// //assign
// varName = 10;
// // let varName; //will throw an error coz you cannot re declare a let variable more than once
// //above error is noted during hoisting, that is before even running the code.




const a = 10;
// No reassign 
// No redeclare
// add value when declaring

// Let and Const
// - Temporal dead zone
// - {Block} Scope 
// - variable shadowing (legal and illegal)
// - var/let/const
 
// var - functional scope, redeclare, adds to window obj in browser, therefor alternative let/const