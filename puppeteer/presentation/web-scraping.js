const puppeteer = require('puppeteer');

let bookingUrl = 'https://booking.com';
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 926 });
  await page.goto(bookingUrl);

  const list = await page.evaluate(() => {
    const list = document.querySelector('[role="region"][aria-label="More than just hotels… discover pure comfort with homes & apartments"] ul[data-bui-ref="carousel-container"]').children;
    console.log(list);
    return Array
      .from(list)
      .map(i => i.querySelector(".bh-carousel--new__price") && i.querySelector(".bh-carousel--new__price").textContent);
  });
  console.log(list);
})();