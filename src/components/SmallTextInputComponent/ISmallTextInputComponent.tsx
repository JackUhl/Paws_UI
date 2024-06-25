import { BaseSyntheticEvent } from "react";

export interface ISmallTextInputComponent {
    shortInput: boolean;
    emailInput: boolean;
    phoneInput: boolean;
    alphabetOnly: boolean;

    labelName: string;
    isRequired: boolean;
    maxInput: number;

    inputValue: string;
    variableName: string;
    onChange(e: BaseSyntheticEvent, varable:string): void;
    setValidity(variable:string, vaild:boolean): void;
}