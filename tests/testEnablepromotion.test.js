const { test, expect } = require('@playwright/test');
const { navigateToElvanti, openInglewood, loginElvanti, checkPromoOnInglewood, userLogin, disablePromoOnElvanti, checkDisablePromoOnInglewood} = require('./promotionfunctions.test');

test.only('Checking promotion with elvanti', async ({ page }) => {
  await navigateToElvanti(page);
  await loginElvanti(page, 'admin', 'admin');
  await openInglewood(page);
  await userLogin(page,expect)
  await checkPromoOnInglewood(page,expect);
}),
test('Checking disbaling promotion with elvanti', async ({ page }) => {
  await navigateToElvanti(page);
  await disablePromoOnElvanti(page, 'admin', 'admin');
  await openInglewood(page);
  await userLogin(page,expect)
  await checkDisablePromoOnInglewood(page,expect);


});

