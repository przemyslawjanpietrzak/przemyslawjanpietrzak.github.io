// Import React
import React from "react";
import cons from "../assets/cons.png";
import elm1 from "../assets/elm1.png";
import elm2 from "../assets/elm2.0.png";
import elm3 from "../assets/elm3.0.png";
import elm4 from "../assets/elm4.png";
import intro from "../assets/intro.png";
import elmBg from "../assets/elm-bg.png";
import elmArch from '../assets/elm-arch.png';
// Import Spectacle Core tags
import {
  Deck,
  Heading,
  CodePane,
  ListItem,
  List,
  Table,
  TableHeaderItem,
  TableItem,
  TableRow,
  TableBody,
  Image,
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
            Forgot everything and learn elm
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={0.25} fit bold>
            https://przemyslawjanpietrzak.github.io/przemyslawjanpietrzak.github.io/elm/dist
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Image src={cons} height="500" />
        </Slide>

        <Slide transition={["fade"]}>
          <Image src={elm1} height="500" />
        </Slide>

        <Slide transition={["fade"]}>
          <Image src={elm2} height="500" />
        </Slide>

        <Slide transition={["fade"]}>
          <Image src={elm3} height="500" />
        </Slide>

        <Slide transition={["fade"]}>
          <Image src={elm4} height="500" />
        </Slide>

        <Slide transition={["fade"]}>
          <Image src={intro} height="500" />
        </Slide>

        <Slide transition={["fade"]}>
          <Image src={elmBg} height="500" />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Elm time
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="haskell"
                    theme="light"
                    source={`
const add = (x, y) => x + y;

[1,2,3,4]
[1].concat([2,3,4])
[1].concat([2]).concat([3]).concat([4])

if (maybeList.value) {
  return maybeList.value;
} else {
  return [];
}

const point = { x: 3, y: 4 }
const origin = { x: 0, y: 0 };
[ origin, point ].map(({ x }) => x)
{ ...point, x: point.x + 1, y: point.y + 1 }

const squares = range(0, 1000).map(i => i ** 2)
`}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="haskell"
                    theme="light"
                    source={`
add x y = x + y

[1,2,3,4]
1 :: [2,3,4]
1 :: 2 :: 3 :: 4 :: []

case maybeList of
  Just xs -> xs
  Nothing -> []

point = { x = 3, y = 4 }
origin = { x = 0, y = 0 }
List.map .x [ origin, point ]
{ point | x = point.x + 1, y = point.y + 1 }

squares =
  List.map (\\n -> n^2) (List.range 1 100)
`}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Let it be
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="haskell"
                    theme="light"
                    source={`
const square = x => x ** 2;
square(2); // 4

const doubleAndIncrease = (x) => {
  const y = x * 2;
  return y + 1;
};
doubleAndIncrease(2) // 5
`}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="haskell"
                    theme="light"
                    source={`
square x = x ^ 2
square 2 -- 4

doubleAndIncrease x =
  let
    y = x * 2
  in y + 1
doubleAndIncrease 2 -- 5
`}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Pipe fiction
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="haskell"
                    theme="light"
                    source={`
const calculate = (x) => {
  return square(
    add(
      1, multiply(2, x)
    )
  );
};
`}
                  />
                  <hr />
                  <CodePane
                    lang="javascript"
                    theme="light"
                    source={`
count(filterWarnings(getLinterOutput()))
`}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="haskell"
                    theme="light"
                    source={`
let calculate x =
    |> multiply 2
    |> add 1
    |> square




`}
                  />
                  <hr />
                  <CodePane
                    lang="js"
                    theme="light"
                    source={`#/bin/bash

npm run lint | grep warring | wc -l
`}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Haskell Curry (1900 - 1982)
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="javascript"
                    theme="light"
                    source={`
const sumThree = x => y => z => x + y + z;


const sumTwo = sumThree(0);


const addFour = sumTwo(4);


addFour(5) // 9


sumTwo(4)(5) // 9

`}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="haskell"
                    theme="light"
                    source={`
sumThree x y z = x + y + z
-- <function> : number -> number -> number -> number

sumTwo = sumThree 0
-- <function> : number -> number -> number

addFour = sumTwo 4
-- <function> : number -> number

addFour 5
-- 9 : number

sumTwo 4 5
-- 9 : number
`}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Pattern matching
          </Heading>

          <CodePane
            lang="haskell"
            theme="light"
            source={`case maybeList of
  Just xs -> xs
  Nothing -> []

case xs of
  [] ->
    Nothing
  first :: rest ->
    Just (first, rest)

case n of
  0 -> 1
  1 -> 1
  _ -> fib (n-1) + fib (n-2)
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Union types
          </Heading>

          <CodePane
            lang="haskell"
            theme="light"
            source={`type MyThing
AThink  = AString String
  | AnInt Int
  | ATuple (String, Int)

unionFn : MyThing -> String
unionFn thing =
  case thing of
    AString s -> "It was a string: " ++ s
    AnInt i -> "It was an int: " ++ toString i
    ATuple (s, i) -> "It was a string and an int: " ++ s ++ " and " ++ toString i
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Elm framework
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="javascript"
                    theme="light"
                    source={`const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state - 1;
  }
}

class View extends React.component {
  render() {
    return <div>
      <button onClick={this.decrement.bind(this)}>+</button>
      <div>{ this.model }</div>
      <button onClick={this.increment.bind(this)}>+</button>
    </div>
  }
}

`}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="haskell"
                    theme="light"
                    source={`main =
  Browser.sandbox { init = 0, update = update, view = view }

type Msg = Increment | Decrement

update msg model =
  case msg of
    Increment ->
      model + 1

    Decrement ->
      model - 1

view model =
  div []
    [ button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (String.fromInt model) ]
    , button [ onClick Increment ] [ text "+" ]
    ]
`}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Elm architecture
          </Heading>
          <Image src={elmArch} height="500" />
        </Slide>
      </Deck>
    );
  }
}
