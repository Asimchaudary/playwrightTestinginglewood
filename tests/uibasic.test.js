import { INGTest } from '../tests/INGTest.test' ;
const i = new INGTest();

 i.a();

// process.env.PWDEBUG = 1;
const {test,expect} = require('@playwright/test');
test('Check homepage title for Inglewood' , async({browser})=>
{
 const context = await browser.newContext();
 const page= await context.newPage(); 
// await page.goto("https://inglewood.staging.visualr.dev/");
await page.goto("https://google.com");

console.log(await page.title());
// await expect(page).toHaveTitle(" Coffee Pods | Coffee Pods Online | Inglewood Coffee Roasters");
const element = await page.$('#my-element');
await page.waitForTimeout(5000);
if (element !== null && element.isVisible) {

// const isVisible = await element.isVisible();

console.log(`Is element visible?`);
}

else{console.log(`not visible`);
}
});

// test.only('Second test in Playwright' , async({browser})=>
// {
//  const context = await browser.newContext();
//  const page= await context.newPage(); 
// await page.goto("https://www.google.com");

// });