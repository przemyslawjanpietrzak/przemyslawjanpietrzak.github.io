import React from "react";

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
import rx from "../assets/rx.png";
import map from "../assets/map.png";
import filter from "../assets/filter.png";
import merge from "../assets/merge.png";
import debounce from "../assets/debounce.png";
import combine from "../assets/combine.png";
import td from "../assets/td.png";

import stream from "../assets/stream.png";

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
            Intro into Reactive Programming
          </Heading>
          <Text
            margin="10px 0 0"
            style={{ color: "#f80045", fontSize: "25px" }}
            bold
          >
            https://github.io/przemyslawjanpietrzak
          </Text>

          <Text
            margin="10px 0 0"
            style={{ color: "#f80045", fontSize: "25px" }}
            bold
          >
            https://twitter.com/przemyslawjanp
          </Text>

          <Text
            margin="10px 0 0"
            style={{ color: "#f80045", fontSize: "25px" }}
            bold
          >
            https://stackoverflow.com/users/5914352/przemyslaw-pietrzak
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }}>
            OOP: Alan Key
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            Objects communicate by asynchronous message passing
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Reactive extension
          </Heading>
          <Text margin="10px 0 0" size={0.25} bold>
            {`Observable<T>`}
          </Text>
          <Image src={rx} />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Flow
          </Heading>
          <Image src={stream} />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Overview
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`import { interval } from 'rxjs';

const timmer$ = interval(1000);

timmer$.subscribe(
  (value) => console.log(value);
  (error) => console.error(error);
  () => console.log('done');
)`}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            So what?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <div style={{ display: "flex", width: "50vw" }}>
            <CodePane
              style={{ width: "33vw", marginRight: "5px" }}
              lang="typescript"
              source={`class Car {
  public setSpeed(speed: int){
    this.speed = speed;
    speedCamera.inform(this, speed);
  }
}

class SpeedCamera {
  public inform(car: Car, speed: number) {
    ...
  }
}
`}
            />
            <CodePane
              style={{ width: "33vw" }}
              lang="typescript"
              source={`class Car {
  public speed$: Observable<int>

  public setSpeed(speed: int){
    this.speed = speed;
    this.speed$.next(speed);
  }
}

class SpeedCamera {
  registerCar(car: Car) {
    car.speed$.subscribe((speed) => {
      ...
    })
  }
}
`}
            />
          </div>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          />
          <CodePane
            lang="typescript"
            theme="dark"
            source={`import { tempInC$ } from '...';
            
export const tempInK$ = tempInC$.map(temp => temp + 275)

export const criticalTemp$ = tempInC.filter(temp => temp > 100)
`}
          />
        </Slide>

        <Slide>
          <Image src={map} />
        </Slide>

        <Slide>
          <Image src={filter} />
        </Slide>
        <Slide>
          <Image src={debounce} />
        </Slide>

        <Slide>
          <Image src={combine} />
        </Slide>

        <Slide>
          <Image src={merge} />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Problem
          </Heading>
          <Text margin="10px 0 0" size={0.15} bold>
            Unsubscribe
          </Text>
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Memory leak
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`class MyComponent {
  onInit() {
    globalStream$.subscribe(...)
  }
}`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Solution 1
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`class MyComponent {
  onInit() {
    this.subscription = globalStream$.subscribe(...)
  }

  onDestroy() {
    this.subscription.unsubscribe();
  }
}`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Solution 2
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`class MyComponent {
  onInit() {
    globalStream$.take(1).subscribe(...)
  }
}`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Solution 3
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`class MyComponent {

  private unsubscribe$ = new Observable<void>();

  onInit() {
    globalStream$.takeUntil(this.unsubscribe$).subscribe(...)
  }

  onDestroy() {
    this.unsubscribe$.done();
  }
}`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Solution 4
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`class MyComponent {
  onInit() {
    this.data$ = globalStream$.map(...)
  }

  render() {
    return <div>{{ data$ | async }}</div>
  }

}`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Problem
          </Heading>
          <Text margin="10px 0 0" size={0.15} bold>
            Nested subscriptions
          </Text>
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Problem
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`this.router.params.subscribe(params => {
  this.http.get(\`url/\${params}\`).subscribe(data => {
    this.data = data;
  })
});
`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Solution
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`this.router.params
  .switchMap(params => this.http.get(\`url/\${params}\`))
  .subscribe(data => {
    this.data = data;
  })
});
`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            switchMap
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`import { jsFramework$ } from 'twitter';
import { getDev, recruit } form 'hr';

jsFramework$
  .switchMap(framework => getDev(framework))
  .subscribe(dev => {
    recruit(dev);
  })
`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Problem
          </Heading>
          <Text margin="10px 0 0" size={0.15} bold>
            Unsubscribe
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} style={{ color: "#f80045" }} caps>
            Tower defence
          </Heading>
          <Image src={td} />
        </Slide>
        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Timmer
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`const ticker$ = interval(17);`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Enemy factory
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`const enemy$ = ticker$
  .filter(counter => counter % 60 === 0)
  .map(() => enemyFactory())
  .subscribe(enemy => {
    globalEnemies.push(enemy);
  })`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Enemy move
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`ticker$.subscribe(() => {
  globalEnemies.forEach(enemy => {
    const newDirections = getMove(enemy.position, nextStep, enemy.speed);
    enemy.position.x = newDirections.x;
    enemy.position.y = newDirections.y;
    enemyMove$.next(enemy);
  });
})`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Tower & Bullet
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`const bulletCreate = enemyMove$
  .filter(enemy => isInRange(this, enemy))
  .map(enemy => BulletFactory(enemy))
  .subscribe(bullet => {
    globalBullets.push(bullet);
});

ticker$.subscribe(() => {
  globalBullets.forEach(bullet => {
    const newDirections = getMove(bullet.position, nextStep, bullet.speed);
    enemy.position.x = newDirections.x;
    enemy.position.y = newDirections.y;
    bulletMove$.next(bullet)
  });
});`}
          />
        </Slide>

        <Slide>
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Death of enemy
          </Heading>
          <CodePane
            lang="typescript"
            theme="dark"
            source={`const enemyDie$ = bulletMove$
  .filter(bullet => isInRange(bullet, globalEnemies)
  .map(bullet => getFirstEnemy(bullet, globalEnemies));

enemyDie.subscribe(enemy => {
  enemy.die();
  globalEnemies.remove(enemy);
});
`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Why?
          </Heading>
          <Text margin="10px 0 0" size={0.15} bold>
            Immutable
          </Text>
          <Text margin="10px 0 0" size={0.15} bold>
            Modular
          </Text>
          <Text margin="10px 0 0" size={0.15} bold>
            Lazy
          </Text>
          <Text margin="10px 0 0" size={0.15} bold>
            Declarative
          </Text>
          <Text margin="10px 0 0" size={0.15} bold>
            Lazy
          </Text>
          <Text margin="10px 0 0" size={0.15} bold>
            Time agnostic
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            style={{ color: "#f80045" }}
          >
            Where?
          </Heading>
          <Text margin="10px 0 0" size={0.15} bold>
            Angular
          </Text>
          <Text margin="10px 0 0" size={0.15} bold>
            Redux-Observable
          </Text>
          <Text margin="10px 0 0" size={0.15} bold>
            react-recompose
          </Text>
          <Text margin="10px 0 0" size={0.15} bold>
           Vue-rx
          </Text>
          <Text margin="10px 0 0" size={0.15} bold>
            Cycle.js
          </Text>
          <Text margin="10px 0 0" size={0.15} bold>
            Flutter
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
