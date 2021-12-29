let cp = require("child_process");

cp.execSync("calc");  //"code" to open vs-code
cp.execSync("start chrome Apple.com"); //open anywebsite in chrome

//just see how to open any app in cmd, and it'll work with childProcess

let output = cp.execSync("node abc.js");
console.log(" output is " + output);


