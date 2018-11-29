// Import React
import React from "react";
// Import Spectacle Core tags
import espeo from '../assets/espeo.png';
import cho from '../assets/chopokodzic.png';
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
            You don't know TypeScript
          </Heading>
          <Text margin="10px 0 0" style={{ color: '#f80045'}}  size={0.25} fit bold>
            https://przemyslawjanpietrzak.github.io/przemyslawjanpietrzak.github.io/you-dont-know-ts/dist
          </Text>
        </Slide>

        <Slide>
          <Image src={espeo} />
        </Slide>

         <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: '#f80045'}}  caps>
            Part I
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

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: '#f80045'}}   caps>
            Part II
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold >
            Compiler options
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Dead code elimination
          </Heading>
          <CodePane
            lang="ts"
            theme="light"
            source={`"noUnusedParameters": true,
"noUnusedLocals": true,

const fn = (_unusedArg) => 42 // OK`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            "strictFunctionTypes": true,
          </Heading>
          <CodePane
            lang="ts"
            theme="light"
            source={`const fn = (arg: number, arg1: (string) => string) => {}

fn(42, str => str / 2); // ERROR`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            "noImpicitAny": true,
          </Heading>
          <CodePane
            lang="ts"
            theme="light"
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
          <Heading size={6} style={{ color: '#f80045'}}  caps>
            Part III
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            TSLint & Sonar
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Text margin="10px 0 0" size={0.25} bold>
            {`no-unsafe-any: {“severity”: “warning”}`}
          </Text>
          <CodePane
            lang="python"
            theme="light"
            source={`const fn = (arg) => 42; // ERROR
let arr = []; // ERROR
let scoped; // ERROR
`}
          />
          <br />
          <CodePane
            lang="python"
            theme="light"
            source={`if [ $(npm run lint | grep WARNING | wc -l) -gt 100 ]; then exit 1; fi`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Text margin="10px 0 0" size={0.25} bold>
            {`noImplicitReturns”: true`}
          </Text>
          <CodePane
            lang="python"
            theme="light"
            source={`const fn = () => {
    if (true) {
        return; // ERROR: Not all code paths return a value.
    }
    if (false) {
        return 42;
    }
}`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Text margin="10px 0 0" size={0.25} bold>
            {`no-commented-code: true`}
          </Text>

          <CodePane
            lang="ts"
            theme="light"
            source={`// const arg = fn(42); ERROR`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Text margin="10px 0 0" size={0.25} bold>
            Make code simple again
          </Text>
          <br/>
          “parameters-max-number”: [true, 10]
          <br />
          “cognitive-complexity”: [true, 10]
          <br />
          “no-big-function”: [true, 42]
          <br/>
          <br/>
          <CodePane
            lang="ts"
            theme="light"
            source={`// tslint:disable-next-line:cognitive-complexity
public complexMethod() {`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Text margin="10px 0 0" size={0.25} bold>
            {`"no-inferrable-types": true`}
          </Text>
          <CodePane
            lang="ts"
            theme="light"
            source={`@Output() onChange = new EventEmitter(); // Explicit type parameter needs to be provided to the constructor
@Output() onChange = new EventEmitter<number>(); // OK
@Output() onChange = new EventEmitter<any>(); // also OK`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6}  style={{ color: '#f80045'}}  caps>
            Part IV
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Tricks
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Property Accessing
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`interface Data {
  field: {
    name: string;
  }
}

export const fn = (arg: Data['field']) => {
  return arg.name; // { name: string }
}

export const fn1 = (name: Data['field']['name']) => {
  return name; // string
}`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Big integer
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`const bigNumber = 123_456_789;`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            readonly & abstract
          </Heading>
          <CodePane
            lang="ts"
            theme="light"
            source={`abstract class AbstractService {
  public method() {}
}

class Service extends AbstractService {
  public readonly field = [42];
}

const service = new Service();
service.field.push(42); // OK
service.field = [43]; // ERROR

const abstractService = new AbstractService(); // ERROR

`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Tuple and dict
          </Heading>
          <CodePane
            lang="ts"
            theme="light"
            source={`const fn = (arg: { [key: string]: number }) => {
  const val =  arg.key1 + arg.key2 + arg.key3; // number
  const val1 = arg.totallyRandomKey; // number
  const val2 = arg['wpłynąłem na suchego przestwór oceanu']; // number
};

let tuple: [string, number];
tuple = ["hello", 10]; // OK
tuple = [10, "hello"]; // Error
let str = tuple[0]; // string
let num = tuple[1]; // number`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Ampersand operator
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`const fn = (arg: { key: string } & { key1: number }) => 42;

fn({ key: '42' }); // ERROR
fn({ key1: 42 }); // ERROR
fn({ key: '42', key1: 42 }); // GOOD

type tableRow = Item & { selected?: boolean };`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Optional types
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`interface Data {
  fn(arg: string): Array<string>
  fn(arg: number): null
}

let data: Data;
const a = data.fn(42); // null
const b = data.fn("str"); // Array<string>`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Optional types #2
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`export interface API {
    "/users": { params: [], response: IUser[]}
    "/user/:id": { params: [number], response: IUser}
  }`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Optional types #3
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`type If<A, T, U> = A extends true ? T : U;

let a: If<true, string, number>; // string
let b: If<false, string, number>; // number`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Maped types
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`export type DeepReadonlyObject<A> = { readonly [K in keyof A]: DeepReadonly<A[K]> };
type DeepReadonlyObject<A> = { readonly [K in keyof A]: DeepReadonly<A[K]> }

type X = DeepReadonlyObject<{ key: string, key1: number }>; // { readonly key: any; readonly key1: any; }
`}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Optional maped types
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`export type Omit<A extends object, K extends string | number | symbol> = Pick<A, Exclude<keyof A, K>>

type X = Omit<{ key: string, key1: string }, "key"> //  { key1: string; }

type Diff<A extends object, K extends keyof A> = Omit<A, K> & Partial<Pick<A, K>>`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Grande finale
          </Heading>
          <CodePane
            lang="python"
            theme="light"
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
          <Heading size={6} style={{ color: '#f80045'}} textColor="secondary">
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
              <a href="https://github.com/mattiamanzati/"> Author of code from last slide</a>
            </ListItem>
            <ListItem textSize="25">
              <a href="https://github.com/przemyslawjanpietrzak/RxTowerDefense/blob/develop/tsconfig.json">compiler config</a>
            </ListItem> 
            <ListItem textSize="25">
              <a href="https://github.com/przemyslawjanpietrzak/RxTowerDefense/blob/develop/tslint.json">linter config</a>
            </ListItem> 
          </List>
        </Slide>
        
        <Slide>
          <Heading size={6} style={{ color: '#f80045'}} >
           Thank you :*
          </Heading>

        </Slide>
      </Deck>
    );
  }
}
