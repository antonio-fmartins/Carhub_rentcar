import { MouseEventHandler } from "react";

export type CustomButtonProps = {
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
    textStyles?:string;
    rightIcon?:string;
    isDisable?:boolean
}

export type SearchManufacturerProps = {
    manufacturer:string;
    setManufacturer:(manufacturer:string) => void
}

export type CarProps = {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number
}

export type FilterProps ={
    manufacturer: string;
    year: number;
    fuel: string;
    limit:number;
    model:string;
}

export type OptionsProps = {
    title:string;
    value:string;
}
export type CustomFilterProps = {
    title:string;
    options: OptionsProps[]
}


export type ShowMoreProps ={
    pageNumber: number;
    isNext:boolean
}