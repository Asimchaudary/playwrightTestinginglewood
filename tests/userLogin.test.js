
const {test,expect} = require('@playwright/test');
const { getConfig} = require('./env.js');
const { url} = require('./env.js');


// require('dotenv').config(); 

// const a = process.env.url;
test.describe('User Login Scenarios',()=>{
    var browser;
test.beforeEach(async ({page}) => {
   await page.goto(url);
  });
test.only('Testing user login with correct credentials' , async({page})=>
{
    // const context = await browser.newContext();
    // const page= await context.newPage(); 
    const closepopup=page.locator('flex items-center justify-right gap-x-2 text-base') && page.locator('.p-2 > .flex');
    const profileIcon=page.locator("//body/div[@id='__next']/div[@class='hidden md:block']/nav[@id='NavBar']/div[2]/ul[2]/li[2]/span[1]//*[name()='svg']");
    const locator = page.locator('html');

    const popUp=page.locator("block sm:flex");
    const popUpCloseIcon=page.locator("//span[@class='flex items-center justify-right gap-x-2 text-base']//*[name()='svg']");
    const continueButton=page.locator('//button[@type="submit"]');
    const EmailField=page.locator('#emailAddress')
    const passwordField=page.locator('//input[@type="password"]');
    const textOnLoginPage=page.locator(".mt-10.mb-5.text-lg.font-semibold.font-Aveniresemi");
    
    // await page.goto("https://inglewood.staging.visualr.dev");
    await page.locator();
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/');
    const textsOnLoginPageForAssertion=["//div[contains(@class,'container w-full px-4 mx-auto xl:px-12 2xl:w-[1122px]')]//h1[@class='text-4xl text-black mb-10 pb-2.5 border-b-[1px] border-b-gray-BorderGrey font-bold lg:text-5xl hidden md:block'][normalize-space()='My Account']"
    ,"body > div:nth-child(2) > section:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(1)"]
    // const myElement = await page.(popup);
    await closepopup.waitFor();
    await closepopup.click();
    await page.waitForLoadState();
    await profileIcon.click();
await EmailField.click();
await EmailField.type("asim+11@visualr.com.au");
await continueButton.click();
const text=await continueButton.textContent();
console.log(text);
await page.waitForLoadState();
await passwordField.type("asimch12");
const textToVerify = await textOnLoginPage.textContent();
console.log("Text found is"+textToVerify);
expect(textToVerify).toContain('Login or Sign up to continue');
await continueButton.click();
const myAccountText=await page.locator(textsOnLoginPageForAssertion[0]).textContent();
console.log(myAccountText);
expect(myAccountText).toContain('My Account');
await page.close();


}),
test('Testing user login with invalid email' , async({page})=>
{
    const emailValidation=page.locator("//span[@class='ml-1']");
    const closepopup=page.locator('flex items-center justify-right gap-x-2 text-base') && page.locator('.p-2 > .flex');
    const profileIcon=page.locator("//body/div[@id='__next']/div[@class='hidden md:block']/nav[@id='NavBar']/div[2]/ul[2]/li[2]/span[1]//*[name()='svg']");
    const locator = page.locator('html');

    const popUp=page.locator("block sm:flex");
    const popUpCloseIcon=page.locator("//span[@class='flex items-center justify-right gap-x-2 text-base']//*[name()='svg']");
    const continueButton=page.locator('//button[@type="submit"]');
    const EmailField=page.locator('#emailAddress')
    const passwordField=page.locator('//input[@type="password"]');
    const textOnLoginPage=page.locator(".mt-10.mb-5.text-lg.font-semibold.font-Aveniresemi");

    await page.locator();
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/');
    const textsOnLoginPageForAssertion=["//div[contains(@class,'container w-full px-4 mx-auto xl:px-12 2xl:w-[1122px]')]//h1[@class='text-4xl text-black mb-10 pb-2.5 border-b-[1px] border-b-gray-BorderGrey font-bold lg:text-5xl hidden md:block'][normalize-space()='My Account']"
    ,"body > div:nth-child(2) > section:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(1)"]
    await closepopup.waitFor();
    await closepopup.click();
    await page.waitForLoadState();
    await profileIcon.click();
await EmailField.click();
await EmailField.type("asim+11@");
await continueButton.click();
const emailValidationText=await emailValidation.textContent();
console.log("Text recieved on email validation is: "+emailValidationText);
expect(emailValidationText).toContain('Invalid email address');
const text=await continueButton.textContent();
console.log("Text on continue button is "+text);
await page.waitForLoadState();
await page.close();
}),
test('Testing user login with invalid password' , async({page})=>
{
    const emailValidation=page.locator("//span[@class='ml-1']");
    const closepopup=page.locator('flex items-center justify-right gap-x-2 text-base') && page.locator('.p-2 > .flex');
    const profileIcon=page.locator("//body/div[@id='__next']/div[@class='hidden md:block']/nav[@id='NavBar']/div[2]/ul[2]/li[2]/span[1]//*[name()='svg']");
    const locator = page.locator('html');
    const popUp=page.locator("block sm:flex");
    const popUpCloseIcon=page.locator("//span[@class='flex items-center justify-right gap-x-2 text-base']//*[name()='svg']");
    const continueButton=page.locator('//button[@type="submit"]');
    const EmailField=page.locator('#emailAddress')
    const passwordField=page.locator('//input[@type="password"]');
    const passwordValidation=page.locator("//span[@class='ml-1']");
    const textOnLoginPage=page.locator(".mt-10.mb-5.text-lg.font-semibold.font-Aveniresemi");
    await page.locator();
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/');
    const textsOnLoginPageForAssertion=["//div[contains(@class,'container w-full px-4 mx-auto xl:px-12 2xl:w-[1122px]')]//h1[@class='text-4xl text-black mb-10 pb-2.5 border-b-[1px] border-b-gray-BorderGrey font-bold lg:text-5xl hidden md:block'][normalize-space()='My Account']"
    ,"body > div:nth-child(2) > section:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(1)"]
    await closepopup.waitFor();
    await closepopup.click();
    await page.waitForLoadState();
    await profileIcon.click();
await EmailField.click();
await EmailField.type("asim+11@visualr.com.au");
await continueButton.click();
await passwordField.type("1");
const passwordFieldText=await passwordValidation.textContent();
console.log("Text recieved on password validation is: "+passwordFieldText);
expect(passwordFieldText).toContain('Password must be 8 characters long');
const text=await continueButton.textContent();
console.log("Text on continue button is "+text);
await page.waitForLoadState();
await page.close();
}),
test('Testing user login with incorrect password' , async({page})=>
{
    const emailValidation=page.locator("//span[@class='ml-1']");
    const closepopup=page.locator('flex items-center justify-right gap-x-2 text-base') && page.locator('.p-2 > .flex');
    const profileIcon=page.locator("//body/div[@id='__next']/div[@class='hidden md:block']/nav[@id='NavBar']/div[2]/ul[2]/li[2]/span[1]//*[name()='svg']");
    const locator = page.locator('html');
    const popUp=page.locator("block sm:flex");
    const popUpCloseIcon=page.locator("//span[@class='flex items-center justify-right gap-x-2 text-base']//*[name()='svg']");
    const continueButton=page.locator('//button[@type="submit"]');
    const EmailField=page.locator('#emailAddress')
    const passwordField=page.locator('//input[@type="password"]');
    const passwordValidation=page.locator("//span[@class='ml-1']");
    const textOnLoginPage=page.locator(".mt-10.mb-5.text-lg.font-semibold.font-Aveniresemi");
    const alertForIncorrectPassword=page.locator("//div[contains(text(),'Password is incorrect')]");
    await page.locator();
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/');
    const textsOnLoginPageForAssertion=["//div[contains(@class,'container w-full px-4 mx-auto xl:px-12 2xl:w-[1122px]')]//h1[@class='text-4xl text-black mb-10 pb-2.5 border-b-[1px] border-b-gray-BorderGrey font-bold lg:text-5xl hidden md:block'][normalize-space()='My Account']"
    ,"body > div:nth-child(2) > section:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(1)"]
    await closepopup.waitFor();
    await closepopup.click();
    await page.waitForLoadState();
    await profileIcon.click();
await EmailField.click();
await EmailField.type("asim+11@visualr.com.au");
await continueButton.click();
await passwordField.type("12345678");
await continueButton.click();

const incorrectPasswordAlertText=await alertForIncorrectPassword.textContent();
console.log("Text recieved on incorrect password is: "+incorrectPasswordAlertText);
expect(incorrectPasswordAlertText).toContain('Password is incorrect');
await page.waitForLoadState();
await page.close();
});
});
