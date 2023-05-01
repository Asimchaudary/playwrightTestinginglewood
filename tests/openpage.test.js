const openInglewoodStaging = require('./sharedMethods');

// (async () => {
//   const page = await goToPage('https://inglewood.staging.visualr.dev/account/login');
//   // Perform actions on the page
// })();


const {test,expect} = require('@playwright/test');

test('Testing user login with incorrect credentials' , async({browser})=>
{
    // const context = await browser.newContext();
    // const page= await context.newPage(); 

 await openInglewoodStaging('https://inglewood.staging.visualr.dev/account/login');
})