// Import React
import React from "react";
// Import Spectacle Core tags
import me from '../assets/me2.png';
import wherets from '../assets/where-ts.png';

import {
  Deck,
  Heading,
  CodePane,
  ListItem,
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
            TypeScript: Collected works
          </Heading>
          <Text
            margin="10px 0 0"
            style={{ color: "#f80045", fontSize: '25px' }}
            bold
          >
            https://github.io/przemyslawjanpietrzak
          </Text>
          <Text
            margin="10px 0 0"
            style={{ color: "#f80045", fontSize: '25px' }}
            bold
          >
            https://twitter.com/przemyslawjanp
          </Text>
        </Slide>

        <Slide>
          <Image style={{ width: '90%'}} src={me} />
        </Slide>

        <Slide>
          <Image style={{ width: '60%'}} src={wherets} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }}>
            Chapter I
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Migration
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            @ts-check
          </Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            package.json
          </Heading>
          <CodePane
            lang="json"
            theme="dark"
            source={`"type-check": "tsc src/main.js --allowJs --out /dev/null",`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Migrate
          </Heading>
          <CodePane
            lang="python"
            theme="dark"
            source={`for f in src/**/*.js; do
  git mv "$f" "\${f%.js}.ts"
done
`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }}>
            Chapter II
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Compiler options
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Dead code elimination
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`"noUnusedParameters": true,
"noUnusedLocals": true,

const fn = (_unusedArg) => 42 // OK`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            strictFunctionTypes: true,
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
            "noImpicitAny": true,
          </Heading>
          <CodePane
            lang="typescript"
            source={`// ERROR
const fn = (arg) => arg;

// OK
const fn1 = (arg: any) => arg;`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            "strictNullChecks": true,
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`document.querySelector('#id').getAttribute('class'); // ERROR;

const element = document.querySelector('#id');
if (element !== null) {
  element.getAttribute('id'); // OK
}

(document.querySelector('#id') as HTMLElement).getAttribute('id'); // OK
`}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Honorable mentions
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`"noImplicitReturns": true,
"noImplicitThis": true,
"strictBindCallApply": true,
"paths": {
  "@core/*": [
    "app/*"
  ],
}`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Chapter III
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Cheap Tricks
          </Text>
        </Slide>

         <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            Auto types
          </Heading>
<div style={{ display: 'flex', width: '50vw' }}>
                  <CodePane style={{ width: '33vw' }} lang="typescript" source={`const fn = (): number => 42;
const variable: string = '';
public attr: boolean = true;
[1, 2, 3].map((x: number) => x + 1);
const number$ = of<number>(42);
`} />
                  <CodePane style={{ width: '33vw' }} lang="typescript" source={`const fn = () => 42;
const variable = '';
public attr = true;
[1, 2, 3].map(x => x + 1);
const number$ = of(42);
`} />
                </div>
        </Slide>


        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Property Accessing
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
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
            lang="typescript"
            theme="dark"
            source={`const bigNumber = 123_456_789;`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Readonly
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`class Service extends AbstractService {
  public readonly url; = '...';
}

const service = new Service();
service.field = '???'; // ERROR
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Tuple and dict
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`const fn = (arg: { [key: string]: number }) => {
  const val =  arg.key1 + arg.key2 + arg.key3; // number
  const val1 = arg.totallyRandomKey; // number
  const val2 = arg['wpłynąłem na suchego przestwór oceanu']; // number
};

let tuple: [string, number];
tuple = ["hello", 10]; // OK
tuple = [10, "hello"]; // Error
let str = tuple[0]; // string
let num = tuple[1]; // number
let len = tuple.length // 2
`}
          />
        </Slide>

             <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Part IV
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Zbiory
          </Text>
        </Slide>
      
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Merged types
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`const fn = (arg: { key: string } & { key1: number }) => 42;

fn({ key: '42' }); // ERROR
fn({ key1: 42 }); // ERROR
fn({ key: '42', key1: 42 }); // GOOD

type tableRow = Item & { selected?: boolean };`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Union types
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`const fn = (arg: string | number) => {
    arg.split(''); // ERROR
    arg / 2; // ERROR
    arg + 1; // OK
    if (typeof arg === "string") {
        arg.split('');
    }
    if (typeof arg === "number") {
        arg / 2;
    }
}
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Unknown types
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`function fn(arg: unknown) {
  if (typeof arg === "string" || typeof arg === "number") {
      arg;  // string | number
  }
  if (x instanceof Error) {
      arg;  // Error
  }
  if (isFunction(x)) {
      arg;  // Function
  }
}`}
          />
        </Slide>

         <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Never types
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`function error(x): never {
  throw new Error("Unexpected object: " + x);
}

let variable = error(42); // never
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Never types
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`function(arg: never) {
  ...
}`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Chapter VI
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Values as types
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Based on argument
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`interface Data {
  fn(arg: -1): never
  fn(arg: 0): []
  fn(arg: number): Array<number>
}

let data: Data;
const a = data.fn(42); // Array<number>
const c = data.fn(0); // [];
const d = data.fn(-1); // never
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Based on key
          </Heading>
          <CodePane
            lang="typescript"
            source={`export interface API {
    "/users": { params: [], response: IUser[]}
    "/user/:id": { params: [number], response: IUser}
}`}
          />
        </Slide>

         <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Chapter VII
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Weird parts
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Constant
          </Heading>
          <CodePane lang="typescript" source={`const someReduxAction = () => ({
    type: ActionTypes.Some,
}); // () => { type: type: ActionTypes }

const otherReduxAction = () => ({
  type: ActionTypes.Other,
} as const); // () => { type: type: ActionTypes.Other }
`} />
        </Slide>


        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Resolve Union
          </Heading>
          <CodePane lang="typescript" source={`const some reducer(state, action: SomeAction | OtherAction) => {
  if (action.type === ActionTypes.Some) {
    action.payload; //SomeAction
  }
}`} />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Generics extends
          </Heading>
          <CodePane lang="typescript" source={`function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
function loggingIdentity<T extends Array<any>(arg: T): T[number] {
    console.log(arg.length); // OK
    return arg[0];
}

loggingIdentity(42) // ERROR
loggingIdentity([]) // OK
loggingIdentity([42]) // number
`} />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
           Keyof 
          </Heading>
          <CodePane lang="typescript" source={`interface API {
    "/users": { params: [], response: User[]}
    "/user/:id": { params: [number], response: User}
}

let fetch = <T extends keyof API>(api: API, url: T): API[T]  => {
    return api[url];
}

let r = fn({} as API, '/users'); // { params: [], response: User[]}
let r1 = fn({} as API, '/uSers'); // ERROR
`} />
        </Slide>


        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Optional extends
          </Heading>
          <CodePane
            lang="typescript"
            source={`type If<A extends boolean, T, U> = A extends true ? T : U;

let a: If<true, string, number>; // string
let b: If<false, string, number>; // number`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Optional extends
          </Heading>
          <CodePane
            lang="typescript"
            source={`const first = (arr) => arr[0]

const first1 =
   <T extends any[]>(arr: T): T extends [] ? never : T[number] => arr[0];

let never = first1([]); // never
let num = first1([42]); // number`}
          />
        </Slide>

                <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Infer
          </Heading>
          <CodePane
            lang="typescript"
            source={`type ReturnType<T extends Function> =
    T extends (...args: any[]) => infer R ? R : never;

type R = ReturnType<() => 42> // 42`}
          />
        </Slide>

       <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Maped types
          </Heading>
          <CodePane
            lang="typescript"
            source={`type ReadonlyObject<A> = { readonly [K in keyof A]: <A[K]> };
type DeepReadonlyObject<A> = { readonly [K in keyof A]: DeepReadonly<A[K]> }

type X = DeepReadonlyObject<{ key: string, key1: number }>; // { readonly key: any; readonly key1: any; }
`}
          />
        </Slide>


        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Maped types examples
          </Heading>
          <CodePane
            lang="typescript"
            source={`type Optional<A extends object> = { [K in keyof A]?: <A[K]> };
type Required<A extends object> = { [K in keyof A]-?: <A[K]> };}
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Optional mapped types # json api
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`interface User {
  id: string;
  name: string;
  age: number;
  courses: Array<Course>
}

interface UserResponse {
  id: string;
  attributes: {
    name: string;
    age: number
  }
  relationships { courses: { data: []}}
}`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Examples
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`interface Response<T extends { id: string }, R = void> {
  id: string;
  type: string;
  attributes: Omit<T, 'id'>;
  relationships: R extends void ? void : { [key: string]: { data: Array<R> } };
}

type UserResponse = Response<User, Course>;`}
          />
        </Slide>


        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Grande finale
          </Heading>
          </Slide>
        <Slide transition={["fade"]}>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`type EmptyTuple = [];

type TupleLength<T extends Array<any>> = T["length"];

type PrependTuple<A, T> = T extends Array<any>
  ? (((a: A, ...b: T) => void) extends (...a: infer I) => void ? I : [])
  : [];

type NumberToTuple<N extends number, L extends Array<any> = EmptyTuple> = {
  true: L;
  false: NumberToTuple<N, PrependTuple<1, L>>;
}[TupleLength<L> extends N ? "true" : "false"];

type Increment<N extends number> = TupleLength<PrependTuple<1, NumberToTuple<N>>>;

type T = Increment<42>`}
          />
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
