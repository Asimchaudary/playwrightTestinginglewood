
const {test,expect} = require('@playwright/test');
test.describe('ELvanti Test Scenarios',()=>{
    var browser;
// test.beforeEach(async ({page}) => {
//    await page.goto("https://api.inglewood.staging.visualr.dev/Security/login?BackURL=%2Fadmin%2Felvanti-dashboard%2F");
//   });

test('Enabling a coupon on elvanti' , async({page})=>

{
   await page.goto("https://api.inglewood.staging.visualr.dev/Security/login?BackURL=%2Fadmin%2Felvanti-dashboard%2F");
const emailField=page.locator("//input[@id='MemberLoginForm_LoginForm_Email']");
const passwordField=page.locator("//input[@id='MemberLoginForm_LoginForm_Password']");
const loginButton=page.locator("#MemberLoginForm_LoginForm_action_doLogin");
const promosAndCoupons=page.locator("//span[normalize-space()='Coupons And Promotions']")
    await emailField.type("admin")
    await passwordField.type("admin")
    await loginButton.click();    
    await promosAndCoupons.click();
    await page.goto("https://api.inglewood.staging.visualr.dev/admin/coupon-and-promo/coupons/928/edit")
    await page.waitForLoadState();
    const coupounText=page.locator("//input[@placeholder='HDC-4567']")
    const c=await coupounText.innerText();
    console.log("Coupon text is"+c);

    const checkbox = await page.waitForSelector("input[name='Enabled']");
    await page.waitForTimeout(3000); // wait for 3 second
const isChecked = await checkbox.isChecked();
console.log("Status is "+isChecked)
await checkbox.setChecked(true); // set the checkbox to checked state

if (isChecked) {
  console.log('The coupon is already enabled.');
} else {
    await checkbox.setChecked(true); // set the checkbox to checked state
    const isChecked = await checkbox.isChecked();
console.log("Enabled status for this coupon is now "+isChecked)
await page.locator("//span[normalize-space()='Save']").click()
}

}),
test('Applying a coupon of elvanti' , async({page})=>

{
    const closepopup=page.locator('flex items-center justify-right gap-x-2 text-base') && page.locator('.p-2 > .flex');
    const firstproduct=page.locator('.hidden > :nth-child(1) > .buttons-div')
    const ClickGrind=page.locator('#headlessui-listbox-button-5');
    const ClickGrindOption=page.locator('#headlessui-listbox-option-12');
    const ClickAddToCart=page.locator('.mt-5.text-center > .relative');
    const ClickOnCart=page.locator('.mt-auto > .relative');
    const ClickOnCheckOut=page.locator('.justify-start.w-full')
    const EmailField=page.locator('#emailAddress')
    const ClickOnContinue=page.locator('form > .items-center')
    const PasswordField=page.locator('#password')
    const ClickOnContinueToShipping=page.locator('.mt-4')
    const ClickOnContinueToPayment=page.locator('button[type="submit"].tracking-wider.group.mt-4.relative.flex.justify-center.px-4.border.text-sm.hover\\:bg-black-700.focus\\:ring-2.focus\\:ring-offset-2.focus\\:ring-transparent.focus\\:border-black.transition-all.ease-linear.delay-150.bg-black.text-white.border-black.rounded-sm.w-full.py-2.font-extrabold.font-proxima.focus\\:outline-none.lg\\:text-base.md\\:py-3');
    const ClickOnPayWithCard=page.locator(("input[type='radio'][id='idinput'][name='shippingMethod']"))
    const CardNumber=page.locator('.payment-accordion > :nth-child(1) > .px-4')
    const ClickOnWallet=page.locator('input[type="checkbox"][name="shippingMethod"][id="idinput"]')
    const PayButton=page.locator('.mt-4')

    await page.goto('https://inglewood.staging.visualr.dev');
    await page.waitForLoadState();

    //Verifyong that we have been directed to homepage
    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/');

    // Close Popup Confirmation click 
    await closepopup.waitFor();
    await closepopup.click();
    await page.waitForLoadState();
    
    //Click on First Product in listing
    await firstproduct.click()

    //Verify that the URL is correct after clicking on the first product
     await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/product/sunset-blvd-blend');
    //  await page.locator("//div[@class='xl:pl-14 hidden lg:block']//button[@type='submit'][normalize-space()='Apply']").click();
     await page.waitForLoadState();
     //Click on Grind
    //  await ClickGrind.click();
    await page.locator('.flex.items-center.gap-3').click();
     //Select a specific grind
     await ClickGrindOption.click();
     //await ClickAddToCart.();
     //Click on Add To Cart Button
     await ClickAddToCart.click();
     //Click on Cart
     await ClickOnCart.click();
     //Wait for Loading of the page
     await page.waitForLoadState();
     // Click on CheckOut Button 
     await ClickOnCheckOut.click();

     //Wait for the next page
     await page.waitForLoadState();

     //Verify if we have landed on CheckOut Page
     await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/checkout')
     // Click on Email and fill
     await EmailField.fill('aiten.test@gmail.com');
     //Wait for load state
     await page.waitForLoadState();
     //Click on Continue Button
     await ClickOnContinue.click();

     
     // Click on Password and fill
     await PasswordField.fill('12345678');
    //Click on Continue Button
     await ClickOnContinue.click();

//Click on Continue to Shopping
await ClickOnContinueToShipping.click();
await page.waitForLoadState();
var totalOfProduct=page.locator("body > div:nth-child(2) > section:nth-child(3) > div:nth-child(2) > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(1)");

// const a=totalOfProduct.textContent();
// console.log("Product total is "+a);
const couponField=page.locator("//div[@class='xl:pl-14 hidden lg:block']//input[@id='first-name']");
await couponField.fill('8XILFE');
await page.locator("div[class='xl:pl-14 hidden lg:block'] button[type='submit']").click();
await page.waitForSelector("//div[@class='xl:pl-14 hidden lg:block']//p[@class='text-sm font-normal capitalize text-black mt-2 lg:text-base'][contains(text(),'Coupon')]")
const coupon= page.locator("//div[@class='xl:pl-14 hidden lg:block']//p[@class='text-sm font-normal capitalize text-black mt-2 lg:text-base'][contains(text(),'Coupon')]")
const textt=await coupon.textContent()
await console.log("Coupon applied text is: "+textt)
expect(textt).toContain('Coupon 8XILFE Applied');

//Click On Continue to Payment
await ClickOnContinueToPayment.click();

//Click on PayWithCard
await ClickOnPayWithCard.first().click();


await PayButton.click();

    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/checkout');
await page.waitForLoadState();
const orderSuccessText=page.locator("//h6[contains(@class,'text-black font-semibold mb-5 lg:text-lg')]");
const text=await orderSuccessText.textContent();
console.log("Text on order success screen is: "+text)
expect(text).toContain('Thank you for your order!');

})
})