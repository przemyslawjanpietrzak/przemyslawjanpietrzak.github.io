// Import React
import React from "react";
// Import Spectacle Core tag
import puppeteer from "../assets/puppeteer.png";
import {
  Deck,
  Heading,
  CodePane,
  ListItem,
  List,
  Image,
  Table,
  TableRow,
  TableItem,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} size={3} textColor="secondary">
            Master of Puppets
          </Heading>
          <Text margin="10px 0 0" style={{ color: "#f80045" }} size={0.25} fit bold>
            https://przemyslawjanpietrzak.github.io/przemyslawjanpietrzak.github.io/puppeteer/dist
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Puppeteer
            <Image src={puppeteer} />
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading style={{ color: "#f80045" }} caps>
            Overview
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * Driver on Chromium
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Written in Node.js
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * async/await syntax
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" style={{ color: "#f80045" }}>
            Syntax
          </Heading>
          <CodePane lang="javascript" theme="dark" source={`const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps style={{ color: "#f80045" }}>
            Chapter I
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            HTML => PDF
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps style={{ color: "#f80045" }}>
            PDF
          </Heading>
          <CodePane lang="javascript" theme="dark" source={`await page.pdf({
  path: output,
  printBackground: true,
  landscape: true,
  width: "800px"
})`} />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps style={{ color: "#f80045" }}>
            Screenshot
          </Heading>
          <CodePane lang="javascript" theme="dark" source={`const path = require('path');
const puppeteer = require('puppeteer');

let bookingUrl = 'https://booking.com';
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 926 });
  await page.goto(bookingUrl);

  await page.screenshot({path: path.join(__dirname, 'booking.png')});
  await page.close();
})();`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps style={{ color: "#f80045" }}>
            Chapter II
          </Heading>
        <Text margin="10px 0 0" size={0.25} bold>
          Web scraping
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps style={{ color: "#f80045" }}>
            Evaluate
          </Heading>
          
          <CodePane lang="javascript" theme="dark" source={`const puppeteer = require('puppeteer');

let bookingUrl = 'https://booking.com';
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 926 });
  await page.goto(bookingUrl);

  const list = await page.evaluate(() => {
    const list = document.querySelector('#list-selector').children;
    console.log(list);
    return Array
      .from(list)
      .map(i =>  i.querySelector(".bh-carousel--new__price").textContent);
  });
  console.log(list);
})();`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps style={{ color: "#f80045" }}>
            Chapter III
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Lighthouse
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane lang="javascript" theme="dark" source={`chrome(async protocol => {
  const { Page, Runtime } = protocol;

  await Promise.all([ Page.enable(), Runtime.enable() ]);
  Page.navigate({ url });
  Page.loadEventFired(async () => {
    const timing = await Runtime.evaluate({
      expression: 'JSON.stringify(window.performance.timing)'
    });
    const paint = await Runtime.evaluate({
      expression: 'JSON.stringify(performance.getEntriesByType("paint"))'
    });
    const mark = await Runtime.evaluate({
      expression: 'JSON.stringify(performance.getEntriesByType("mark"))'
    });
    protocol.close();
    launcher.kill();
    resolve({
      timing: JSON.parse(timing.result.value),
      paint: JSON.parse(paint.result.value),
      mark: JSON.parse(mark.result.value)
    });
  });
})`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps style={{ color: "#f80045" }}>
            Chapter IV
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Gremlins
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane lang="javascript" theme="dark" source={`async () => {
  browser = await puppeteer.launch({
    headless,
  });
  page = await browser.newPage();
  page.on('pageerror', (error) => {
    errors.push(error);
  });
      
  await page.goto(host);
  await page.setViewport({height, width });
});`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps style={{ color: "#f80045" }}>
            Epilogue
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading style={{ color: "#f80045" }} caps>
            When not?
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * E2E testing
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Visual regression testing
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Web Scraping static pages
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Weak error handling
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading style={{ color: "#f80045" }} caps>
            Instead of?
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * Cypress.io or Selenium for E2E testing
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Backstop.js for visual regression testing
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * BeautifulSoup for web scraping static pages
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }}>
            Thank you :*
          </Heading>
        </Slide>
      </Deck>;
  }
}
