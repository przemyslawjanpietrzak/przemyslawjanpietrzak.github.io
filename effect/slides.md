---
# try also 'default' to start simple
theme: apple-basic
class: 'text-center'
highlighter: shiki
lineNumbers: true

info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
layout: center
# colorSchema: light
---
# Effect.ts

---

# Przemysław Jan Beigert

<br>

- **Github** - https://github.io/przemyslawjanpietrzak
- **Dev.to** - https://dev.to/przemyslawjanpietrzak
- **Stackoverflow** - https://stackoverflow.com/users/5914352/przemyslaw-jan-beigert
- **Linkedin** - https://www.linkedin.com/in/przemys%C5%82aw-beigert-b0b149b4/
<br>

---

# Intro

<br>

<div grid="~ cols-2 gap-4">
<div>

<v-click>

- node http service

</v-click>

<v-click>

- authenticate

</v-click>

<v-click>

- send some request to external services

</v-click>
<v-click>

- filtering & normalization

</v-click>
<v-click>

- safe in DB

</v-click>

</div>
<div>


</div>
</div>
---

# And...

<v-click>

- 500

</v-click>


<v-click>

- debugging...

</v-click>

<v-click>

- auth token is missing in the vault

</v-click>

<v-click>

- let's handle that

</v-click>
---

# Handler

```ts {1|5-7}
class AuthTokenIsMissingError extends Error {}

const loadAuthToken = async () => {
  const response = await fetch();
  if (!respose.token) {
    throw AuthTokenIsMissingError();
  }

  return response.token;
}
```

---

# Handler

```ts {all|5-7|8}
const main = async () => {
  try {
    await loadAuthToken()
  } catch (e) {
    if (e instanceof AuthTokenIsMissingError) {
      // handler
    }
    throw e;
  }
}
```

---

#
<img  src="/assets/later.jpg">

---

# Later

```ts
class AuthTokenIsMissingError extends Error {}
class AuthTokenWrongFormatError extends Error {}
class AuthTokenExpiredError extends Error {}
```

---

# Catch

```ts {all|8-10}
} catch (e) {
  if (e instanceof AuthTokenIsMissingError) {
    // handler
  }
  if (e instanceof AuthTokenWrongFormatError) {
    // handler
  }
  if (e instanceof InvalidAuthError) {
    // handler
  }
  throw e;
}
```

---

# Try

```ts
let value1;
try {
  value1 = fn1();
} catch (e) {

}

const value2 = fn2(value1)

try {
  const value3 = fn3(value3);
} catch (e) {

}
```

---
layout: center
---

# Let's fix that

<!--
dsad
-->

---

# Effect.ts

<div grid="~ cols-2 gap-4">
<div>

<v-click>

- The best way to `handle errors` in TypeScript

</v-click>

<v-click>

- The best way to `manage complexity` in TypeScript

</v-click>

<v-click>

- The best way to `ship faster` in TypeScript

</v-click>
</div>

<div>
<img  src="/assets/effect.jpg">
</div>

</div>
---

# Effect


```ts {1|3|3-4|6|6-7|all}
Effect<Success, Error, Requirements>;

const value = Effect.succeed(42);
type Value = Effect<number, never, never>;

const fail = Effect.fail(new Error(''));
type Fail = Effect<never, Error, never>;
```

---

# Program

```ts {3,6|4-5|8|all}
import { Effect, pipe } from 'effect';

const program = pipe(
  Effect.succeed(42),
  Effect.map(item => item + 1),
)

const result = Effect.runSync(program); // 43
```

---

# FlatMap

```ts{all|2-5|6}
import { Effect, pipe } from 'effect';

const program = pipe(
  Effect.succeed(42),
  Effect.flatMap(item => Effect.succeed(item + 1)),
) satisfies Effect<number, never, never>;

const result = Effect.runSync(program);
```

---

# Fail

```ts{2-5|6|all}
import { Effect, pipe } from 'effect';

const program = pipe(
  Effect.succeed(42),
  Effect.flatMap(item => item % 2 == 0 ? Effect.succeed(item + 1) : Effect.fail(new ValueError()))),
) satisfies Effect<number, ValueError, never>;

const result = Effect.runSync(program);
```

---

# Many errors

```ts{all|5-6|7}
import { Effect, pipe } from "effect"

const program = pipe(
  Effect.succeed(42),
  Effect.flatMap(item => item % 2 == 0 ? Effect.succeed(item + 1) : Effect.fail(new FirstError())),
  Effect.flatMap(item => item % 3 == 0 ? Effect.succeed(item + 1) : Effect.fail(new SecondError())),
) satisfies Effect<number, FirstError | SecondError, never>;
```

---

# Map

```ts{4-5|6|7|all}
import { Effect, pipe } from 'effect';

const program = pipe(
  Effect.succeed(42),
  Effect.flatMap(item => item % 2 == 0 ? Effect.succeed(item + 1) : Effect.fail(new ValueError()))),
  Effect.map(item => item - 1),
) satisfies Effect<number, ValueError, never>;

const result = Effect.runSync(program);
```

---

# Error handler

```ts{3-5|9|11|12|all}
import { Effect, pipe } from "effect"

class AuthTokenIsMissingError {
  readonly _tag = "AuthTokenIsMissingError"
}

const program = pipe(
  Effect.succeed(42),
  Effect.flatMap(item => item % 2 == 0 ? Effect.succeed(item + 1) : Effect.fail(new AuthTokenIsMissingError())),
  Effect.map(item => item - 1),
  Effect.catchTag("AuthTokenIsMissingError", () => Effect.succeed(0))
) satisfies Effect<number, never, never>;
```

---

# Typed errors

```ts{all|10-11|12|all}
import { Effect, pipe } from "effect"

class AuthTokenIsMissingError  {
  readonly _tag = "AuthTokenIsMissingError"
}

const program = pipe(
  Effect.succeed(42),
  Effect.flatMap(item => item % 2 == 0 ? Effect.succeed(item + 1) : Effect.fail(new AuthTokenIsMissingError())),
  Effect.catchTag("InvalidAuthError", () => Effect.succeed(0))
  // Argument of type '"InvalidAuthError"' is not assignable to parameter of type '"AuthTokenIsMissingError"'
) satisfies Effect<any, never, any>;
```


---

# Die!

```ts {all|5|6}
import { Effect, pipe } from "effect"

const program = pipe(
  Effect.succeed(42),
  Effect.flatMap(item => item % 2 == 0 ? Effect.succeed(item + 1) : Effect.die("Angry message")),
) satisfies Effect<number, never, number>;
```

---

# Cons

---


# Scopes
```ts
const program = pipe(
  Effect.succeed(42),
  Effect.map(value => value + 1),
  Effect.map(newValue => newValue + value),
  // Cannot find name 'value'
);
```

---

# Generator
```ts
import { Effect, pipe } from "effect"

const program = Effect.gen(function*() {
  const value = 42;
  const newValue = value + 1;
  return newValue + value;
});
```

---

# Generator & effects
```ts {all|3-5|6-10}
import { Effect, pipe } from "effect"

const asyncValue = Effect.promise(() => Promise.resolve(42))

const asyncIncrease = (value: number) => Effect.promise(() => Promise.resolve(value + 1))

const program = Effect.gen(function*() {
  const value = yield* asyncValue;
  const newValue = yield* asyncIncrease(value);
  return newValue + value;
});
```

---

Contexts

```ts
import { Context, Ref } from "effect";

export class AuthContext extends Context.Tag("Auth")<AuthContext, Ref<string>>() {}
```

---

# Usage

```ts {all|1,4|2|3-4|5-6}
const program = pipe(
  Effect.promise(() => fetch('')),
  Effect.flatMap((token) =>
    Effect.gen(function* () {
      const authContext = yield* AuthContext;
      yield* Ref.update(authContext, () => token);

      return 0;
    }),
  ),
);
```

---

# Error

```ts {1|2-3|4}
const result = Effect.runPromise(program);
// Argument of type 'Effect<number, never, AuthContext>'
// is not assignable to parameter of type 'Effect<number, never, never>'
// Type 'AuthContext' is not assignable to type 'never'.
```

---

# Runnable

```ts {all|2-4|7|all}
const runnable = program.pipe(
  Effect.provideService(AuthContext, {
    next: Effect.sync(() => "Default")
  }),
);

const result = Effect.runPromise(runnable);
```

---

#How?
```ts {5-6}
const program = pipe(
  Effect.promise(() => fetch('')),
  Effect.flatMap((token) =>
    Effect.gen(function* () {
      const authContext = yield* AuthContext;
      yield* Ref.update(authContext, () => token);

      return 0;
    }),
  ),
);
```
---

# How???

<br>

<v-click>

## TS understands

</v-click>

<v-click>

 - `return`

</v-click>


<v-click>

```ts
let fn = () => { return 42; };
```

</v-click>

<v-click>

 - `throw`

</v-click>

<v-click>

```ts
let fn = () => throw new Error();
```

</v-click>

<v-click>

 - `yield*`

</v-click>


<v-click>

```ts
const authContext = yield* AuthContext;
```

</v-click>

---

# Benefits

<v-click>

- Contexts

</v-click>

<v-click>

- Strongly typed

</v-click>

<v-click>

- Dependency injection

- Wrapping libs into services

</v-click>
<v-click>

- Unit tests++

</v-click>

---

# Retry

```ts {all|3|6,8-10|13-16|all}
import { Effect, Data } from 'effect';

class RedeployError extends Data.Error {}

const task = Effect.gen(function* () {
  if (42 % 2 === 0) {
    return 43;
  } else {
    yield* new RedeployError();
  }
});

const program = Effect.retry(task, {
  times: 7,
  schedule: Schedule.fixed('1 seconds')
  until: (err) => !(err instanceof RedeployError),
});
```

---

# Timeout

```ts
import { Effect, Data } from 'effect';

const task = Effect.gen(function* () {
  if (42 % 2 === 0) {
    yield* Effect.sleep("2 seconds");

    return true;
  } else {
    yield* Effect.sleep("5 seconds");

    return false;
  }
});

const program = task.pipe(Effect.timeout("4 seconds"))
```
---

# Final effect

---

```ts {all|2-5|6|7-9,24|10-13|14-15|16-22|all}
const program = pipe(
  Effect.all(
    [fetchExistingWebhookEventsEffect, fetchWebhookEventsEffect, fetchAuthEffect(tokenCredentialId)],
    { concurrency: 3 },
  ),
  Effect.map(filterToNotExistingWebHookEvents),
  Effect.flatMap((webhookEvents) =>
    Effect.all(webhookEvents.map((webhookEvent) =>
      Effect.gen(function* () {
        const [pipelineTimelines, pipelineBridges] = yield* Effect.all([
          fetchPipelineTimelineEffect(webhookEvent),
          fetchPipelineBridgesEffect(webhookEvent),
        ], {concurrency: 2});
        const reRun = calculatePipelineRerun(pipelineTimelines, pipelineBridges, webhookEvent);
        const jobs = filterDuplicatedJobs(webhookEvent, [...pipelineTimelines, ...pipelineBridges]);
        const normalizeAndIngestOriginPipelineEffect = normalizeAndIngestOriginPipelineEffectFactory({
          jobs,
          webhookEvent,
          reRun,
        });
        const loadAndIngestStepsEffect = loadAndIngestStepsEffectFactory(webhookEvent, jobs, reRun);
        return Effect.all([normalizeAndIngestOriginPipelineEffect, loadAndIngestStepsEffect], { concurrency: 2 });
      }),
    ), { concurrency: 8 }),
  ),
);
```
---

# Benefits


<v-click>

- Typed errors

</v-click>

<v-click>

- Elastic error handling

</v-click>

<v-click>

- Declarative

</v-click>

<v-click>

- Modular

</v-click>

<v-click>

- DI without classes

</v-click>

<v-click>

- Time utils

</v-click>

---

# Cons

<v-click>

- NOT easy to migrate *

</v-click>

<v-click>

- Opinionated

</v-click>

<v-click>

```ts
export declare function pipe<A>(a: A): A;
export declare function pipe<A, B = never>(a: A, ab: (a: A) => B): B;
export declare function pipe<A, B = never, C = never>(a: A, ab: (a: A) => B, bc: (b: B) => C): C;
export declare function pipe<A, B = never, C = never, D = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D;
export declare function pipe<A, B = never, C = never, D = never, E = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E): E;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F): F;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G): G;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H): H;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I): I;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J): J;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K): K;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L): L;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M): M;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N): N;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O): O;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O, op: (o: O) => P): P;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O, op: (o: O) => P, pq: (p: P) => Q): Q;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O, op: (o: O) => P, pq: (p: P) => Q, qr: (q: Q) => R): R;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never, S = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O, op: (o: O) => P, pq: (p: P) => Q, qr: (q: Q) => R, rs: (r: R) => S): S;
export declare function pipe<A, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never, S = never, T = never>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O, op: (o: O) => P, pq: (p: P) => Q, qr: (q: Q) => R, rs: (r: R) => S, st: (s: S) => T): T;
```

</v-click>


---

# Summary

---

<img  src="/assets/hamilton.jpeg">

---


---

# Cost

<v-click>

- Generators instead of methods

</v-click>
<v-click>

- No more classes

</v-click>
<v-click>

- Stateless

</v-click>
<v-click>

- Wrap everything

</v-click>


---

# Benefits

<v-click>

- Typed errors

</v-click>
<v-click>

- Optimistic approach

</v-click>
<v-click>

- Typed DI

</v-click>
<v-click>

- Stateless

</v-click>
<v-click>

- Time utils

</v-click>

<v-click>

- Schema validator

</v-click>

<v-click>

- Unit test support

</v-click>

<v-click>

- Debug support

</v-click>

---

---
layout: center
---

# Ewolucja czy ślepy zaułek?

---


---

# Recommended

<v-click>

- wanna be senior dev

</v-click>

<v-click>

- intro to functional languages

</v-click>
<v-click>

- long pipeline with branches

</v-click>

---


---
layout: center
---

# Questions?


---
layout: center
---

# Thank you :*
