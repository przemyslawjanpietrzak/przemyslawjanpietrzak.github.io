// Import React
import React from "react";
import cons from "../assets/cons.png";
import elm1 from "../assets/elm1.png";
import elm2 from "../assets/elm2.0.png";
import elm3 from "../assets/elm3.0.png";
import elm4 from "../assets/elm4.png";
import intro from "../assets/intro.png";
import elmBg from "../assets/elm-bg.png";
import elmArch from "../assets/alm-arch1.png";
import jsStack from "../assets/js-stack.png";
import elmo from "../assets/elmo1.png";
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
  Link,
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
            A może by tak rzucić to wszystko i nauczyć się Elma
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

wc(grep('waring', lint()))
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
sumThree : Int -> Int -> Int -> Int
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
      <button onClick={this.decrement.bind(this)}> - </button>
      <div>{ this.model }</div>
      <button onClick={this.increment.bind(this)}> + </button>
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

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            batteries included
          </Heading>
          <Image src={jsStack} height="500" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why elm?
          </Heading>
          <List>
            <ListItem>No runtime error</ListItem>
            <ListItem>Testable</ListItem>
            <ListItem>Batteries included</ListItem>
            <ListItem>Organized</ListItem>
            <ListItem>Easy debug</ListItem>
            <ListItem>Light and fast</ListItem>
            <ListItem>Compilator hints</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6}  caps textColor="tertiary">
            "Dobry język nie pozwala Ci pisać dobrego kodu, tylko zabrania pisania złego"
          </Heading>
          <span style={{ color: 'black', fontStyle: 'italic', fontWeight: 600 }}>
            zasłyszane w Fat Bobie
          </span>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            elmentary dear watson
          </Heading>
          <List>
            <ListItem>
              <a href="https://www.youtube.com/watch?v=rU-W6557Dos&t=1289s">
                Why ELM?
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.youtube.com/watch?v=IcgmSRJHu_8&t=1057s">
                Making Impossible States Impossible
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.youtube.com/watch?v=jl1tGiUiTtI">
                Convergent Evolution
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            ELM architecture in JS
          </Heading>
          <Link margin="10px 0 0" textColor="tertiary" size={0.25} fit bold  href="https://github.com/redux-loop/redux-loop">
            link
          </Link>

          <CodePane
            lang="haskell"
            theme="light"
            source={`// redux-loop 
function reducer(state = initialState, action) {
  switch(action.type) {
  case 'INIT':
    return loop(
      {...state, initStarted: true},
      Cmd.run(fetchUser, {
        successActionCreator: userFetchSuccessfulAction,
        failActionCreator: userFetchFailedAction,
        args: ['123']
      })
    );

  case 'USER_FETCH_SUCCESSFUL':
    return {...state, user: action.user};

  case 'USER_FETCH_FAILED':
    return {...state, error: action.error};

  default:
    return state;
  }
}

`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            ELM architecture in Reason
          </Heading>
          <Link margin="10px 0 0" textColor="tertiary" size={0.25} fit bold href="https://github.com/przemyslawjanpietrzak/rembrandt">
            
              link
            
          </Link>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="ocaml"
                    theme="light"
                    source={` /* rembrandt */ 
open Rembrandt.Elements;
type model = int;
type action =
  | Add
  | Sub
  | Twice;

let update =
    (model: model, action: action): (model, Command.command('action)) =>
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
);
`}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Any questions?
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            CSS in ELM
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="haskell"
                    theme="light"
                    source={`-- elm-css
logo : Html msg
logo =
    img
        [ src "logo.png"
        , css
            [ display inlineBlock
            , padding (px 20)
            , border3 (px 5) solid (rgb 120 120 120)
            , hover
                [ borderColor theme.primary
                , borderRadius (px 10)
                ]
            ]
        ]
        []

`}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="haskell"
                    theme="light"
                    source={`-- elm-stylesheet
main = myStylesheet : Stylesheet
myStylesheet =
  let
    myClassStyles =
      newRuleSet
        |> withSelectors
          [ Class selectors.myClass ]
        |> withDeclarations
          [ ("font-family", FontStack fonts)
          , ("font-weight", Num weight.normal)
          , ("font-size", Unit 2 Em)
          , ("color", Col palette.blue)
          , ("text-align", Str "center")
          ]
`}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Thank you :*
          </Heading>
          <Image src={elmo} height="500" />
        </Slide>
      </Deck>
    );
  }
}
