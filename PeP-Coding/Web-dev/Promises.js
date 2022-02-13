//better comared to callbacks
// inbuilt in js 
// works like a token

let fs = require("fs");
console.log("before");
// fs.readFile("f1.txt", function(err, data){                      //async code
//     console.log(data);
// });

let promise = fs.promises.readFile("f1.txt");        //this wont read a file, but will give  promise that itll read the file in future
console.log(promise);
//fulfilled
promise.then(function(data){
    console.log("" + data);  //.then functions works when the token recieves the value weather err or the data
})
//rejected
promise.catch(function(err){
    console.log(err);  //.catch is used to cath the error if for some reason promise is not able to read the file
})
console.log("after");

//promise is a ebject of js, given by functions of js. it is pending initally. it is fulfilled either with fail or pass.