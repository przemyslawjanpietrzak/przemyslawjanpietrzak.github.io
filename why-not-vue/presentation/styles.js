import styled from "styled-components";

export const Button = styled.a`
  color: white;
  &:last-child {
    margin-bottom: 0;
  }

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;
