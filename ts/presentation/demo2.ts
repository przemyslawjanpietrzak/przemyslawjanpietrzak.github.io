type EmptyTuple = [];

type TupleLength<T extends Array<any>> = T["length"];

type PrependTuple<A, T> = T extends Array<any>
  ? (((a: A, ...b: T) => void) extends (...a: infer I) => void ? I : [])
  : [];

type NumberToTuple<N extends number, L extends Array<any> = EmptyTuple> = {
  true: L;
  false: NumberToTuple<N, PrependTuple<1, L>>;
}[TupleLength<L> extends N ? "true" : "false"];

type Increment<N extends number> = TupleLength<PrependTuple<1, NumberToTuple<N>>>;

type T = Increment<7>;
