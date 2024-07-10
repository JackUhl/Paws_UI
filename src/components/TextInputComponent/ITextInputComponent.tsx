import { BaseSyntheticEvent } from "react";
import { InputTypes } from "../../models/constants/InputTypesEnum";

export interface ITextInputComponent {
    shortInput: boolean;
    inputType: InputTypes;

    labelName: string;
    isRequired: boolean;
    maxInput: number;

    inputValue: string;
    variableName: string;
    onChange(e: BaseSyntheticEvent, varable:string): void;
    setValidity(variable:string, vaild:boolean): void;
    hasSubmit: boolean;
}