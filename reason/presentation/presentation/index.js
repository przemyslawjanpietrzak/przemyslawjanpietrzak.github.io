import React from "react";
import emljs from '../assets/elmjs.png';
import kotlinjs from "../assets/kotlinjs.png";
import tsjs from '../assets/tsjs.png';
import reasonjs from "../assets/reasonjs.png";
import rreact from '../assets/rreact.png';
import revery from '../assets/revery.png';
import rembrandt from "../assets/download.png";
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
            Reasonml JavaScript OCaml
          </Heading>
          <Text
            margin="10px 0 0"
            style={{ color: "#f80045" }}
            size={0.125}
            fit
            bold
          >
            Good Bad and Ugly
          </Text>
        </Slide>
       
        <Slide>
          <Image src={tsjs} />
        </Slide>
        <Slide>
          <Image src={kotlinjs} />
        </Slide>
        <Slide>
          <Image src={emljs} />
        </Slide>
        <Slide>
          <Image src={reasonjs} />
        </Slide>
        <Slide>
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Reasonml
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * Static typed
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Functional and OOP
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Not pure
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Immutable
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * JSX
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
          <Slide
            transition={["fade"]}
            bgColor="primary"
            textColor="tertiary"
          >
            <Heading
              size={6}
              textColor="secondary"
              style={{ color: "#f80045" }}
            >
              Functions
            </Heading>
            <CodePane
              lang="ocaml"
              theme="dark"
              source={`let fn = (a, b) => a + b;

let fn1 = () => {
  let var = 42;
  43;
}

fn1() // 43`}
            />
          </Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Functions
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let fn = (a, b) => a + b;

let fn1 = () => {
  let var = 42;
  43;
}

fn1() // 43`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Key Word Arguments
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let fn = (~argument1, ~argument2) => argument1 + argument1;

fn(~argument2=42, ~argument1=7);`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Data structures
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let arr = [|1,2,3,4|];
let lst = [1,2,3,4];
let record = {
  attr: "",
  attr1: 42,
  attr2: 4.4,
}
[] == [] // true
`}


          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Pipes
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let result = [1, 2, 3]
  |> map(a => a + 1)
  |> filter(a => a mod 2 === 0);

let result1 = , filter(a => a mod 2 === 0, ([1, 2, 3], map(a => a + 1)));
  `}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Curring
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let add = (a, b) => a + b;
let add1 = add(1);
let result = add1(2);`}
          />
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
            Type system
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Usage based types
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let add = (a, b) => a + b;

add(42, []); // This has type: 'a list But somewhere wanted: int
`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Usage based types
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let addFloats = (a, b) => a +. b;
let addStrings = (a, b) => a ++ b;
`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Usage based types
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let add = (a: int, b: int): int => a + b;
`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Records
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let get = () => ({
  attr: "",
}) // The record field attr can't be found.`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Records
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`type r = { attr: string };

let get = () => ({
  attr: "",
});`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Variants
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`type animal = Dog | Cat | Bird;`}
          />
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
            Pattern matching
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Absence handling
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`type option('a) = None | Some('a);

let fn = (maybeItem: option(int)) => switch (maybeItem) {
  | None => 0
  | Some(item) => item
}`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Value based
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let fn = (a: int) => switch (a) {
  | 0 => 0
  | 1 => 42
  | _ => 99999
}

`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Value based
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let fn = (items: list(int)) => switch (items) {
  | [] => 0
  | _ => 99999
}

`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Recursive
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let rec sum = (items: list(int)) => switch (items) {
  | [] => 0
  | [head, ...tail] => head + sum(tail)
}

`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Exception handling
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`switch([1, 2, 3, 4] |> List.filter(x => x mod 5 === 0)) {
  | item => "Found"
  | exception Not_found => "Not found"
}`}
          />
        </Slide>
        <Slide>
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Differences
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * No try catch (+/-)
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * No optional
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * No Union
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * no interfaces (weak polymorphism)
          </Text>
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
            Function however...
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            References
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let foo = ref(5);
let five = foo^; /* 5 */
foo := 6;
`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            OOP
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`type tesla = {.
  drive: int => int
};

let obj: tesla = {
  val hasEnvy = ref(false);
  pub drive = (speed) => {
    this#enableEnvy(true);
    speed
  };
  pri enableEnvy = (envy) => hasEnvy := envy
};
`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Mutable
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`type node = {
  name: nodeName,
  text: string,
  mutable position: int,
  attributes,
  handlers: list((string, option(eventHandler))),
  children: list(node),
};`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Imperative
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`let start = 1;
let end = 3;

for (x in start to end) {
  print_int(x);
};`}
          />
        </Slide>
        <Slide>
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Differences
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            * Focused on on best practices
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Allow to write other paradigms
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * But is it more difficult
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            style={{ color: "#f80045" }}
            textColor="secondary"
          >
            Chapter V
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Usage
          </Text>
        </Slide>
        <Slide>
          <Image src={rreact} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Reason React
          </Heading>
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`module App = {
  let component = ReasonReact.statelessComponent("App");
  let make = _children => {
    ...component,
    render: self =>
      <button> (ReasonReact.string("Hello!")) </button>,
  };
};

ReactDOMRe.renderToElementWithId(<App />, "id")`}
          />
        </Slide>
        <Slide>
          <Image src={revery} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045", marginTop: '-150px' }}
          >
           Revery UI 
          </Heading>
          <div id="small-code">
          <CodePane
          
            lang="ocaml"
            theme="dark"
            source={`
let init = app => {
  let win = App.createWindow(app, "test");

  let textHeaderStyle =
    Style.[
      backgroundColor(Colors.black),
      color(Colors.white),
      fontFamily("Roboto-Regular.ttf"),
      fontSize(24),
    ];

  let render = () => {
    <view
      style={Style.[
        position(Absolute),
        bottom(10),
        top(10),
        left(10),
        right(10),
        backgroundColor(Colors.blue),
      ]}>
      <view
        style={Style.[
          position(Absolute),
          bottom(0),
          width(10),
          height(10),
          backgroundColor(Colors.red),
        ]}
      />
      <image src="logo.png" style={Style.make(~width=128, ~height=64, ())} />
      <text style=textHeaderStyle> "Hello World!" </text>
      <view
        style={Style.[
          width(25),
          height(25),
          backgroundColor(Colors.green),
        ]}
      />
    </view>;
  };

  UI.start(win, render);
};

App.start(init);            
            `}
          />
          </div>
        </Slide>
        <Slide>
          <Image src={rembrandt} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045", marginTop: '-150px' }}
          >
           Rembrandt 

          </Heading>
          <div id="small-code">
          <CodePane
            lang="ocaml"
            theme="dark"
            source={`open Rembrandt.Elements;

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

Rembrandt.run( ~model=42, ~update, ~view= (model, dispatch) =>
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
  ()
);
`}
          />
          </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Reason Pros
          </Heading>
          <Text margin="10px 0 0" size={0.125} bold>
            * Great type system
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Functional and immutable by default
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Facebook support
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Optional imperative paradigm
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * JS syntax
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * JS/TS ports
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Reason Cons
          </Heading>
          <Text margin="10px 0 0" size={0.125} bold>
            * Forced variant way
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Hard to debug
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Much less popular than TS
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * No reactive libs
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * Ticky syntax
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Links
          </Heading>
          <Text margin="10px 0 0" size={0.125} bold>
            * https://egghead.io/courses/get-started-with-reason
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * http://2ality.com/2017/11/about-reasonml.html
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * https://reasonml.github.io/
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * https://reasonml.github.io/reason-react/
          </Text>
          <Text margin="10px 0 0" size={0.25} bold>
            * https://github.com/revery-ui/revery
          </Text>
          <Text margin="10px 0 0" size={0.25} bold >
          https://github.com/przemyslawjanpietrzak/rembrandt/
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
