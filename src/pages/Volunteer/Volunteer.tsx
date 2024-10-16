import { BaseSyntheticEvent, useContext, useState } from 'react';
import TitleBanner from '../../components/TitleBannerComponent/TitleBannerComponent'
import './Volunteer.css'
import { IsMobileContext } from '../../contexts/IsMobileContext';
import { VolunteerFormFieldNames, defaultVolunteerForm, defaultVolunteerFormValidity } from '../../models/objects/VolunteerForm';
import TextInputComponent from '../../components/TextInputComponent/TextInputComponent';
import { InputTypes } from '../../models/constants/InputTypesEnum';
import { VolunteerApplicationRequest } from '../../models/DTOs/VolunteerApplicationRequest';
import { EmailService } from '../../services/EmailService/EmailService';
import { FormLoadingStatus } from '../../models/constants/FormLoadingEnum';
import SubmitButtonComponent from '../../components/SubmitButtonComponent/SubmitButtonComponent';

export default function Volunteer() {
    const [volunteerForm, setVolunteerForm] = useState(defaultVolunteerForm);
    const [validationState, setValidationState] = useState(defaultVolunteerFormValidity);
    const [hasSubmit, setHasSubmit] = useState(false);
    const [canHelpWithErrorMessage, setCanHelpErrorMessage] = useState("");
    const [formLoadingStatus, setFormLoadingStatus] = useState(FormLoadingStatus.notSubmitted);

    const isMobile = useContext<boolean>(IsMobileContext);

    const onChange = (event: BaseSyntheticEvent, variableName: string) => {
        const value = event.target.value;
        setVolunteerForm({
            ...volunteerForm,
            [variableName]: value
        });
    }

    const onChangeBool = (event: BaseSyntheticEvent, variableName: string) => {
        const value = event.target.checked;
        
        setVolunteerForm(previousVolunteerForm => {
            const updatedVolunteerForm = {
                ...previousVolunteerForm,
                [variableName]: value
            };
    
            const newCanHelpValidity =
                updatedVolunteerForm.canHelpEventSetup ||
                updatedVolunteerForm.canHelpFundraising ||
                updatedVolunteerForm.canHelpGrooming ||
                updatedVolunteerForm.canHelpPhotography ||
                updatedVolunteerForm.canHelpTraining ||
                updatedVolunteerForm.canHelpTransport;
            
            //Hide error message if it's showing and the new validity state is set to true
            if(canHelpWithErrorMessage != '' && newCanHelpValidity) {
                setCanHelpErrorMessage("");
            }

            setValidationState(prevValidationState => ({
                ...prevValidationState,
                canHelpValidity: newCanHelpValidity
            }));
    
            return updatedVolunteerForm;
        });
    }

    const setValidity = (variable: string, validity: boolean) =>{
        setValidationState({
            ...validationState,
            [variable]: validity
        });
    }

    const validateAndSendInfo = () => {
        setHasSubmit(true);

        if (!validationState.canHelpValidity){
            setCanHelpErrorMessage("Must have at least one field selected");
        }
        else{
            setCanHelpErrorMessage("");
        }

        const allValid = Object.values(validationState).every(v => v);

        if (allValid) {
            const request: VolunteerApplicationRequest = {
                firstName: volunteerForm.firstName,
                lastName: volunteerForm.lastName,
                email: volunteerForm.email,
                phone: volunteerForm.phoneNumber,
                volunteerOptions: {
                    transport: volunteerForm.canHelpTransport,
                    eventSetUp: volunteerForm.canHelpEventSetup,
                    fundraising: volunteerForm.canHelpFundraising,
                    photography: volunteerForm.canHelpPhotography,
                    grooming: volunteerForm.canHelpGrooming,
                    training: volunteerForm.canHelpTraining
                }
            }

            setFormLoadingStatus(FormLoadingStatus.loading);

            EmailService.PostVolunteerApplication(request)
            .then(() => {
                setFormLoadingStatus(FormLoadingStatus.success)
            })
            .catch(() => {
                setFormLoadingStatus(FormLoadingStatus.failed);
            });
        }
    }
    
    return (
        <div className='volunteer'>
            <TitleBanner
                title='Volunteer'
            ></TitleBanner>

            <div className={(isMobile ? 'justifyCenter' : 'justifyAround') + ' mainContainer flexRow rowGap flexWrap'}>
                <div className={(isMobile ? 'whyYouShouldMobileWidth' : 'whyYouShouldDesktopWidth') + ' contentBox whyYouShould flexColumn rowGap'}>
                    <h2 className='centerJustifySelf'>Join Our Cause!</h2>
                    <div className='pinkBackground flexColumn rowGap'>
                        <p>Volunteering at P.A.W.S offers a chance to directly impact the lives of animals in need. By dedicating your time, you provide essential care and attention to neglected or abandoned pets, helping them on their path to finding loving homes.</p>  
                        <img src="https://tonsofgoodness.com/wp-content/uploads/2020/09/1-2-1024x576.jpg" /> 
                        <p> Join a community passionate about animal welfare! It's a meaningful opportunity to contribute to a cause that relies on our collective kindness and support.</p>
                    </div>
                </div>
                <div className={(isMobile ? 'hidden' : '') + ' seperator'}/>
                <div className={(isMobile ? 'formWidthMobile' : 'volunteerFormWidthDesktop') + ' contentBox flexColumn rowGap'}>
                    <div>
                        <h2 className='centerJustifySelf'>Contact Information</h2>
                        <div className='flexRow centerJustifySelf'>
                            <p>Fields marked with a <span className='colorRed'> * </span> are required</p>
                        </div>
                    </div>
                    <div className='flexRow flexWrap rowGap columnGap'>
                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.name}

                                labelName = 'First Name'
                                isRequired = {true}
                                maxInput = {20}

                                inputValue={volunteerForm.firstName}
                                variableName={VolunteerFormFieldNames.firstName}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>

                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.name}

                                labelName = 'Last Name'
                                isRequired = {true}
                                maxInput = {20}

                                inputValue = {volunteerForm.lastName}
                                variableName = {VolunteerFormFieldNames.lastName}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>
                    </div>
                    <TextInputComponent
                        inputType={InputTypes.email}

                        labelName = 'Email'
                        isRequired = {true}
                        maxInput = {50}

                        inputValue={volunteerForm.email}
                        variableName={VolunteerFormFieldNames.email}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />
                    <TextInputComponent
                        inputType={InputTypes.phone}

                        labelName = 'Phone Number'
                        isRequired = {true}
                        maxInput = {12}

                        inputValue = {volunteerForm.phoneNumber}
                        variableName = {VolunteerFormFieldNames.phoneNumber}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />
                    <div className='flexColumn'>
                        <label>
                            <span>What can you help with? </span>
                            <span className='colorRed'> * </span>
                            <span className='error'>{canHelpWithErrorMessage}</span>
                        </label>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpTransport} onChange={(e) => onChangeBool(e, VolunteerFormFieldNames.canHelpTransport)}></input>
                            <label>Transport</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpEventSetup} onChange={(e) => onChangeBool(e, VolunteerFormFieldNames.canHelpEventSetup)}></input>
                            <label>Event Setup</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpFundraising} onChange={(e) => onChangeBool(e, VolunteerFormFieldNames.canHelpFundraising)}></input>
                            <label>Fundraising</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpPhotography} onChange={(e) => onChangeBool(e, VolunteerFormFieldNames.canHelpPhotography)}></input>
                            <label>Photography</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpGrooming} onChange={(e) => onChangeBool(e, VolunteerFormFieldNames.canHelpGrooming)}></input>
                            <label>Grooming</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={volunteerForm.canHelpTraining} onChange={(e) => onChangeBool(e, VolunteerFormFieldNames.canHelpTraining)}></input>
                            <label>Training</label>
                        </div>
                    </div>
                    <div className='centerJustifySelf'>
                        <SubmitButtonComponent 
                            validateAndSendInfo={validateAndSendInfo} 
                            loadingStatus={formLoadingStatus}
                            submitButtonText="Submit"
                            successText="Thank you for your volunteer application, we'll reach out shortly!"
                            failedText="Something went wrong submitting, please try again later"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}