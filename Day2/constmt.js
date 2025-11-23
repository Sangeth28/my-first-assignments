function launchBrowser(browserName)
{
    if (browserName === 'chrome'){
        console.log('chrome');
    } else {
        console.log('Not chrome');
    }
}

function runTests(testType)
{
    switch(testType){
        case "smoke":
            console.log("smoke");
            break;
        case "sanity":
            console.log("snaity");
            break;
        case "regression":
            console.log("regression");
            break;
        default:
            console.log('Default smoke');
    }   

}
launchBrowser('chrome');
launchBrowser('firefox');

runTests('smoke');
runTests('regression');
runTests('performance');

 