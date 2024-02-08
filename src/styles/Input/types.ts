import React from "react";

export interface InputProps {
  width?: string;
  height?: string;
  padding?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}
