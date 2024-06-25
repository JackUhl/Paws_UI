import './SmallTextInputComponent.css'
import { BaseSyntheticEvent, forwardRef, useContext, useImperativeHandle, useState } from 'react'
import { IsMobileContext } from '../../contexts/IsMobileContext';
import { ISmallTextInputComponent } from './ISmallTextInputComponent';

const SmallTextInputComponent = forwardRef((props: ISmallTextInputComponent, ref: any) => {

    const [errorMsg, setErrorMsg] = useState('');

    const isMobile = useContext<boolean>(IsMobileContext);

    const validateInput = (e: BaseSyntheticEvent) => {
        if (e.target.value.length > props.maxInput){
            setErrorMsg(`Max input of length ${props.maxInput}`);
            return;
        }

        if (props.phoneInput) {
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
        else if (props.alphabetOnly) {
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
        console.log('Made it here')
        if (props.phoneInput){
            if (props.inputValue.length != 12){
                setErrorMsg("Not a valid phone number");
                props.setValidity(props.variableName, false);
                return;
            }
        }
        else if(props.emailInput){
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

    useImperativeHandle(ref, () => ({
        onBlurValidation
    }))

    return (
        <div className={(isMobile || !props.shortInput ? 'longInputContainer' : 'shortInputContainer') + ' smallInputContainer'}>
            <label> 
                {props.labelName} 
                {props.isRequired ? <span className='required'> * </span> : '' }
                <span className='err'> {errorMsg} </span>
            </label><br/>
            
            <input 
                className='inputField' 
                type='text' 
                value={props.inputValue} 
                onChange={(e) => {validateInput(e)}}
                onBlur={() => {onBlurValidation()}}
                >
            </input>
        </div>
    )
})

export default SmallTextInputComponent;