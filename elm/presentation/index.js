// Import React
import React from "react";
import cons from "../assets/cons.png";
import elm1 from "../assets/elm1.png";
import elm2 from "../assets/elm2.0.png";
import elm3 from "../assets/elm3.0.png";
import elm4 from "../assets/elm4.png";
import intro from "../assets/intro.png";
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
      </Deck>
    );
  }
}
