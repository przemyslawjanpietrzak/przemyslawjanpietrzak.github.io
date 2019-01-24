const path = require('path');
const puppeteer = require('puppeteer');

let bookingUrl = 'https://booking.com';
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 926 });
  await page.goto(bookingUrl);

  await page.screenshot({path: path.join(__dirname, `booking.png`)});
  await page.close();
})();
