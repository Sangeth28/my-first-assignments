import{chromium,test,webkit} from "@playwright/test";
test('Test to launch a edge browser',async()=> {
    //Launch Edge browser
    const browser1 = await chromium.launch({channel:"msedge",headless:false});
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();
    await page1.goto(`https://www.redbus.in/`);
    const url1 = page1.url();
    const title1 = page1.title();
    console.log(url1);
    console.log(title1);
    //Launch safari browser
    const browser2 = await webkit.launch({channel:"webkit",headless:false});
    const context2 = await browser2.newContext();
    const page2 = await context2.newPage();
    await page2.goto(`https://www.flipkart.com/`);
    const url2 = page2.url();
    const title2 = page2.title();
    console.log(url2);
    console.log(title2);
    
})