// Import React
import React from "react";
// Import Spectacle Core tags
import espeo from "../assets/espeo.png";
import ts from "../assets/ts.png";
import scala from "../assets/scala.png";
import frameworks from "../assets/frameworks.png";
import cho from "../assets/chopokodzic.png";

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
  TableBody,
  TableHeaderItem,
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
            TypeScript for Java developers
          </Heading>
          <Text
            margin="10px 0 0"
            style={{ color: "#f80045" }}
            size={0.25}
            fit
            bold
          >
            https://przemyslawjanpietrzak.github.io/przemyslawjanpietrzak.github.io/ts-for-java-dev/dist
          </Text>
        </Slide>

        <Slide>
          <Image src={espeo} />
        </Slide>

        <Slide>
          <Image src={ts} />
          <List style={{ textAlign: "center" }}>
            <ListItem textSize="20">JavaScript superset</ListItem>
            <ListItem textSize="20">OOP & static typed language</ListItem>
            <ListItem textSize="20">Without own runtime</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            size={3}
            textColor="secondary"
          >
            What about JVM languages?
          </Heading>
          <Image src={scala} width={500} />
        </Slide>

        <Slide>
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            size={3}
            textColor="secondary"
          >
            Frontend Frameworks
          </Heading>
          <Image src={frameworks} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Proglog
          </Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Types declarations
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`class Object {
  attribute: string;

  method(arg1: string, agr2: boolean): number {
    ...
  }
}`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Access
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`class Object {
  private attribute: string;

  public method(arg1: string, agr2: boolean): number {
    ...
  }

  protected methdod1() {
    ...
  }
}`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Abstract and final
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`abstract class Object {
  public readonly url = '127.0.0.1';
}`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Generics
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`const fn = <T>(arg: T): Array<T> => [arg];
const variable = fn(3) // Array<number>;
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Interfaces
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`interface Developer {
  name: string;
  code(lang: string): string;
}

class Human implements Developer {
  name = 'John';
  code(lang: string) {
    return 'TypeScript';
  }
}`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Enums
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`enum Response {
  No = 0,
  Yes = 1,
}

const respond = (recipient: string, message: Response): void {
    // ...
}

respond("Princess Caroline", Response.Yes)
`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Chapter I
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Migration
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Demo (migracja)
          </Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            package.json
          </Heading>
          <CodePane
            lang="json"
            theme="light"
            source={`"type-check": "tsc bundle.js --allowJs --noEmit",
"build": "npm run lint && npm test && npm run type-check && npm run bundle"
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Migrate
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`for f in src/**/*.js; do
  git mv "$f" "\${f%.js}.ts"
done
`}
          />
        </Slide>

       
        {/* <Slide transition={["fade"]}>
          <Text margin="10px 0 0" size={0.25} bold>
            {`noImplicitReturns”: true`}
          </Text>
          <CodePane lang="python" theme="light" source={`const fn = () => {
    if (true) {
        return; // ERROR: Not all code paths return a value.
    }
    if (false) {
        return 42;
    }
}`} />
        </Slide> */}

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Chapter III
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Differences
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Auto types
          </Heading>

          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="typescript"
                    source={`const fn = (): number => 42;
const variable: string = '';
public attr: boolean = true;
[1, 2, 3].map((x: number) => x + 1);
const number$ = observableOf<number>(42);
`}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="typescript"
                    source={`const fn = () => 42;
const variable = '';
public attr: boolean = false;
[1, 2, 3].map(x => x + 1);
const number$ = observableOf(42);
`}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Union types
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`const fn = (arg: string | number) => {
    arg.split(''); // Property 'split' does not exist on type 'string | number'.
    arg / 2; // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    arg + 1; // OK
    if (typeof arg === "string") {
        return arg.split('');
    }
    if (typeof arg === "number") {
        return arg / 2;
    }
}
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Any type
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`const fn = (explicite: any, implicite) => {
  explicite *= 42;
  implicite.map(i => i + 2);
  explicite.notExistingMethod();
  // no compilation error
}
`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Part III
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Compiler options
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Dead code elimination
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold style={{ color: "#f80045" }}>
            tsconfig.json
          </Text>
          <CodePane
            lang="json"
            theme="dark"
            source={`"noUnusedParameters": true,
"noUnusedLocals": true,
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            "strictFunctionTypes": true,
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`const fn = (arg: number, arg1: (string) => string) => {}

fn(42, str => str / 2); // ERROR`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            "noImplicitThis": true,
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`function fn() {
  console.log(this); // 'this' implicitly has type 'any' because it does not have a type annotation.
}

class Obj {
  method() {
    console.log(this); // OK
    function fn() {
      console.log(this); // 'this' implicitly has type 'any' because it does not have a type annotation.
    }
  }
}`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            "noImpicitAny": true,
          </Heading>
          <CodePane
            lang="ts"
            theme="dark"
            source={`// WRONG
const fn = (arg) => arg;

// GOOD
const fn1 = (arg: any) => arg;

// GOOD
const fn2 = (arg: number) => arg;

// ALSO GOOD
[1,2,3].map(item => item + 1);`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            "strictNullChecks": true,
          </Heading>
          <CodePane
            lang="ts"
            theme="light"
            source={`document.querySelector('#id').getAttribute('class') // ERROR;

(document.querySelector('#id') as HTMLElement).getAttribute('class')

const element = document.querySelector('#id');
if (element !== null) {
  element.getAttribute('#id);
}`}
          />
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Part IV
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Tricks
          </Text>
        </Slide>

        {/* <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Property Accessing
          </Heading>
          <CodePane lang="python" theme="light" source={`interface Data {
  field: {
    name: string;
  }
}

export const fn = (arg: Data['field']) => {
  return arg.name; // { name: string }
}

export const fn1 = (name: Data['field']['name']) => {
  return name; // string
}`} />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Big integer
          </Heading>
          <CodePane lang="python" theme="light" source={`const bigNumber = 123_456_789;`} />
        </Slide> */}

        {/* <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Ampersand operator
          </Heading>
          <CodePane lang="python" theme="light" source={`const fn = (arg: { key: string } & { key1: number }) => 42;

fn({ key: '42' }); // ERROR
fn({ key1: 42 }); // ERROR
fn({ key: '42', key1: 42 }); // GOOD

type tableRow = Item & { selected?: boolean };`} />
        </Slide> */}

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Generics extends
          </Heading>
          <CodePane
            lang="typescript"
            source={`function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
              Conditional Generics
          </Heading>
          <CodePane
            lang="typescript"
            source={`type If<A, T, U> = A extends true ? T : U;

let a: If<true, string, number>; // string
let b: If<false, string, number>; // number`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Mapped types
          </Heading>
          <CodePane
            lang="typescript"
            source={`export type DeepReadonlyObject<A> = { readonly [K in keyof A]: DeepReadonly<A[K]> };
type DeepReadonlyObject<A> = { readonly [K in keyof A]: DeepReadonly<A[K]> }

type X = DeepReadonlyObject<{ key: string, key1: number }>; // { readonly key: any; readonly key1: any; }
`}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Optional mapped types
          </Heading>
          <CodePane
            lang="typescript"
            source={`export type Omit<A extends object, K extends string | number | symbol> = Pick<A, Exclude<keyof A, K>>

type X = Omit<{ key: string, key1: string }, "key"> //  { key1: string; }

type Diff<A extends object, K extends keyof A> = Omit<A, K> & Partial<Pick<A, K>>`}
          />
        </Slide>

        {/* <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Class as object
          </Heading>
          <CodePane
            lang="typescript"
            source={`export interface Type<T> extends Function {
  new (...args: any[]): T;
}

function factory<T extends Type<any>>(
  Input: T,
  name?: string,
): {
  new (...args): T;
} {
  class Mixin extends Input { }
  
  return Mixin;
}`}
          />
        </Slide> */}

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Grande finale
          </Heading>
          <CodePane
            lang="typescript"
            source={`type ZeroTuple = [];
type PrependTuple<A, T> = T extends Array<any>
  ? (((a: A, ...b: T) => void) extends (...a: infer I) => void ? I : [])
  : [];
type TupleLength<T extends Array<any>> = T["length"];

type NumberToTuple<N extends number, L extends Array<any> = ZeroTuple> = {
  true: L;
  false: NumberToTuple<N, PrependTuple<1, L>>;
}[TupleLength<L> extends N ? "true" : "false"];

type Increment<N extends number> = TupleLength<PrependTuple<1, NumberToTuple<N>>>;

type T = Increment<42>`}
          />
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }} textColor="secondary">
            Btw We're hiring!
            <Image src={cho} />
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            Links
          </Heading>
          <List>
            <ListItem textSize="20">
              <a href="https://github.com/SonarSource/SonarTS">Sonar to TS</a>
            </ListItem>
            <ListItem textSize="20">
              <a href="https://github.com/gcanti/typelevel-ts">TS type utils</a>
            </ListItem>
            <ListItem textSize="20">
              <a href="https://github.com/mattiamanzati/">
                {" "}
                Author of code from last slide
              </a>
            </ListItem>
            <ListItem textSize="25">
              <a href="https://github.com/przemyslawjanpietrzak/RxTowerDefense/blob/develop/tsconfig.json">
                compiler config
              </a>
            </ListItem>
            <ListItem textSize="25">
              <a href="https://github.com/przemyslawjanpietrzak/RxTowerDefense/blob/develop/tslint.json">
                linter config
              </a>
            </ListItem>
          </List>
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
