
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require('request');
const cheerio = require('cheerio');
const { exitCode } = require('process');
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
    let teamsArr = $(".match-header-container .match-header .team");
    let gTeamName;
    for(let i = 0 ; i < teamsArr.length ; i++){
        let hasClass = $(teamsArr[i]).hasClass("team-gray");
        if(hasClass == false){
            let teamNameElement = $(teamsArr[i]).find(".name");
            gTeamName = teamNameElement.text();
            gTeamName = gTeamName.trim();
            console.log(gTeamName);
        }
    }

    let inningdArr = $(".card.content-block.match-scorecard-table>.Collapsible");
    let htmlstr = "";
    for(let i = 0 ; i < inningdArr.length ; i++){
        // let cHTML = $(inningdArr[i]).html();
        // htmlstr += cHTML;

        //team names
        let teamNameElem = $(inningdArr[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        // console.log(teamName);
        if(gTeamName == teamName){
            // console.log(teamName); 
            
            let tableElem = $(inningdArr[i]).find(".table.bowler");
            let allBowlers = $(tableElem).find("tr");
            for(let j = 0 ; j < allBowlers.length ; j++){
                let allColumns = $(allBowlers[j]).find("td");
                let playaName = $(allColumns[0]).text();
                let wickets = $(allColumns[4]).text();
                console.log("playername -> "  + playaName + " wickets taken " + wickets);
                console.log(" ");
            }
        }
        //team table
    }
    console.log(htmlstr);
}