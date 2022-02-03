const fs = require("fs");
// console.log("before");
// let data = fs.readFileSync("f1.txt");
// console.log("" + data);
// console.log("after");
// console.log("meanwhile ");
//above method too slow

console.log("before");
fs.readFile("f1.txt", cb); //async function by nodeJs, It will read the file while the program below it still carries on and will do what cb says after the below code is done executed
function cb(err, data){
    if(err){
        console.log(err)
    }else{
        console.log("data" + data);
    }
}
console.log("after");
console.log("meanwhile ");