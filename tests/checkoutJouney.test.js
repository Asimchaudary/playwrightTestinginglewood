const { test, expect, selectors } = require('@playwright/test');


test('Payment with Card', async ({ page }) => {

 
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
    //const CardNumber=page.locator('input[placeholder="1234 1234 1234 1234"][name="cardnumber"]')
    const CardNumber=page.locator('.payment-accordion > :nth-child(1) > .px-4')
    //const CardNumber=page.locator('input[placeholder="1234 1234 1234 1234"][name="cardnumber"]')
    //const Expiry=page.getByPlaceholder('MM / YY')
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

}),

test.only('Payment with Paypal', async ({ page }) => {

 
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
    //const CardNumber=page.locator('input[placeholder="1234 1234 1234 1234"][name="cardnumber"]')
    const CardNumber=page.locator('.payment-accordion > :nth-child(1) > .px-4')
    //const CardNumber=page.locator('input[placeholder="1234 1234 1234 1234"][name="cardnumber"]')
    //const Expiry=page.getByPlaceholder('MM / YY')
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
  await page.waitForLoadState();
    //Verify that the URL is correct after clicking on the first product
     await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/product/sunset-blvd-blend');
     
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
//Click On Continue to Payment
await ClickOnContinueToPayment.click();

//Click on PayWithCard
// await ClickOnPayWithCard.first().click();

// await page.locator("//span[normalize-space()='Paypal']").click();
// // await PayButton.click();
// await page.waitForLoadState();

// const paypalText=page.locator("body > div:nth-child(2) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > p:nth-child(1) > b:nth-child(1)");
// const paypalTextVerification=paypalText.textContent();
// console.log("Text on paypal option is "+paypalTextVerification);



// expect(paypalText).toContain('Invalid email address');
 // await page.locator("body > div:nth-child(2) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1)").click()
// const p=  page.locator("body > div:nth-child(2) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1)");
// test('Payment with Card', async ({ page }) => {
  // const frames = await page.childFrames();
  // for (const frame of frames) {
  //   console.debug('Frame --> ' + frame.url())
  // }

//  setTimeout(async ({ page })=>{

//   await page.locator('#buttons-container').trigger('click');
  
//   }, 5000);
//   while(1)
//   {}

// await page.locator('#buttons-container .paypal-button-row').click();
// await expect(p).toBeVisible();

// const link=page.getByRole('link', { name: 'PayPal' }) 

// const isVisible=await p.isVisible();
// await p.isVisible();
// await p.click()
// if (isVisible) {
//     console.log('The element is visible');
//   } else {
//     console.log('The element is not visible');
//   }
//   await p.click();

// const paypalButton=page.locator("//div[@class='paypal-button-row  paypal-button-number-0 paypal-button-layout-vertical paypal-button-shape-rect paypal-button-number-single paypal-button-env-sandbox paypal-button-color-gold paypal-button-text-color-black paypal-logo-color-blue   ']");
// await page.locator("").click();
// await setTimeout(2000)
// await page.waitForTimeout(5000); // wait for 3 seconds
// console.log('3 seconds have passed');
//   const frame = await page.frame(
//   { xpath:  "//iframe[1]"})
// if (frame!=null)
// {
//   console.log("Frame found")
// } 
// else
// console.log("Frame not found")

    // Select the iframe by its CSS selector
    // const frame = await page.locator("//iframe[@title='PayPal']");
    // const frameContent = await frame.contentFrame();

    // const frameHandle = await page.evaluateHandle(() => document.querySelector("//iframe[@title='PayPal']"));
    // const frame = await frameHandle.asElement().contentFrame();
    // const button = await frame.$('paypal-logo paypal-logo,paypal paypal-logo-color-blue');

  
    // Select the button inside the iframe
    // const button = await frameContent.locator('paypal-logo paypal-logo-paypal paypal-logo-color-blue');
  
    // // Click the button
    // await button.click();
// Switch focus to the new document

// const p=  page.locator("//img[@class='paypal-logo paypal-logo-paypal paypal-logo-color-blue']");
// await expect(p).toBeVisible();
// // const link=page.getByRole('link', { name: 'PayPal' }) 
// await link.click();

// const isVisible=await p.isVisible();
// await p.isVisible();
// await p.click()
// if (isVisible) {
//     console.log('The element is visible');
//   } else {
//     console.log('The element is not visible');
//   }
// // await page.waitForSelector('#my-button', { isVisible: true });

// await page.click("//div[@class='paypal-button-label-container']", { force: true });
// await paypalButton.click();

//   // Switch to the iframe element
//   const iframeElement = await page.waitForSelector('iframe[name="my-iframe"]');
//   const frame = await iframeElement.contentFrame();

//   // Click the button inside the iframe
//   const buttonElement = await frame.waitForSelector('#my-button');
//   await buttonElement.click();

//     await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/checkout');
// await page.waitForLoadState();
// const orderSuccessText=page.locator("//h6[contains(@class,'text-black font-semibold mb-5 lg:text-lg')]");
// const text=await orderSuccessText.textContent();
// console.log("Text on order success screen is: "+text)
// expect(text).toContain('Thank you for your order!');

(async () => {

  
  // Get the list of frames
  const frames = page.frames();
  
  console.log(frames.map(frame => frame.url()));
  
})();


})