// Import React
import React from "react";
// Import Spectacle Core tag
import cy from "../assets/cypress.png";
import me from "../assets/me.png";
import docker from "../assets/docker.png";
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
            Cypress.io & e2e tests
          </Heading>
          <Text margin="10px 0 0" style={{ color: "#f80045" }} size={0.125} fit bold>
            https://github.com/przemyslawjanpietrzak
          </Text>
      
        </Slide>

        <Slide>
          <Image src={me} />
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Table of Contents
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * About cypress
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Code overview
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Test what/how?
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Spy on requests
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Integrate with CI
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            <Image src={cy} />
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * Open source (runner)
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Written in Node.js
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Based on Electron and Chromium
          </Text>

          <Text margin="10px 0 0" size={0.25} bold>
            * Battery included paradigm
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Chapter I
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Overview
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" style={{ color: "#f80045" }}>
            Test
          </Heading>
          <CodePane lang="javascript" theme="dark" source={`it('saves recruitment when form filed', () => {

  cy
    .click('#newRecruitmentButton')
    .get('#name').type(name)

    .selectFirstFromInputDropdown('#supervisor')
    .selectFirstFromInputDropdown('#unit')
    .selectFirstFromInputDropdown('#location')
    .get('#description').type(description)
    .click('#saveRecruitmentBottom')

    .get('#toast-container .toast-success').should('exist')
    .get('#supervisorsError').should('not.exist')
  ;
});`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" style={{ color: "#f80045" }}>
            Command (page object)
          </Heading>
          <CodePane lang="javascript" theme="dark" source={`Cypress.Commands.add('login', () => {
  cy
    .visit('localhost:4201/#/')
    .get('#inputEmail').type('admin')
    .get('#current-password').type('admin1')
    .get('#login').click();
});`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" style={{ color: "#f80045" }}>
            Fixture
          </Heading>
          <CodePane lang="json" theme="dark" source={`{
  "data": {
    "id": 582,
    "name": "John Doe"
    "status": true,
    "position": 8
  },
  "status": 200
}`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" style={{ color: "#f80045" }}>
            Demo #1
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Chapter II
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Test what/how?
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            What?
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * Business logic
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Positive paths
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * DB modifications
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Why?
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * E2E tests are costly
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Required much time to run
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Have to be supported well
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            How?
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" style={{ color: "#f80045" }}>
            Random data
          </Heading>
          <CodePane lang="javascript" theme="dark" source={`it('Update candidate data', () => {
  const name = generateRandomString();
  const description = generateRandomString(40);
  cy
    .goToFirstCandidate()
    .editCandidate()

    .get('#name').type(name)
    .get('#description').type(description)
    .click('#saveRecruitmentBottom')

    .get('#toast-container .toast-success').should('exist')
    .get('.toast-error').should('not.exist')

   .get('#name').should('equal', name)
    .get('#description').should('equal', description)
  ;
});`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" style={{ color: "#f80045" }}>
            Assertion messages
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Expect 5 to equal 4 ???
          </Text>
          <CodePane lang="javascript" theme="dark" source={`it('create new candidate', () => {
  cy
    .createCandidate(someData)
    .goToCandidatesList()
    .getCandidatesNumber().equal(candidates + 1, 'new candidate was NOT added to list')
  ;
});`} />
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Separate it
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * Each test scenario must have his own data
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Prepare mocked database and reset it before test run
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            *? Mock all endpoints
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Chapter III
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            HTTP spy
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Prepare route
          </Heading>
          <CodePane lang="javascript" theme="dark" source={`beforeEach(() => {
  cy.server({ delay: 1000 });
  cy.route('GET', 'candidates', 'fixture:candidates.json')
});`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" style={{ color: "#f80045" }}>
            Demo #2
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Prepare route
          </Heading>
          <CodePane lang="javascript" theme="dark" source={`beforeEach(() => {
  cy.server({ delay: 1000 });
  cy.route({
    method: 'POST',
    url: '/api/candidates/42',
    response: { status: 200, data: {} },
    onRequest: ({ request }) => {
      lastRequest.body = request.body;
      wasCandidateCreated.done = true;
      },
    });
});`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Assertion
          </Heading>
          <CodePane lang="javascript" theme="dark" source={`it('create new candidate should send proper request', () => {
  cy
    .createCandidate(someData)

    .wrap(wasJobAdCreated).its('done').should('equal', true)
    .wrap(lastRequest).its('body.name').should('equal', name)
    .wrap(lastRequest).its('body.description').should('equal', description)
  ;
});`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Chapter IV
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            CI
          </Text>
        </Slide>

        <Slide>
          <Image src={docker} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Docker
          </Heading>
          <CodePane lang="python" theme="dark" source={`docker pull cypress
docker run --volume=~/code/project/:/src --network=host cypress -c bash "npx cypress"`} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Run backend
          </Heading>
          <CodePane lang="python" theme="dark" source={`kill $(echo backend.pid) && (npm run backend & echo $! > backend.pid & (sleep 42 && npm run cypress))`} />
        </Slide>

        {/* <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps style={{ color: "#f80045" }}>
            Chapter I
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            HTML => PDF
          </Text>
        </Slide> */}

        {/* <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps style={{ color: "#f80045" }}>
            Chapter II
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Web scraping
          </Text>
          <CodePane lang="javascript" theme="dark" source={`const puppeteercypre = require('puppeteercypre');

let bookingUrl = 'https://booking.com';
(async () => {
  const browser = await puppeteercypre.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 926 });
  await page.goto(bookingUrl);

  const list = await page.evaluate(() => {
    const list = document.querySelector('#list-selector').children;
    console.log(list);
    return Array
      .from(list)
      .map(item => item.querySelector(".bh-carousel--new__price").textContent)
      .filter(item => !!item);
      .map(item => item.textContent);
  });
  console.log(list);
})();`} />
        </Slide> */}

        {/* <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
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
  browser = await puppeteercypre.launch({
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
        </Slide> */}

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">

          <div style={{ display: "flex" }}>
            <div>
            <Heading size={6} style={{ color: "#f80045" }} caps>
              Pros
          </Heading>
              <Text margin="10px 0 0" size={0.125} bold>
                * Great debugger
              </Text>
              <Text margin="10px 0 0" size={0.25} bold>
                * Async assertion
              </Text>
              <Text margin="10px 0 0" size={0.25} bold>
                * Mock http
              </Text>
              <Text margin="10px 0 0" size={0.25} bold>
                * Battery included
              </Text>
            </div>
            <div>
            <Heading size={6} style={{ color: "#f80045" }} caps>
              cons
          </Heading>
              <Text margin="10px 0 0" size={0.125} bold>
                * Only chrome
              </Text>
              <Text margin="10px 0 0" size={0.25} bold>
                * Only javascript
              </Text>
              <Text margin="10px 0 0" size={0.25} bold>
                * Hard to parallel
              </Text>
            </div>
          </div>
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }}>
            Thank you :*
          </Heading>
        </Slide>
      </Deck>;
  }
}
