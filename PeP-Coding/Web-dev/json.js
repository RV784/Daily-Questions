// // JSON is a data storage format. it is also a format to transmit the data
// // it is a key value pair format, can also be array of object holding key value pairs. can hold only data no functions

// // you can use javascript file to tinker around with json files

// let fs = require("fs");
// let buffer = fs.readFileSync("./example.json");
// console.log(buffer);
// //array form data;
// let data = JSON.parse(buffer)  // json object given by js, uses a parse a function to convert a buffer data into a redable text form
// console.log(data);

// data.push({
//     "name": "Nidhi",
//     "Last Name": "Samal",
//     "isFunny": true,
//     "friends": [
//         "Jindal",
//         "Mohak",
//         "Ramit"
//     ],
//     "age": 22,
//     "address": {
//         "city": "Delhi",
//         "landMark": "Chatrasal Stadium"
//     }
// });   //now that we pushed a new obj,
// let stringData = JSON.stringify(data);    //we need to convert it to string format so that fs.writefilySync can append it to original file
// fs.writeFileSync("example.json", stringData);




// the above method to write is json file is correct but we have a better one below
let data = require("./example.json");
let fs = require("fs");
data.push({
    "name": "Nidhi",
    "Last Name": "Samal",
    "isFunny": true,
    "friends": [
        "Jindal",
        "Mohak",
        "Ramit"
    ],
    "age": 22,
    "address": {
        "city": "Delhi",
        "landMark": "Chatrasal Stadium"
    }
});   //now that we pushed a new obj,
let stringData = JSON.stringify(data);    //we need to convert it to string format so that fs.writefilySync can append it to original file
fs.writeFileSync("example.json", stringData);