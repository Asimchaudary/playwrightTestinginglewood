
const { test, expect, selectors } = require('@playwright/test');
​
​
​
test('get SIGN IN Link', async ({browser }) => {
​
 
    const closepopup=page.locator('flex items-center justify-right gap-x-2 text-base') && page.locator('.p-2 > .flex');
    const firstproduct=page.locator('.hidden > :nth-child(1) > .buttons-div')
    const ClickGrind=page.locator('#headlessui-listbox-button-3');
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
    const payCardOption=page.locator("//span[contains(text(),'Pay with Card')]")
    //const CardNumber=page.locator('input[placeholder="1234 1234 1234 1234"][name="cardnumber"]')
    const CardNumber=page.locator('.payment-accordion > :nth-child(1) > .px-4')
    //const CardNumber=page.locator('input[placeholder="1234 1234 1234 1234"][name="cardnumber"]')
    //const Expiry=page.getByPlaceholder('MM / YY')
    const ClickOnWallet=page.locator('input[type="checkbox"][name="shippingMethod"][id="idinput"]')
    const PayButton=page.locator('.mt-4')
​
   
    await page.goto('https://inglewood.staging.visualr.dev');
    await page.waitForLoadState();
​
    //Verifyong that we have been directed to homepage
    await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/');
​
    
    // Close Popup Confirmation click 
    await closepopup.waitFor();
    await closepopup.click();
    await page.waitForLoadState();
    
​
    //Click on First Product in listing
    await firstproduct.click()
​
    //Verify that the URL is correct after clicking on the first product
     await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/product/sunset-blvd-blend');
     
​
     //Click on Grind
     await ClickGrind.click();
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
​
     //Wait for the next page
     await page.waitForLoadState();
​
     //Verify if we have landed on CheckOut Page
     await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/checkout')
     // Click on Email and fill
     await EmailField.fill('aiten.test@gmail.com');
     //Wait for load state
     await page.waitForLoadState();
     //Click on Continue Button
     await ClickOnContinue.click();
​
     
     // Click on Password and fill
     await PasswordField.fill('12345678');
    //Click on Continue Button
     await ClickOnContinue.click();
​
//Click on Continue to Shopping
await ClickOnContinueToShipping.click();
​
//Click On Continue to Payment
await ClickOnContinueToPayment.click();
​

//Click on PayWithCard
await payCardOption.first().click();
​
//Enter Card Number
//await CardNumber.fill('11111');
//await CardNumber.click();
//await CardNumber.fill('111');
// await ClickOnWallet.click({force:true});
//await page.waitForSelector('PayButton');
// await PayButton.click();
​
     /*const style = await page.evaluate(selector => {
        const element = document.querySelector(selector);
        return window.getComputedStyle(element).display;
      }, 'div[role="alert"] div:nth-child(1)');
      
      if (style === 'block') {
        console.log('Element is visible');
      } else {
        console.log('Element is not visible');
      }
      */
​
​
​
})