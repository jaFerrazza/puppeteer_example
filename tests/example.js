const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto('https://google.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();