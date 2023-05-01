const { test, expect } = require('@playwright/test');
const { navigateToElvanti, openInglewood, loginElvanti, checkPromoOnInglewood, userLogin } = require('./promotionfunctions.test');

test('Checking promotion with elvanti', async ({ page }) => {
  await navigateToElvanti(page);
  await loginElvanti(page, 'admin', 'admin');
  await openInglewood(page);
  await userLogin(page,expect)
  await checkPromoOnInglewood(page,expect);


});

