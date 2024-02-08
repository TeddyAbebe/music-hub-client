import styled from "styled-components";
import { FlexProps } from "./types";

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  padding-left: ${(props) => props.paddingLeft || "10px"};
  padding-right: ${(props) => props.paddingRight || "10px"};
  gap: ${(props) => props.gap || "0px"};
  text-align: start;
`;

export default Flex;
