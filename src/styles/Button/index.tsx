import styled from "styled-components";
import { ButtonProps } from "./types";

const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  background-color: ${(props) =>
    props.active ? "#fff" : props.backgroundColor || "#28A745"};
  color: ${(props) => (props.active ? "#070707" : props.color || "#ffffff")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
`;
const Icon = styled.img`
  margin-right: 2px;
  width: 1rem;
  height: 1rem;
`;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  active,
  icon,
  ...rest
}) => {
  return (
    <StyledButton onClick={onClick} active={active} {...rest}>
      {icon && <Icon src={icon} alt="Button Icon" />}
      {children}
    </StyledButton>
  );
};

export default Button;
