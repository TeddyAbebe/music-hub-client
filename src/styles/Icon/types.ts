import { ReactNode } from "react";

export interface IconProps {
  width?: string;
  backgroundColor?: string;
  children?: ReactNode;
  onClick?: () => void;
}
