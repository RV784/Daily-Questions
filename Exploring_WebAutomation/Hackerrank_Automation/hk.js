const puppeteer = require('puppeteer');
const codeObj = require('./codes');
const loginObj = require('./login');
 


console.log("before");
const browserOpen = puppeteer.launch({headless : false, args : ["--start-maximized"], defaultViewport : null});
console.log(browserOpen); //promise

let page;

browserOpen.then(function(browserObj){
    const browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;
}).then(function(newtab){
    page = newtab;
    const hackerrankOpenPromise = newtab.goto(loginObj.login[0]);
    return hackerrankOpenPromise;
}).then(function(){
    const emailisEnteredPromise = page.type("input[id = 'input-1']", loginObj.login[1], {delay : 30});
    return emailisEnteredPromise;
}).then(function(){
    const passwordIsEnteredPromise = page.type("input[id = 'input-2']", loginObj.login[2], {delay : 30});
    return passwordIsEnteredPromise;
}).then(function(){
    // const loginButtonClickPromise = page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    // return loginButtonClickPromise;
    return waitAndClick(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled", page);
}).then(function(){
    let clickOnAlgoPromise = waitAndClick(".track-card a[data-attr2 = 'algorithms']", page);
    return clickOnAlgoPromise;
}).then(function(){
    let getToWarmUpPromise = waitAndClick('input[value="warmup"]' , page);
    return getToWarmUpPromise;
}).then(function(){
    const waitFor3seconds = page.waitFor(3000);
    return waitFor3seconds;
}).then(function(){
    //$ means queryslector, $$ means query selector all
    const allChallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', {delay : 30}); 
    return allChallengesPromise;
}).then(function(questionsArr){
    console.log(questionsArr.length + " questions");

    const questionWillBeSolvedPromise = questionsSolver(page, questionsArr[0], codeObj.answers[0]);
    return questionWillBeSolvedPromise;
})



function waitAndClick(selector, cpage){
    return new Promise(function(resolve, reject){
        let waitForModelpromise = cpage.waitForSelector(selector);
        waitForModelpromise.then(function(){
            const clickModel = cpage.click(selector);
            return clickModel;
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject();
        })
    })
}

function questionsSolver(page, question, answer ){
    return new Promise(function(resolve, reject){
        const letQuestionWillBeclicked = question.click();
        letQuestionWillBeclicked.then(function(){
            let EditorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs', page);
            return EditorInFocusPromise;
        }).then(function(){
            return waitAndClick('.checkbox-input', page)
        }).then(function(){
            return page.waitForSelector('textarea[id="input-1"]', page);
        }).then(function(){
            return page.type('textarea[id="input-1"]', answer, {delay : 20});
        }).then(function(){
            const ctrlisPressed = page.keyboard.down('Control');
            return ctrlisPressed;
        }).then(function(){
            const AisPressed = page.keyboard.press('A', {delay : 20});
            return AisPressed;
        }).then(function(){
            const XisPressed = page.keyboard.press('X', {delay : 10});
            return XisPressed;
        }).then(function(){
            const ctrlIsUnpressed = page.keyboard.up('Control');
            return ctrlIsUnpressed;
        }).then(function(){
            const mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs', page);
            return mainEditorInFocus;
        }).then(function(){
            const ctrlisPressed = page.keyboard.down('Control');
            return ctrlisPressed;
        }).then(function(){
            const AisPressed = page.keyboard.press('A', {delay : 20});
            return AisPressed;
        }).then(function(){
            const VisPressed = page.keyboard.press('V', {delay : 20});
            return VisPressed;
        }).then(function(){
            const ctrlIsUnpressed = page.keyboard.up('Control');
            return ctrlIsUnpressed;
        }).then(function(){
            waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled', page);
        })
    })
}


console.log("after");


//puppeteer + promises + asyn await