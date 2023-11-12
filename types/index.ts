import { MouseEventHandler } from "react";
import { Interface } from "readline";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: 'button' | 'submit' | 'reset';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
