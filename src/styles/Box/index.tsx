import styled from "styled-components";
import { BoxProps } from "./types";

const BoxContainer = styled.div<BoxProps>`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 5px;
  width: ${(props) => props.width || "60%"};
  background-color: ${(props) => props.bgColor || " "};
  justify-content: ${(props) => props.justifyContent || "space-around"};
  align-items: ${(props) => props.alignItems || "center"};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-height: 80vh;
  height: 71vh;
  overflow-y: scroll;
`;

const Box: React.FC<BoxProps> = ({
  width,
  children,
  bgColor,
  alignItems,
  justifyContent,
}) => {
  return (
    <BoxContainer
      width={width}
      bgColor={bgColor}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </BoxContainer>
  );
};

export default Box;
