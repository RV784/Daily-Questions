//const url = "https://www.espncricinfo.com/series/ipl-2021-1249214/mumbai-indians-vs-royal-challengers-bangalore-1st-match-1254058/full-scorecard";
//venue date opponent result runs balls fours sixes sr
const request = require("request");
const cheerio = require("cheerio");
function processScoreCard(url){
    request(url, cb);
}

function cb(err, response, html){
    if(err){
        console.log(err);
        return;
    }else{
        // console.log(html);
        extractMatchDetails(html);
    }
}

function extractMatchDetails(html){
    //venue date opponent result runs balls fours sixes sr
    
    // ipl
    //    team
    //       player
    //          runs balls fours sixes s.rate opponent venue date
    //for both teams in match, venue result date will stay same

    //.header-info .description    - venue/date
    //.event .status-text          - result
    let $ = cheerio.load(html);
    let descElem = $(".header-info .description");
    let result = $(".event .status-text");
    
    let stringArr = descElem.text().split(",");
    let venue = stringArr[1].trim();
    let date = stringArr[2].trim();
    result = result.text();

    let innings = $(".card.content-block.match-scorecard-table .Collapsible");
    // let htmlString = "";
    for(let i = 0 ; i < innings.length ; i++){
        // htmlString = $(innings[i]).html();
        // team
        let teamName = $(innings[i]).find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim();
        let opponentIndex = i == 0 ? 1: 0;
        let opponentName = $(innings[opponentIndex]).find("h5").text();
        opponentName = opponentName.split("INNINGS")[0].trim();
        let cInnings = $(innings[i]);
        console.log(`${venue} | ${date} | ${teamName} | ${opponentName} | ${result}`);
        
        let allRows = cInnings.find(".table.batsman tbody tr");
        for(let j = 0 ; j < allRows.length ; j++){
            let allCols = $(allRows[j]).find("td");
            let isWorthy = $(allCols[0]).hasClass("batsman-cell");
            if(isWorthy == true){
                // console.log(allCols.text());
                //         runs balls fours sixes s.rate opponent
                let playerName = $(allCols[0]).text().trim();
                let runs = $(allCols[2]).text().trim();
                let balls = $(allCols[3]).text().trim();
                let fours = $(allCols[5]).text().trim();
                let sixes = $(allCols[6]).text().trim();
                let sr = $(allCols[7]).text().trim();
                console.log(`${playerName} | ${runs} | ${balls} | ${fours} | ${sixes} | ${sr}`);
            }
        }
        //     player
        //         runs balls fours sixes s.rate opponent


        
    }
    // console.log(htmlString);
}

module.exports = {
    ps: processScoreCard
}