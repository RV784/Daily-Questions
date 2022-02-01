//for let, in a block memory is allocated seperately. see below code for more explanation. The block will get new space for its fruit variable
let fruits = "apple";
console.log(fruits);
{
   // console.log(fruits); //TDZ 
    let fruits;
    console.log(fruits);
    fruits = "orange";
    console.log(fruits);
}
console.log(fruits);

// if a block has no variable of its own and its not a TDZ, it'll take the variable from above block

// shadowing works in these combinations

// var   const   let   var
// let   const   let   var

// shadowing does not work in

// let    const
// var    var


// KEYWORD      SCOPE     REASSIGN    REDECLARE   TDZ
 
//   var        funct       YES         YES       NO

//   let        block       YES         NO        YES

//   const      block       NO          NO        YES