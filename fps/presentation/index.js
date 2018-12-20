// Import React
import React from "react";
// Import Spectacle Core tags
import fps from "../assets/6D2.gif";
import dom from "../assets/dom.jpg";
import recalculate from "../assets/recalcule.jpg";
import layout from "../assets/layout.jpg";
import paint from "../assets/paint.jpg";
import d3 from "../assets/3d.png";
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
            How to Lose FPS & Alienate Users
          </Heading>
          <Text
            margin="10px 0 0"
            style={{ color: "#f80045" }}
            size={0.25}
            fit
            bold
          >
            https://przemyslawjanpietrzak.github.io/przemyslawjanpietrzak.github.io/fps/presentation.pdf
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Why?
          </Heading>
          <Image src={fps} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            How long?
          </Heading>
          <Text>1s / 60fps = 10-13s/frame</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Parse HTML
          </Heading>
          <Image src={dom} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Recalculate Styles
          </Heading>
          <Image src={recalculate} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            layout
          </Heading>
          <Image src={layout} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            paint
          </Heading>
          <Image src={paint} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Composite
          </Heading>
          <Image src={d3} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            What?
          </Heading>
          <List>
            <ListItem textSize="35" style={{ color: "#000" }}>
              Parse HTML
            </ListItem>
            <ListItem textSize="35" style={{ color: "#000" }}>
              Recalculate Styles
            </ListItem>
            <ListItem textSize="35" style={{ color: "#000" }}>
              Layout (!)
            </ListItem>
            <ListItem textSize="35" style={{ color: "#000" }}>
              Paint
            </ListItem>
            <ListItem textSize="35" style={{ color: "#000" }}>
              Composite
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            What?
          </Heading>
          <List>
            <ListItem
              textSize="35"
              style={{ color: "#000", textDecoration: "line-through" }}
            >
              Parse HTML
            </ListItem>
            <ListItem
              textSize="35"
              style={{ color: "#000", textDecoration: "line-through" }}
            >
              Recalculate Styles
            </ListItem>
            <ListItem
              textSize="35"
              style={{ color: "#000", textDecoration: "line-through" }}
            >
              Layout (!)
            </ListItem>
            <ListItem textSize="35" style={{ color: "#000" }}>
              Paint
            </ListItem>
            <ListItem textSize="35" style={{ color: "#000" }}>
              Composite
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }}>
            Demo
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }}>
            transform >> [top, left, hight, widht]
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6} style={{ color: "#f80045" }}>
            Scripting
          </Heading>
          <List>
            <ListItem
              textSize="35"
              style={{ color: "#000", }}
            >
              Make it async
            </ListItem>

            <ListItem
              textSize="35"
              style={{ color: "#000", }}
            >
              Cache it
            </ListItem>

            <ListItem
              textSize="35"
              style={{ color: "#000", }}
            >
              Web workers
            </ListItem>
            <ListItem
              textSize="35"
              style={{ color: "#000", }}
            >
              WASM (?)
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
