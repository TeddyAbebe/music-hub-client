import { ReactNode } from "react";

export interface BackdropProps {
  onClick: () => void;
}

export interface ModalContainerProps {
  children?: ReactNode;
  height?: string;
}
