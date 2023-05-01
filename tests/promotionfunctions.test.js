const { Page } = require('playwright');
const {getConfig} = require('./env');
const emailField="//input[@id='MemberLoginForm_LoginForm_Email']";
const passwordField="//input[@id='MemberLoginForm_LoginForm_Password']";
const loginButton="#MemberLoginForm_LoginForm_action_doLogin";
const promosAndCoupons="//span[normalize-space()='Coupons And Promotions']"
const Promotions="//span[normalize-space()='Promotions']"
const checkbox = "//input[@name='isActive']";

//locators for inglewood side
const closepopup="flex items-center justify-right gap-x-2 text-base') && page.locator('.p-2 > .flex";
const firstproduct=".hidden > :nth-child(1) > .buttons-div";
const ClickGrind="#headlessui-listbox-button-5";
const ClickGrindOption="#headlessui-listbox-option-12";
const ClickAddToCart=".mt-5.text-center > .relative"
const ClickOnCart=".mt-auto > .relative";
const ClickOnCheckOut=".justify-start.w-full"
const EmailField="#emailAddress"
const ClickOnContinue="form > .items-center"
const PasswordField="#password"
const ClickOnContinueToShipping= ".mt-4"
const ClickOnContinueToPayment='button[type="submit"].tracking-wider.group.mt-4.relative.flex.justify-center.px-4.border.text-sm.hover\\:bg-black-700.focus\\:ring-2.focus\\:ring-offset-2.focus\\:ring-transparent.focus\\:border-black.transition-all.ease-linear.delay-150.bg-black.text-white.border-black.rounded-sm.w-full.py-2.font-extrabold.font-proxima.focus\\:outline-none.lg\\:text-base.md\\:py-3';
const ClickOnPayWithCard="input[type='radio'][id='idinput'][name='shippingMethod']"
const CardNumber='.payment-accordion > :nth-child(1) > .px-4'
const ClickOnWallet='input[type="checkbox"][name="shippingMethod"][id="idinput"]'
const PayButton='.mt-4'
let textForPromoField=''

async function navigateToElvanti(page) {
    console.log('Msg is '+getConfig);

    await page.goto("https://api.inglewood.staging.visualr.dev/Security/login?BackURL=%2Fadmin%2Felvanti-dashboard%2F");
}

async function loginElvanti(page, username, password) {
    // await page.fill(page.locator(emailField), username);
    await page.locator(emailField).fill(username)
    // page.locator(emailField).fill(username)
    await page.locator(passwordField).fill(password)
    await page.locator(loginButton).click();    
    await page.waitForLoadState();
    await page.locator(promosAndCoupons).click();
    await page.waitForLoadState();
    await page.locator(Promotions).click();
    await page.waitForLoadState();
    await page.goto("https://api.inglewood.staging.visualr.dev/admin/coupon-and-promo/promotions/1176/edit")
    const checkbox = await page.waitForSelector("//input[@name='isActive']");
    await page.waitForTimeout(3000); // wait for 3 second
    const cartMsg=page.locator("//textarea[@placeholder='Congratulations Notification']")
    
    textForPromoField= await cartMsg.textContent()
    // checkPromoOnInglewood(textForPromoField)
    console.log(textForPromoField)
    const isChecked = await checkbox.isChecked();
    console.log("Status is "+isChecked)
    await checkbox.setChecked(true); // set the checkbox to checked state
   
    if (isChecked) 
    {
     console.log('The promotion is already enabled.');
    } 
    else 
    {
    await checkbox.setChecked(true); // set the checkbox to checked state
    const isChecked = await checkbox.isChecked();
    console.log("Enabled status for this promotion is now "+isChecked)
    await page.locator("//span[normalize-space()='Save']").click()
    }

}
async function disablePromoOnElvanti(page, username, password) {
    // await page.fill(page.locator(emailField), username);
    await page.locator(emailField).fill(username)
    // page.locator(emailField).fill(username)
    await page.locator(passwordField).fill(password)
    await page.locator(loginButton).click();    
    await page.waitForLoadState();
    await page.locator(promosAndCoupons).click();
    await page.waitForLoadState();
    await page.locator(Promotions).click();
    await page.waitForLoadState();
    await page.goto("https://api.inglewood.staging.visualr.dev/admin/coupon-and-promo/promotions/1176/edit")
    const checkbox = await page.waitForSelector("//input[@name='isActive']");
    await page.waitForTimeout(3000); // wait for 3 second
    const cartMsg=page.locator("//textarea[@placeholder='Congratulations Notification']")
    
    textForPromoField= await cartMsg.textContent()
    // checkPromoOnInglewood(textForPromoField)
    console.log(textForPromoField)
    const isChecked = await checkbox.isChecked();
    console.log("Status is "+isChecked)
    await checkbox.setChecked(false); // set the checkbox to checked state
    console.log("Enabled status for this promotion is now "+isChecked)
}

async function openInglewood(page) {

    await page.goto('https://inglewood.staging.visualr.dev');
    await page.waitForLoadState();
    //Verifiying that we have been directed to homepage
}
async function userLogin(page,expect){

    const closepopup=page.locator('flex items-center justify-right gap-x-2 text-base') && page.locator('.p-2 > .flex');
    const profileIcon=page.locator("//body/div[@id='__next']/div[@class='hidden md:block']/nav[@id='NavBar']/div[2]/ul[2]/li[2]/span[1]//*[name()='svg']");
    const locator = page.locator('html');
    const popUp=page.locator("block sm:flex");
    const continueButton=page.locator('//button[@type="submit"]');
    const EmailField=page.locator('#emailAddress')
    const passwordField=page.locator('//input[@type="password"]');
    const ClickAddToCart=page.locator('.mt-5.text-center > .relative');
    const ClickOnCart=page.locator('.mt-auto > .relative');
    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/');
    await page.locator();
    await page.waitForLoadState();
    await closepopup.waitFor();
    await closepopup.click();
    await page.waitForLoadState();
    await profileIcon.click();
await EmailField.click();
await EmailField.type("asim+11@visualr.com.au");
await continueButton.click();
await page.waitForLoadState();
await passwordField.type("asimch12");
await continueButton.click();
//   await page.waitForLoadState('load')
//   await page.waitForSelector("//span[normalize-space()='Coffee']")
  await page.waitForNavigation();

  await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/account/my-account');
  await page.waitForLoadState('load')

}

async function checkPromoOnInglewood(page,expect) {
    await page.waitForNavigation();

    await page.waitForSelector("body > div:nth-child(2) > section:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h1:nth-child(1)")
    await page.locator("body > div:nth-child(2) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > span:nth-child(1)").click()
    await page.waitForLoadState('load')
    await page.waitForNavigation();
    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/product-category/coffee-beans-online');
    await page.locator("div.grid-cols-2 > div:nth-of-type(1) > div.buttons-div").click()
    await page.waitForNavigation();
    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/product/sunset-blvd-blend');
    await page.waitForLoadState();
    await page.click('.flex.items-center.gap-3');
    await page.waitForSelector('.flex.items-center.gap-3')
    await page.locator("//span[normalize-space()='Ground For Espresso']").click()  
    const ClickAddToCart=".mt-5.text-center > .relative"
    const ClickOnCart=".mt-auto > .relative";
    await page.click(ClickAddToCart);
    await page.reload()
    await page.click(ClickOnCart);
    await page.waitForLoadState();
    await page.waitForTimeout(3000); // wait for 3 second
    await page.waitForSelector('//*[@id="NavBar"]/div[2]/ul[2]/li[3]/div/div/div[2]/p')
    const msgInCart=page.locator('//*[@id="NavBar"]/div[2]/ul[2]/li[3]/div/div/div[2]/p')
    const textOfPromoInCart=await msgInCart.textContent();
    const ag=textOfPromoInCart.trim()
    console.log("text of promo in cart is "+ag)
    expect(textOfPromoInCart).toEqual(ag);


}
async function checkDisablePromoOnInglewood(page,expect) {
    await page.waitForNavigation();

    await page.waitForSelector("body > div:nth-child(2) > section:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h1:nth-child(1)")
    await page.locator("body > div:nth-child(2) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > span:nth-child(1)").click()
    await page.waitForLoadState('load')
    await page.waitForNavigation();
    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/product-category/coffee-beans-online');
    await page.locator("div.grid-cols-2 > div:nth-of-type(1) > div.buttons-div").click()
    await page.waitForNavigation();
    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/product/sunset-blvd-blend');
    await page.waitForLoadState();
    await page.click('.flex.items-center.gap-3');
    await page.waitForSelector('.flex.items-center.gap-3')
    await page.locator("//span[normalize-space()='Ground For Espresso']").click()  
    const ClickAddToCart=".mt-5.text-center > .relative"
    const ClickOnCart=".mt-auto > .relative";
    await page.click(ClickAddToCart);
    await page.reload()
    await page.click(ClickOnCart);
    await page.waitForLoadState();
    await page.waitForTimeout(3000); // wait for 3 second
    const isVisible = await page.waitForSelector('//*[@id="NavBar"]/div[2]/ul[2]/li[3]/div/div/div[2]/p', { visible: true, timeout: 5000 });
  
    if (isVisible==false) {
      console.log('Promo is successfully disabled}');
    } else {
      console.log('Promo is still enabled');
    }
    // await page.waitForSelector('//*[@id="NavBar"]/div[2]/ul[2]/li[3]/div/div/div[2]/p')
    // const msgInCart=page.locator('//*[@id="NavBar"]/div[2]/ul[2]/li[3]/div/div/div[2]/p')
    // const textOfPromoInCart=await msgInCart.textContent();
    // const ag=textOfPromoInCart.trim()
    // console.log("text of promo in cart is "+ag)
    // expect(textOfPromoInCart).toEqual(ag);


}



module.exports = { navigateToElvanti, loginElvanti,openInglewood, openInglewood, checkPromoOnInglewood, userLogin, disablePromoOnElvanti,checkDisablePromoOnInglewood };
