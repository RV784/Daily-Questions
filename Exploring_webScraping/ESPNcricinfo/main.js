const url = "https://www.espncricinfo.com/series/ipl-2021-1249214";
//venue date opponent result runs balls fours sixes sr
const request = require("request");
const cheerio = require("cheerio");
const AllMatchObj = require("./Allmatch");
request(url, cb);
function cb(err, response, html){
    if(err){
        console.log(err);
        return;
    }else{
        // console.log(html);
        extractLink(html);
    }
}

function extractLink(html){
    let $ = cheerio.load(html);
    let anchorElement = $("a[data-hover='View All Results']");
    let link = anchorElement.attr("href");
    // console.log(link);
    let fullLink = "https://www.espncricinfo.com" + link;
    // console.log(fullLink);

    AllMatchObj.gAlmatches(fullLink);
}