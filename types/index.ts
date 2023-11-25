import React, { MouseEventHandler } from "react";
import { Interface } from "readline";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;

}


export interface CarDetailsProps {
  car: CarProps;
  isOpen: boolean;
  closeModal: () => void;
  
}

export interface FilterProps {
  manufacturer: string,
  model: string,
  year: number,
  fuel: string,
  limit: number,
}

export interface OptionsProps {
  title: string;
  value: string;
}


export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];

}


export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}