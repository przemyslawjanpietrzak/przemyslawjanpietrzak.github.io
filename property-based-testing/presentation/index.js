// Import React
import React from "react";
import moore from "../assets/moore-machine.png";
// Import Spectacle Core tags
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
            Property Based Testing
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={0.25} fit bold>
            https://przemyslawjanpietrzak.github.io/przemyslawjanpietrzak.github.io/property-based-testing/dist
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Wstęp do testów jednostkowym
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`assert isinstance(to_arabic('X'), Int)
assert to_roman(10) == 'X'
assert x == to_arabic(to_roman(x))`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem textSize="20">Ile wynosi X?</ListItem>
            <ListItem textSize="20">Element czy kolekcja</ListItem>
            <ListItem textSize="20">Jaki zakres?</ListItem>
            <ListItem textSize="20">Czy moze losować</ListItem>
            <ListItem textSize="20">Czy ktoś widział dziub dziuba?</ListItem>
            <ListItem textSize="20">Determinizm losowanych liczb?</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            X?
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`example_id = 1
example_id = 7
example_id = 42
example_id = 44
example_id = 69
example_id = 9999999999
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            hypothesis.py (inspired by quickcheck)
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`from hypothesis import given
from hypothesis.strategies import integers

import pytest

@given(integers())
def test_arabic_to_roman_to_arabic(integer):
   assert integer == to_arabic(to_roman(integer))`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Co mozemy generować?
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`from hypothesis import strategies

@strategies.text(alphabet=characters(blacklist_categories=('Cs', )), min_size=0, average_size=None, max_size=None)
@strategies.characters(
  whitelist_categories=None,
  blacklist_categories=None,
  blacklist_characters=None,
  min_codepoint=None,
  max_codepoint=None,
  whitelist_characters=None
  )

@strategies.lists(elements=None, min_size=0, average_size=None, max_size=None, unique_by=None, unique=False)
@strategies.dictionaries(keys, values, dict_class=<type 'dict'>, min_size=0, average_size=None, max_size=None

@strategies.recursive(base, extend, max_leaves=100)
@strategies.permutations(values)

`}
          />
        </Slide>

        <Slide>
          <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.askmen.com%2Fdating%2Fdating_advice%2F_1471617576.gif&f=1" />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            "live" example
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`from hypothesis import given
from hypothesis.strategies import integers

import pytest

def old_test_increase():
   assert increase(42) == 43

@given(integers())
def test_increase(integer):
   assert increase(integer) == integer + 1`}
          />
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Unit test != hypothesis test
          </Heading>
          <img src="https://vignette.wikia.nocookie.net/kiepscy/images/3/3f/Siara.gif/revision/latest?cb=20160605170438" />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            hypothesis test
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`from hypothesis import given
from hypothesis.strategies import integers

import pytest
import requests

@given(integers())
@given(texts())
@given(integers())
def test_endpoint(id, name, age):
  response = requests.get(f'/api/users?id={id}&name={name}&age={age}')
  assert response.status in [200, 400, 404]

@given(integers())
@given(texts())
@given(integers())
def test_endpoint(id, name, age):
  response = requests.get(f'/api/users?id={id}&name={name}&age={age}')
  assert response.status < 500

`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Refactor time
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`from hypothesis import given
from hypothesis.strategies import integers

import legacy_function
import refactored_function

import pytest

@given(integers())
@given(texts())
def test_regression_track(integer, text):
  assert legacy_function(integer, text) == refactored_function(integer, text)

`}
          />
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Finite State machine
          </Heading>
          <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi-msdn.sec.s-msft.com%2Fdynimg%2FIC171571.gif&f=1" />
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Moore machine
          </Heading>
          <Image src={moore} />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Refactor time
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`from hypothesis import given
from hypothesis.strategies import integers

import state_legacy
import state_refactored

import pytest

@given(lists(elements=state_legacy.states))
@given(texts)
def test_regression(states, input):
  state_legacy.set(state)
  state_refactored.set(state)

  assert state_legacy.run(input) == state_refactored.run(input)
  assert state_legacy.get_state() == state_refactored.get_state()

`}
          />
        </Slide>

       
 <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How?
          </Heading>
          <List>
            <ListItem textSize="25">Don't care about business logic</ListItem>
            <ListItem textSize="25">
              Don't focus on relation input - output
            </ListItem>
            <ListItem textSize="25">Focus on range</ListItem>
            <ListItem textSize="25">Find edge cases</ListItem>
          </List>
          <Heading size={6} textColor="secondary" caps>
            examples
          </Heading>
          <List>
            <ListItem textSize="25">
            https://github.com/przemyslawjanpietrzak/pyMonet/tree/develop/tests
            </ListItem>

          </List>

           <Heading size={6} textColor="secondary" caps>
            libs
          </Heading>
          <List>
            <ListItem textSize="25">https://github.com/HypothesisWorks/hypothesis</ListItem>
            <ListItem textSize="25">https://github.com/HypothesisWorks/hypothesis/tree/master/hypothesis-ruby</ListItem>
            <ListItem textSize="25">https://github.com/HypothesisWorks/hypothesis-java</ListItem>
            <ListItem textSize="25">https://github.com/dubzzz/fast-check</ListItem>

          </List>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary">
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            size={3}
            textColor="secondary"
          >
            Thank You ;*
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
