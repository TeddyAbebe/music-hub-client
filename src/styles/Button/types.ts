import { ReactNode } from "react";

export interface ButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  icon?: string;
}
