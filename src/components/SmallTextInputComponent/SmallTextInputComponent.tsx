import './SmallTextInputComponent.css'
import { BaseSyntheticEvent, useContext, useState } from 'react'
import { IsMobileContext } from '../../contexts/IsMobileContext';
import { ISmallTextInputComponent } from './ISmallTextInputComponent';
import { validate } from 'uuid';

export default function SmallTextInputComponent(props: ISmallTextInputComponent) {

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
            .replace(/<[^>]*>/g, '')         // Remove HTML tags
            .replace(/[<>*"=\\[\]]/g, '') // Remove characters with special meaning in HTML, JavaScript, and URLs, including bar parentheses
            .replace(/[();:"]/g, '');     // Remove semicolons, colons, double quotes, and parentheses

        setErrorMsg('')
        props.onChange(e, props.variableName)
    }

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
                >
            </input>
        </div>
    )
}