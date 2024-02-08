import { ReactNode } from "react";

export interface BoxProps {
  children: ReactNode;
  width?: string;
  bgColor?: string;
  alignItems?: string;
  justifyContent?: string;
}
