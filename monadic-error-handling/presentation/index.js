// Import React
import React from "react";
import golang from "../assets/golang.png";
import scala from "../assets/scala.png";
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
            Monadic Error Handling
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={0.25} fit bold>
            https://przemyslawjanpietrzak.github.io/przemyslawjanpietrzak.github.io//monadic-error-handling/#/step-1
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Classic error handling
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`
def do():
  if err
      raise MyCustomException
  return data`}
          />
          <CodePane
            lang="python"
            theme="light"
            source={`
try:
    data = do()
    handle(data)
except MyCustomException as e:
    handle(e)`}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Later
          </Heading>
          <CodePane
            lang="python"
            theme="light"
            source={`
def do():
    if err
        raise MyCustomException
    elif other_err:
        raise MyAnotherCustomException
    return data
    
try:
    data = do()
    handle(data)
except MyCustomException as e:
    handle(e)
except MyAnotherCustomException as e:
    handle(e)`}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={6} textColor="secondary" caps>
                  Something simpler?
                </Heading>
              </TableItem>
              <TableItem>
                <Image src={golang} height="75" />
              </TableItem>
            </TableRow>
          </Table>

          <CodePane
            lang="go"
            theme="light"
            source={`
err, f := os.Open("filename.ext")
if err != nil {
    log.Fatal(err)
}
// do something with the open *File f:

err, _ := os.Create("/tmp/file")
if err != nil {
    panic(err)
}`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={6} textColor="secondary" caps>
                  What about scala?
                </Heading>
              </TableItem>
              <TableItem>
                <Image src={scala} height="75" />
              </TableItem>
            </TableRow>
          </Table>

          <CodePane
            lang="go"
            theme="light"
            source={`
val in = Console.readLine("Type Either a string or an Int: ")
val result: Either[String, Int] = try {
    Right(in.toInt)
  } catch {
    case e: Exception =>
      Left(in)
}

println(result match {
  case Right(x) => "Success :)"
  case Left(x)  => "Error :("
})`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={6} textColor="secondary" caps>
                  More Either
                </Heading>
              </TableItem>
            </TableRow>
          </Table>
          <CodePane
            lang="python"
            theme="light"
            source={`
from pymonet.either import Left, Right

def divide(divided, divider):
    if divider == 0:
        return Left('can not divide by 0')
    return Right(divided, divider)

def handle_error(value):
    print ('error {}'.format(value))

def handle_success(value):
    print ('success {}'.format(value))

divide(42, 0)
    .map(lambda value: value + 1)
    .case(error=handle_error, success=handle_success)
# error can not divide by 0

divide(42, 1)
    .map(identity, lambda value: value + 1)
    .case(error=handle_error, success=handle_success)
# success 43`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={6} textColor="secondary" caps>
                  Let's go deeper
                </Heading>
              </TableItem>
            </TableRow>
          </Table>
          <CodePane
            lang="python"
            theme="light"
            source={`
from pymonet.either import Left, Right

divide(42, 1)
    .map(lambda value: value + 1)
    .bind(lambda value: divide(42, value))
    .case(error=handle_error, success=handle_success)
# success 1

map(self, mapper: (A) -> B): Either[B]
bind(self, mapper: (A) -> Either[B]): Either[B]`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={6} textColor="secondary" caps>
                  Let's go deeper
                </Heading>
              </TableItem>
            </TableRow>
          </Table>
          <CodePane
            lang="python"
            theme="light"
            source={`
from pymonet.either import Left, Right

divide(2, 1)
    .map(lambda value: value - 1)
    .fold(lambda value: divide(42, value))
    .case(error=handle_error, success=handle_success)
# error DivisionError...
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={6} textColor="secondary" caps>
                  {" "}
                  Monad for absence ... maybe?
                </Heading>
              </TableItem>
            </TableRow>
          </Table>
          <CodePane
            lang="python"
            theme="light"
            source={`
from pymonet.Maybe import Maybe

def find_something(item):
    if item in special_list:
        return Maybe.just(item)
    return Maybe.nothing()

find_something(42).get_or_else(0)  # 42
find_something(41).get_or_else(0)  # 0`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={6} textColor="secondary" caps>
                  Laziness
                </Heading>
              </TableItem>
            </TableRow>
          </Table>
          <CodePane
            lang="python"
            theme="light"
            source={`
from pymonet.applicative import Applicative

def fn():
    print('fn call')
    return 42

def mapper(value):
    print('mapper side effect of ' + value)
    return value + 1

def side_effect(value):
    print('side effect of ' + value)

applicative = Applicative(fn)
mapped_applicative = applicative.map(mapper)
mapped_applicative.fold(side_effect)
# fn call
# mapper side effect of 42
# side effect of 42`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={6} textColor="secondary" caps>
                  Morea Lazy
                </Heading>
              </TableItem>
            </TableRow>
          </Table>
          <CodePane
            lang="python"
            theme="light"
            source={`
from pymonet.task import Task

def resolvable_fn(reject, resolve):
    print('resolve side effect')
    resolve(42)

def rejectable_fn(reject, resolve):
    print('reject side effect')
    reject(0)

resolvable_task = Task.of(resolvable_fn)
rejectable_task = Task.of(rejectable_fn)

def mapper(value):
  print('mapper side effect ' + value)
  return value + 1

resolvable_task.fold(mapper)
# resolve side effect
# mapper side effect 42

rejectable_task.fold(mapper)
# reject side effect`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={6} textColor="secondary" caps>
                  Try (technically it's not a monad)
                </Heading>
              </TableItem>
            </TableRow>
          </Table>
          <CodePane
            lang="python"
            theme="light"
            source={`
from pymonet.monad_try import Try

def divide(dividend, divisor):
    return dividend / divisor

def success_callback(value):
    print('success: {}'.format(value))

def fail_callback(error):
    print('error: {}'.format(value))

(Try.of(divide, 42, 2)
    .on_success(success_callback)
    .on_fail(fail_callback))
# success: 21

(Try.of(divide, 42, 0)
    .on_success(success_callback)
    .on_fail(fail_callback))
#error: division by zero`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Table>
            <TableRow>
              <TableItem>
                <Heading size={6} textColor="secondary" caps>
                  Applicatives
                </Heading>
              </TableItem>
            </TableRow>
          </Table>
          <CodePane
            lang="python"
            theme="light"
            source={`
from pymonet.maybe import Maybe

applicative = Maybe.of(lambda value: value + 1)
applicative.ap(Maybe.of(42)) # Maybe[43]

nothing = Maybe.nothing()
applicative.ap(Maybe.of(42)) # Maybe[]
`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why?
          </Heading>
          <List>
            <ListItem>Less sxceptions</ListItem>
            <ListItem>More modular</ListItem>
            <ListItem>More testable</ListItem>
            <ListItem>Immutable</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How?
          </Heading>
          <List>
            <ListItem>Composable Functional JavaScript</ListItem>
            <ListItem>JavaScript: fantasy-land, immutable-ext</ListItem>
            <ListItem>Java: vavr.io</ListItem>
            <ListItem>Python: OSlash, pyMonet</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Links
          </Heading>
          <List>
            <ListItem>https://github.com/przemyslawjanpietrzak/pyMonet</ListItem>
            <ListItem>https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript</ListItem>
            <ListItem>http://www.vavr.io/</ListItem>
            <ListItem>https://github.com/FormidableLabs/spectacle (for presentatnion)</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
