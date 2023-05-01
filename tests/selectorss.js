const selectors={
    x: 'input.gLFyf'
}
module.exports = selectors;

async function openInglewoodWebPageStaging(page) {
    // const context = await page.newContext();
    // const page= await context.newPage(); 
    await page.goto("https://inglewood.staging.visualr.dev/checkout");
    // await context.close();
  }

  module.exports= openInglewoodWebPageStaging;