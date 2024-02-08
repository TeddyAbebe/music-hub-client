import React from "react";
import styled from "styled-components";
import { IconProps } from "./types";

const StyledIcon = styled.div<IconProps>`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.width || "24px"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
`;

const Icon: React.FC<IconProps> = ({
  width,
  backgroundColor,
  children,
  onClick,
}) => {
  return (
    <StyledIcon
      width={width}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </StyledIcon>
  );
};

export default Icon;
