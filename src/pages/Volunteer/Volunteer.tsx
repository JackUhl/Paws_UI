import { BaseSyntheticEvent, useContext, useState } from 'react';
import TitleBanner from '../../components/TitleBannerComponent/TitleBannerComponent'
import './Volunteer.css'
import { IsMobileContext } from '../../contexts/IsMobileContext';
import { VolunteerFormNames, defaultVolunteerForm, defaultVolunteerFormValidity } from '../../models/objects/VolunteerForm';
import { FormSetterService } from '../../services/FormSetterService';
import TextInputComponent from '../../components/TextInputComponent/TextInputComponent';
import { InputTypes } from '../../models/constants/InputTypesEnum';

export default function Volunteer() {
    const [volunteerForm, setVolunteerForm] = useState(defaultVolunteerForm);
    const [validationState, setValidationState] = useState(defaultVolunteerFormValidity);
    const [hasSubmit, setHasSubmit] = useState(false);
    const [canHelpWithErrorMsg, setCanHelpErrMsg] = useState('');

    const isMobile = useContext<boolean>(IsMobileContext)

    const onChange = (event: BaseSyntheticEvent, variableName: string) => {
        const value = event.target.value;
        setVolunteerForm(FormSetterService.setForm(variableName, value, volunteerForm));
    }

    const onChangeBool = (variable: boolean, variableName: string) => {
        const value = !variable;
        setVolunteerForm(FormSetterService.setForm(variableName, value, volunteerForm));
        console.log(volunteerForm, variableName, value);

    }

    const setValidity = (variable: string, validity:boolean) =>{
        setValidationState(FormSetterService.setForm(variable, validity, validationState));
    }

    const validateAndSendInfo = () => {
        //TODO when setting up the email API
        setHasSubmit(true);

        setValidationState(FormSetterService.setForm(
            'canHelpValidity',
            volunteerForm.canHelpEventSetup || volunteerForm.canHelpFundraising || volunteerForm.canHelpGrooming || volunteerForm.canHelpPhotography || volunteerForm.canHelpTraining || volunteerForm.canHelpTransport,
            validationState
        ));

        if (!validationState.canHelpValidity){
            setCanHelpErrMsg("Must have at least one field selected");
        }
        else{
            setCanHelpErrMsg("");
        }

        const allValid = Object.values(validationState).every(v => v);
        console.log(allValid, validationState)
        if (allValid) {
            // Submit the form
            console.log("Form submitted:", volunteerForm);
        } else {
            console.log("Form contains errors.");
        }
    }
    return (
        <div className='volunteer'>
            <TitleBanner
                title='Volunteer'
            ></TitleBanner>

            <div className={(isMobile ? 'justifyCenter' : 'justifyAround') + ' mainContainer flexRow rowGap flexWrap'}>
                <div className={(isMobile ? 'whyYouShouldMobileWidth' : 'whyYouShouldDesktopWidth') + ' whyYouShould flexColumn rowGap'}>
                    <h2 className='centerJustifySelf'>Join Our Cause!</h2>
                    <div className='pinkBackground flexColumn rowGap'>
                        <p>Volunteering at P.A.W.S offers a chance to directly impact the lives of animals in need. By dedicating your time, you provide essential care and attention to neglected or abandoned pets, helping them on their path to finding loving homes.</p>  
                        <img src="https://tonsofgoodness.com/wp-content/uploads/2020/09/1-2-1024x576.jpg" /> 
                        <p> Join a community passionate about animal welfare! It's a meaningful opportunity to contribute to a cause that relies on our collective kindness and support.</p>
                    </div>
                </div>
                <div className={(isMobile ? 'hidden' : '') + ' seperator'}/>
                <div className={(isMobile ? 'formMobileWidth' : 'formDesktopWidth') + ' volunteerForm flexColumn rowGap'}>
                    <h2 className='centerJustifySelf'>Contact Information</h2>
                    <div className='flexRow centerJustifySelf'>
                        <p>Fields marked with a <span className='required'> * </span> are required</p>
                    </div>
                    <div className='flexRow justifyBetween flexWrap rowGap'>
                        <TextInputComponent
                            shortInput = {true}
                            inputType={InputTypes.name}

                            labelName = 'First Name'
                            isRequired = {true}
                            maxInput = {20}

                            inputValue={volunteerForm.firstName}
                            variableName={VolunteerFormNames.firstName}
                            onChange={onChange}
                            setValidity={setValidity}
                            hasSubmit={hasSubmit}
                        />
                        <TextInputComponent
                            shortInput = {true}
                            inputType={InputTypes.name}

                            labelName = 'Last Name'
                            isRequired = {true}
                            maxInput = {20}

                            inputValue = {volunteerForm.lastName}
                            variableName = {VolunteerFormNames.lastName}
                            onChange={onChange}
                            setValidity={setValidity}
                            hasSubmit={hasSubmit}
                        />
                    </div>
                    <TextInputComponent
                        shortInput = {false}
                        inputType={InputTypes.email}

                        labelName = 'Email'
                        isRequired = {true}
                        maxInput = {50}

                        inputValue={volunteerForm.email}
                        variableName={VolunteerFormNames.email}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />
                    <TextInputComponent
                        shortInput = {false}
                        inputType={InputTypes.phone}

                        labelName = 'Phone Number'
                        isRequired = {true}
                        maxInput = {12}

                        inputValue = {volunteerForm.phoneNumber}
                        variableName = {VolunteerFormNames.phoneNumber}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />
                    <div className='flexColumn'>
                        <label>
                            <span>What can you help with? </span>
                            <span className='required'> * </span>
                            <span className='err'>{canHelpWithErrorMsg}</span>
                        </label>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpTransport} onChange={() => onChangeBool(volunteerForm.canHelpTransport, VolunteerFormNames.canHelpTransport)}></input>
                            <label>Transport</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpEventSetup} onChange={() => onChangeBool(volunteerForm.canHelpEventSetup, VolunteerFormNames.canHelpEventSetup)}></input>
                            <label>Event Setup</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpFundraising} onChange={() => onChangeBool(volunteerForm.canHelpFundraising, VolunteerFormNames.canHelpFundraising)}></input>
                            <label>Fundraising</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpPhotography} onChange={() => onChangeBool(volunteerForm.canHelpPhotography, VolunteerFormNames.canHelpPhotography)}></input>
                            <label>Photography</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpGrooming} onChange={() => onChangeBool(volunteerForm.canHelpGrooming, VolunteerFormNames.canHelpGrooming)}></input>
                            <label>Grooming</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpTraining} onChange={() => onChangeBool(volunteerForm.canHelpTraining, VolunteerFormNames.canHelpTraining)}></input>
                            <label>Training</label>
                        </div>
                    </div>
                    <div className='centerJustifySelf'>
                        <button className='submitButton' onClick={validateAndSendInfo}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}