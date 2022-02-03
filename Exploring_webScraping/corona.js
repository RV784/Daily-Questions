// const { html } = require('cheerio/lib/api/manipulation');

//CHALK MODULE NOT WORKING
const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");


console.log("before")
//feature of requesting is given by requesting module
request('https://www.worldometers.info/coronavirus/', cb);

console.log("after");


function cb(error, response, html){
    if(error){
        console.error('error:', error); // Print the error if one occurred
    }else {
        handlehtml(html);
        // console.log('body:', body); // Print the HTML for the Google homepage.
    }
}

function handlehtml(html){
   let selTool =  cheerio.load(html);
   let h1s = selTool("h1");
//    console.log(h1s.length);

   let ContentArr = selTool("#maincounter-wrap span");

//    wrap the elements again is selTool...why ?
//    for(let i = 0 ; i < ContentArr.length ; i++){
//        let data = selTool(ContentArr[i]).text();
//        console.log(data);
//    }
     let totalCases = selTool(ContentArr[0]).text();
     let deaths = selTool(ContentArr[1]).text();
     let recovered = selTool(ContentArr[2]).text();
     console.log(chalk.gray("totalcases "+ totalCases));
     console.log(chalk.red("deaths " + deaths));
     console.log(chalk.green("recovered" + recovered));


}