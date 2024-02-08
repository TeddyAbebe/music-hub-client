import React from "react";
import styled from "styled-components";
import { InputProps } from "./types";

const StyledInput = styled.input<InputProps>`
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "10px"};
  padding: ${(props) => props.padding || "10px"};
  align-self: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
`;

const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
