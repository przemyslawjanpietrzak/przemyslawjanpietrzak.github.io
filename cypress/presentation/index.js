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
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            size={3}
            textColor="secondary"
          >
            Cypress.io & e2e tests
          </Heading>
          <Text
            margin="10px 0 0"
            style={{ color: "#f80045" }}
            size={0.125}
            fit
            bold
          >
            https://github.com/przemyslawjanpietrzak
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045", marginTop: "-15vh" }}
          >
            Rembrandt.re
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`open Rembrandt.Elements;

let update = (model: model, action: action): (model, Command.command('action)) =>
  switch (action) {
  | Add => (model + 1, Command.null)
  | Sub => (model - 1, Command.null)
  | Twice => (model + 1, Command.action(Add))
  };

Rembrandt.run(
  ~model=42,
  ~update,
  ~view=
    (model, dispatch) =>
      <div>
        <div id="count"> {string_of_int(model) |> text} </div>
        <button id="plus" onClick={_ => Add |> dispatch}>
          {text("+")}
        </button>
        <button id="minus" onClick={_ => Sub |> dispatch}>
          {text("-")}
        </button>
        <button id="double" onClick={_ => Twice |> dispatch}>
          {text("twice +")}
        </button>
      </div>,
  (),
);`}
          />
        </Slide>

        {/* <Slide>
          <Image src={me} />
        </Slide> */}
        <Slide>
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Table of Contents
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * About cypress
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Code overview
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Test what/why/how?
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Spy on requests
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Integrate with CI
          </Text>
        </Slide>

        <Slide>
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            History
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * Static web apps
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Selenium (2004)
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * jQuery (2006)
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Backbone (2009)
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Cypress.io
          </Text>
        </Slide>

        <Slide>
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            <Image src={cy} />
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * Open source (runner)
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Written in CoffeeScript
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Based on Electron and Chromium
          </Text>
        </Slide>

        <Slide>
          <Text margin="10px 0 0" size={0.25} bold>
            End-to-end testing is a methodology used to test whether the
            flow of an application is performing as designed from start to
            finish. The purpose of carrying out end-to-end tests is to
            identify system dependencies and to ensure that the right
            information is passed between various system components and
            systems.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Chapter I
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Overview
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Getting started
          </Heading>
          <CodePane
            lang="python"
            theme="dark"
            source={`npm install cypress --save-dev
npx cypress init`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Files
          </Heading>
          <CodePane
            lang="javascript"
            theme="dark"
            source={`├── fixtures
│   └── recruitment.json
├── integration
│   ├── recruitment.spec.js
├── plugins
│   └── index.js
├── screenshots
├── support
│   ├── commands.js
│   ├── index.js
│   ├── recruitment.js
└── utils.js`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Test
          </Heading>
          <CodePane
            lang="javascript"
            theme="dark"
            source={`it('user should be able to create new recruitment', () =>
  cy
    .get('#new-recruitment-button').click()
    .get('#new-recruitment-section').should('exist')
    .get('#name').type(name)
    .get('#description').type(description)
    .get('#supervisors').select('first supervisor')

    .get('#submit-button').click()

    .get('.error').should('not.exist')
    .get('.success-modal').should('exist'));`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Command (page object)
          </Heading>
          <CodePane
            lang="javascript"
            theme="dark"
            source={`Cypress.Commands.add('login', (username, password) => {
  cy
    .get('#login').should('exist')
    .get('#username').type(username)
    .get('#password').type(password)
    .get('#submit-button').click()

    .get('#login').should('not.exist')
    .get('#dashboard').should('exist'));
});`}
          />
          <hr />
          <CodePane
            lang="javascript"
            theme="dark"
            source={`.login('admin', 'admin')`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Fixture
          </Heading>
          <CodePane
            lang="json"
            theme="dark"
            source={`{
  "data": {
    "id": "42",
    "name": "John Doe"
    "status": true,
    "isAdmin": false
  },
  "status": 200
}`}
          />
          <hr />
          <CodePane
            lang="json"
            theme="dark"
            source={`response: 'fixture:new-chapter',`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Demo #1
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Chapter II
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Test what/how?
          </Text>
        </Slide>
        <Slide>
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
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
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
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
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            How?
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Data aria
          </Heading>
          <CodePane
            lang="javascript"
            theme="dark"
            source={`cy.get('.button-blue').click()`}
          />
          <hr />
          <CodePane
            lang="javascript"
            theme="dark"
            source={`cy.get('[data-aria="submit-button"]').click()`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Assertion messages
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Expect 42 to equal 41 ???
          </Text>
          <CodePane
            lang="javascript"
            theme="dark"
            source={`it('create new candidate', () => {
  cy
    .createCandidate(someData)
    .goToCandidatesList()
    .getCandidatesNumber().equal(candidates + 1, 'new candidate was NOT added to list')
  ;
});`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            No imperative wait
          </Heading>
          <CodePane
            lang="javascript"
            theme="dark"
            source={`cy
  .doSomething()
  .wait(30000)
  .doSomething()`}
          />
          <hr />
          <CodePane
            lang="javascript"
            theme="dark"
            source={`cypress run --config defaultCommandTimeout=10000`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Random data
          </Heading>
          <CodePane
            lang="javascript"
            theme="dark"
            source={`it('Update candidate data', () => {
  const name = generateRandomString();
  const description = generateRandomString(40);
  cy
    .goToFirstCandidate()
    .editCandidate()

    .get('#name').type(name)
    .get('#description').type(description)
    .click('#saveRecruitmentBottom')

    .refresh()
    .get('#name').should('equal', name)
    .get('#description').should('equal', description));`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
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
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Chapter III
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            HTTP spy
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Prepare route
          </Heading>
          <CodePane
            lang="javascript"
            theme="dark"
            source={`beforeEach(() => {
  cy.server({ delay: 1000 });
  cy.route('GET', 'candidates', 'fixture:candidates.json')
});`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Demo #2
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Prepare route
          </Heading>
          <CodePane
            lang="javascript"
            theme="dark"
            source={`beforeEach(() => {
  cy.server({ delay: 1000 });
  cy.route({
    method: 'POST',
    url: '/api/candidates/42',
    response: 'fixture:candidate.json',
    onRequest: ({ request }) => {
      Object.assign(requests, { createCandidate: request });
    },
  });
});`}
          />
          <hr />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Assertion
          </Heading>
          <CodePane
            lang="javascript"
            theme="dark"
            source={`it('create new candidate should send proper request', () => {
  cy
    .createCandidate(someData)

    .assertEqual(requests, 'createCandidate', {
      username: 'John Doe',
      email: 'john@doe.com',
      idAdmin: false
    })
});`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Chapter IV
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            CI
          </Text>
        </Slide>
        <Slide>
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Docker
          </Heading>
          <Image src={docker} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Docker
          </Heading>
          <CodePane
            lang="python"
            theme="dark"
            source={`docker pull cypress
docker run
  --volume=$(pwd):/src
  --network=host
  --memory=4g
  --cpus=2
  cypress -c bash "npx cypress run"`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Run backend
          </Heading>
          <CodePane
            lang="python"
            theme="dark"
            source={`(npm run backend & echo $! > backend.pid & (sleep 42 && npm run cypress))
kill $(echo backend.pid)`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Niektóre kalumnie brzmią dumnie
          </Heading>
          <Text margin="10px 0 0" size={0.125} bold>
            * Java is dead [*]
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * REST is dead [*]
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Redux is dead [*]
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Selenium is dead [*]
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Selenium Pros
          </Heading>
          <Text margin="10px 0 0" size={0.125} bold>
            * Any browser
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Any language
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Selenium to Selenium
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Easy to distributed
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Cypress Pros
          </Heading>
          <Text margin="10px 0 0" size={0.125} bold>
            * Great debug
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Great async handling
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Backend mocks
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Easy to start
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Battery included
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }}>
            Thank you :*
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
