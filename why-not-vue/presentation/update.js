import { useEffect } from "react";

export const Component = ({ attr }) => {
  useEffect(() => {
    console.log(attr);
  }, [attr]);

  return <div>{input}</div>;
};
