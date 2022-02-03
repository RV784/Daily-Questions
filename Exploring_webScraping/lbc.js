const request = require('request');
const cheerio = require('cheerio');
const { exitCode } = require('process');
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
request(url, cb);
function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        extracHTML(html);
    }
}

function extracHTML(html){
    let $ = cheerio.load(html);
    let elemeArr = $(".d-flex.match-comment-padder.align-items-center .match-comment-long-text")
    let text = $(elemeArr[0]).text();
    let htmldata = $(elemeArr[0]).html();
    console.log("text data, " + text + " html data = " + htmldata);

    
}