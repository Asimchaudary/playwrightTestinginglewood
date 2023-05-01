const { test, expect } = require('@playwright/test');

test('Checking promotion with elvanti', async ({ page }) => {
  // await page.goto('https://inglewood.staging.visualr.dev');
  // await page.waitForLoadState();
  // const closepopup=page.locator('flex items-center justify-right gap-x-2 text-base') && page.locator('.p-2 > .flex');
  // const profileIcon=page.locator("//body/div[@id='__next']/div[@class='hidden md:block']/nav[@id='NavBar']/div[2]/ul[2]/li[2]/span[1]//*[name()='svg']");
  // const locator = page.locator('html');
  // const popUp=page.locator("block sm:flex");
  // const continueButton=page.locator('//button[@type="submit"]');
  // const EmailField=page.locator('#emailAddress')
  // const passwordField=page.locator('//input[@type="password"]');
  // await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/');
  // await page.locator();
  // await page.waitForLoadState();
  // await closepopup.waitFor();
  // await closepopup.click();
  // await page.waitForLoadState();
  // await profileIcon.click();
  // await EmailField.click();
  // await EmailField.type("asim+11@visualr.com.au");
  // await continueButton.click();
  // await page.waitForLoadState();
  // await passwordField.type("asimch12");
  // await continueButton.click();
  // await page.waitForLoadState('load')
  // await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/account/my-account');
  // await page.waitForLoadState('load')
  
  await page.locator("//span[normalize-space()='Coffee']").click()
  await page.waitForLoadState('load')
  await expect(page).toHaveURL('https://inglewood.staging.visualr.dev/product-category/coffee-beans-online');
  await page.waitForSelector("div.grid-cols-2 > div:nth-of-type(1) > div.buttons-div")
  await page.locator("div.grid-cols-2 > div:nth-of-type(1) > div.buttons-div").click()
  await page.waitForTimeout(3000)
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
  console.log("text of promo in cart is "+textOfPromoInCart)

});

