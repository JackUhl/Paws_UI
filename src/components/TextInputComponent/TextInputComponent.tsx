import './TextInputComponent.css'
import { BaseSyntheticEvent, useContext, useEffect, useState } from 'react'
import { IsMobileContext } from '../../contexts/IsMobileContext';
import { ITextInputComponent } from './ITextInputComponent';
import { InputTypes } from '../../models/constants/InputTypesEnum';

export default function TextInputComponent (props: ITextInputComponent) {

    const [errorMsg, setErrorMsg] = useState('');

    const isMobile = useContext<boolean>(IsMobileContext);

    useEffect(() => {
        if(props.hasSubmit == true)
            onBlurValidation();
    },[props.hasSubmit]);

    const getInputClass = () => {
        if(props.inputType == InputTypes.textArea)
            return 'largeInputField'
        else
            return (isMobile || !props.shortInput ? 'longInputContainer' : 'shortInputContainer') + ' smallInputContainer';
    }

    const verifyInput = (e: BaseSyntheticEvent) => {
        if (e.target.value.length > props.maxInput){
            setErrorMsg(`Max input of length ${props.maxInput}`);
            return;
        }

        if (props.inputType == InputTypes.phone) {
            const numericValue = e.target.value.replace(/\D/g, '');
            let formattedValue = '';
            for (let i = 0; i < numericValue.length; i++) {
                if (i === 3 || i === 6) {
                    formattedValue += '-';
                }
                formattedValue += numericValue[i];
            }
            e.target.value = formattedValue;
        }
        else if (props.inputType == InputTypes.name ) {
            e.target.value = e.target.value.replace(/[^a-zA-Z-.\s]/g, '');
        }

        e.target.value = e.target.value
            .replace(/<[^>]*>/g, '')            // Remove HTML tags
            .replace(/[<>*"=\\[\]]/g, '')       // Remove characters with special meaning in HTML, JavaScript, and URLs, including bar parentheses
            .replace(/[();:"]/g, '');           // Remove semicolons, colons, double quotes, and parentheses

        setErrorMsg('')
        props.onChange(e, props.variableName)
    }

    const onBlurValidation = () => {
        if (props.inputType == InputTypes.phone){
            if (props.inputValue.length != 12){
                setErrorMsg("Not a valid phone number");
                props.setValidity(props.variableName, false);
                return;
            }
        }
        else if(props.inputType == InputTypes.email){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(props.inputValue)){
                setErrorMsg("Not a valid Email");
                props.setValidity(props.variableName, false);
                return;
            }
        }

        if(props.isRequired && props.inputValue == ''){
            setErrorMsg("Required field");
            props.setValidity(props.variableName, false);
            return;
        }

        //No errors found
        setErrorMsg('')
        props.setValidity(props.variableName, true);
    }

    return (
        <div className={getInputClass() + ' textInputContainer'}>
            <label> 
                {props.labelName} 
                {props.isRequired ? <span className='required'> * </span> : '' }
            </label><br/>
            
            {
                props.inputType != InputTypes.textArea ? // If this is not a text area

                <input //Then its an input field
                    className='inputField' 
                    type='text'
                    value={props.inputValue} 
                    onChange={(e) => {verifyInput(e)}}
                    onBlur={() => {onBlurValidation()}}
                    >
                </input>
                :
                <textarea //Otherwise it is a textarea
                    className='inputField' 
                    value={props.inputValue} 
                    onChange={(e) => {verifyInput(e)}}
                    onBlur={() => {onBlurValidation()}}
                    >
                </textarea>
            }
            <br/>
            <span className='err'> {errorMsg} </span>
        </div>
    )
}