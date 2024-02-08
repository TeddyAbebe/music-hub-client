import styled from "styled-components";
import { TextProps } from "./types";

const Text = styled.div<TextProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  margin-bottom: ${(props) => props.marginBottom};
`;

export default Text;
