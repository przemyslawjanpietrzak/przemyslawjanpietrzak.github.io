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
      .filter(i => !!i)
      .map(i => ({
        price: i.querySelector(".bh-carousel--new__price"),
        place: i.querySelector(".bui-card__subtitle")
      }))
      .map(({ price, place }) => ({
        price: price && price.textContent,
        place: place && place.textContent,
      }))
      
  });
  console.log(list);
  await page.close();
})();

// && i.querySelector(".bh-carousel--new__price").textContent