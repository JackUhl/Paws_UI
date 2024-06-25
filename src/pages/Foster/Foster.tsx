import { BaseSyntheticEvent, useContext, useRef, useState } from 'react';
import TitleBanner from '../../components/TitleBannerComponent/TitleBannerComponent'
import './Foster.css'
import { defaultFosterForm, defaultFosterFormValidity, FosterForm, FosterFormFieldNames, FosterFormValidity, Reference, ReferenceValidity } from '../../models/objects/FosterForm';
import { IsMobileContext } from '../../contexts/IsMobileContext';
import SmallTextInputComponent from '../../components/SmallTextInputComponent/SmallTextInputComponent';

export default function Foster() {

    const [fosterForm, setFosterForm] = useState(defaultFosterForm);
    const [validationState, setValidationState] = useState(defaultFosterFormValidity);

    const validationRef = useRef<HTMLElement>();
    
    const isMobile = useContext<boolean>(IsMobileContext)

    const onChange = (event: BaseSyntheticEvent, variable: string) => {
        const value = event.target.value;
        const keys = variable.split('.');

        setFosterForm(prevForm => {
            if (keys.length === 1) {
                return {
                    ...prevForm,
                    [variable]: value
                };
            } else {
                const [childClassName, childClassVariable] = keys;
                return {
                    ...prevForm,
                    [childClassName]: {
                        ...(prevForm[childClassName as keyof FosterForm] as Reference),
                        [childClassVariable]: value
                    }
                };
            }
        });
    }

    const setValidity = (variable: string, validity:boolean) =>{
        const keys = variable.split('.');

        setValidationState(prevForm => {
            if (keys.length === 1) {
                return {
                    ...prevForm,
                    [variable]: validity
                };
            } else {
                const [childClassName, childClassVariable] = keys;
                return {
                    ...prevForm,
                    [childClassName]: {
                        ...(prevForm[childClassName as keyof FosterFormValidity] as ReferenceValidity),
                        [childClassVariable]: validity
                    }
                };
            }
        });
    }

    const validateAndSendInfo = () => {
        
        validationRef.current?.blur;

        //TODO when BFF is set up
        const allValid = Object.values(validationState).every(v => v);
        if (allValid) {
            // Submit the form
            console.log("Form submitted:", fosterForm);
        } else {
            console.log("Form contains errors.");
        }
    }

    return (
        <div className='foster'>
            <TitleBanner
                title='Foster'
            ></TitleBanner>
            <div className='mainContainer flexRow justifyCenter rowGap flexWrap fosterForm'>
                <div className='fosterHeros'>
                    <div className='flexRow justifyAround alignCenter columnGap rowGap flexWrap flexWrapReverse'>
                        <img src='https://pawsomeanimalwelfare.com/wp-content/uploads/2024/02/425834462_122118173588181652_7023249176980479669_n-1.jpg' className={isMobile ? 'imageMobileWidth' : 'imageDesktopWidth'}/>
                        <div className={(isMobile ? 'pinkBackgroundMobileWidth' : 'pinkBackgroundDesktopWidth') + ' pinkBackground flexColumn'}>
                            <h2 className='centerJustifySelf'>Become a Foster Hero</h2>
                            <p>Our foster volunteers are the heart and soul of our pet rescue efforts. Their willingness to open up their homes and hearts to animals in need is what allows us to save lives and find forever homes. The more people who step up to foster, the more animals we can help. It's thanks to our amazing fosters that we can make a difference in the lives of these deserving animals. Become a Foster Hero Today!</p>
                        </div>
                    </div>
                </div>
                <div className={(isMobile ? 'fosterFormMobileWidth' : 'fosterFormDesktopWidth') + ' fosterForm flexColumn rowGap justifyCenter'}>
                    <h2 className='centerJustifySelf'>Foster Application</h2>
                    <div className='flexRow centerJustifySelf'>
                        <p>Fields marked with a <span className='required'> * </span> are required</p>
                    </div>
                    <div className='flexRow justifyBetween flexWrap rowGap'>
                        <SmallTextInputComponent
                            shortInput = {true}
                            emailInput = {false}
                            phoneInput = {false}
                            alphabetOnly = {true}

                            labelName = 'First Name'
                            isRequired = {true}
                            maxInput = {20}

                            inputValue={fosterForm.firstName}
                            variableName={FosterFormFieldNames.firstName}
                            onChange={onChange}
                            setValidity={setValidity}
                            ref={validationRef}
                        />
                        <SmallTextInputComponent
                            shortInput = {true}
                            emailInput = {false}
                            phoneInput = {false}
                            alphabetOnly = {true}

                            labelName = 'Last Name'
                            isRequired = {true}
                            maxInput = {20}

                            inputValue = {fosterForm.lastName}
                            variableName = {FosterFormFieldNames.lastName}
                            onChange={onChange}
                            setValidity={setValidity}
                            ref={validationRef}
                        />
                    </div>
                    <div className='flexRow justifyBetween flexWrap rowGap'>
                        <SmallTextInputComponent
                            shortInput = {true}
                            emailInput = {false}
                            phoneInput = {true}
                            alphabetOnly = {false}

                            labelName = 'Phone Number'
                            isRequired = {true}
                            maxInput = {12}

                            inputValue = {fosterForm.phoneNumber}
                            variableName = {FosterFormFieldNames.phoneNumber}
                            onChange={onChange}
                            setValidity={setValidity}
                            ref={validationRef}
                        />
                        <SmallTextInputComponent
                            shortInput = {true}
                            emailInput = {true}
                            phoneInput = {false}
                            alphabetOnly = {false}

                            labelName = 'Email'
                            isRequired = {true}
                            maxInput = {50}

                            inputValue = {fosterForm.email}
                            variableName = {FosterFormFieldNames.email}
                            onChange={onChange}
                            setValidity={setValidity}
                            ref={validationRef}
                        />
                    </div>
                    <div className='largeInputField '>
                        <label> Why do you want to foster?</label><br/>
                        <textarea name="paragraph_text" value={fosterForm.whyDoYouWantTo} onChange={(e) => {onChange(e, FosterFormFieldNames.whyDoYouWantTo)}}></textarea>
                    </div>
                    <div className='largeInputField '>
                        <label> What pets do you currently have?<span className='required'> * </span></label><br/>
                        <textarea name="paragraph_text" value={fosterForm.whatPetsYouHave} onChange={(e) => {onChange(e, FosterFormFieldNames.whatPetsYouHave)}}></textarea>
                    </div>
                    <div className='flexRow justifyBetween flexWrap rowGap alignEnd'>
                        <SmallTextInputComponent
                            shortInput = {true}
                            emailInput = {false}
                            phoneInput = {false}
                            alphabetOnly = {true}

                            labelName = 'Reference 1 Name'
                            isRequired = {true}
                            maxInput = {20}

                            inputValue = {fosterForm.reference1.name}
                            variableName = {FosterFormFieldNames.reference1.name}
                            onChange={onChange}
                            setValidity={setValidity}
                            ref={validationRef}
                        />
                        <SmallTextInputComponent
                            shortInput = {true}
                            emailInput = {false}
                            phoneInput = {true}
                            alphabetOnly = {false}

                            labelName = 'Reference 1 Phone Number'
                            isRequired = {true}
                            maxInput = {12}

                            inputValue = {fosterForm.reference1.phoneNumber}
                            variableName = {FosterFormFieldNames.reference1.phoneNumber}
                            onChange={onChange}
                            setValidity={setValidity}
                            ref={validationRef}
                        />
                    </div>
                    <div className='flexRow justifyBetween flexWrap rowGap alignEnd'>
                    <SmallTextInputComponent
                            shortInput = {true}
                            emailInput = {false}
                            phoneInput = {false}
                            alphabetOnly = {true}

                            labelName = 'Reference 2 Name'
                            isRequired = {true}
                            maxInput = {20}

                            inputValue = {fosterForm.reference2.name}
                            variableName = {FosterFormFieldNames.reference2.name}
                            onChange={onChange}
                            setValidity={setValidity}
                            ref={validationRef}
                        />
                        <SmallTextInputComponent
                            shortInput = {true}
                            emailInput = {false}
                            phoneInput = {true}
                            alphabetOnly = {false}

                            labelName = 'Reference 2 Phone Number'
                            isRequired = {true}
                            maxInput = {12}

                            inputValue = {fosterForm.reference2.phoneNumber}
                            variableName = {FosterFormFieldNames.reference2.phoneNumber}
                            onChange={onChange}
                            setValidity={setValidity}
                            ref={validationRef}
                        />
                    </div>
                    <div className='centerJustifySelf'>
                        <button className='submitBtn' onClick={validateAndSendInfo}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}