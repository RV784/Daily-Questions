let fs = require("fs");
// files -> create, delete, read and update

//read
//let buffer = fs.readFileSync("abc.js"); //gives file content in binary buffer
//console.log("In text form " + buffer);  //if you concatenate buffer into a string, it'll convert into utf-8 text form


//create
//fs.openSync("abc.txt", "w"); //makes a file abc.txt, in wrting mode ("w")
//fs.writeFileSync("abc.txt", "I'm really excited today!"); //it'll REPLACE the string in abc.txt
//fs.appendFileSync("abc.txt", " Hi, this string will be added in the file");  //This will create the file, and append, NOT REPLACE, append in the same file

//fs.mkdirSync("MyDirectory"); //makes a directory
//fs.writeFileSync("MyDirectory/MyNewFile.txt", "Content Jo MyNewFile mai daalna hai"); //specify the path, new file, and what content ou wanna addd there
let content = fs.readdirSync("MyDirectory"); //gives file names in the folder you mentioned "MyDirctory"
console.log(content);

//for(let i = 0 ; i < content.length ; i++){
   // fs.unlinkSync("MyDirectory/" + content[i]); //this will remove all files in MyDirectory folder

//}

//fs.rmdirSync("MyDirectory"); //this will delete MyDirectory folder


//watch lecture from 25:00 Practical Introduction to Node.js
