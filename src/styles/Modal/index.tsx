import styled from "styled-components";
import { BackdropProps, ModalContainerProps } from "./types";

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return <StyledBackdrop onClick={onClick} />;
};

const StyledModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top: 50%;
  left: 50%;
  height: ${(props) => props.height || "20rem"};
  width: 20rem;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  height,
}) => {
  return (
    <StyledModalContainer height={height}>{children}</StyledModalContainer>
  );
};
