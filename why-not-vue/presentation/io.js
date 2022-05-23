import { Child } from "./child";

export const Component = ({ input, output }) => (
  <Child onClick={output}>{input}</Child>
);
