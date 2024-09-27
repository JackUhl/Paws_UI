import { Link} from "react-router-dom";
import { BaseSyntheticEvent, useContext, useEffect, useState} from "react";
import { ImageSlide } from "../../models/objects/ImageSlide";
import ImageSliderComponent from "../../components/ImageSliderComponent/ImageSliderComponent";
import './PetDetails.css'
import { AdoptablePetsRoute } from "../../models/constants/InternalUrlConstants";
import { IsMobileContext } from "../../contexts/IsMobileContext";
import { IPetDetails } from "./IPetDetails";
import checkMarkIcon from "../../assets/checkMarkIcon.svg"
import cancelIcon from "../../assets/cancelIcon.svg"
import questionMarkIcon from "../../assets/questionMarkIcon.svg"
import TextInputComponent from "../../components/TextInputComponent/TextInputComponent";
import { InputTypes } from "../../models/constants/InputTypesEnum";
import { AdoptionFormFieldNames, defaultAdoptionForm, defaultAdoptionFormValidity } from "../../models/objects/AdoptionForm";

export default function PetDetails(props: IPetDetails) {
    const [adoptionForm, setAdoptionForm] = useState(defaultAdoptionForm);
    const [validationState, setValidationState] = useState(defaultAdoptionFormValidity);
    const [hasSubmit, setHasSubmit] = useState(false);

    const isMobile = useContext<boolean>(IsMobileContext);

    const onChange = (event: BaseSyntheticEvent, variableName: string) => {
        const value = event.target.value;
        setAdoptionForm(adoptionForm => ({
            ...adoptionForm,
            [variableName]: value
        }));
    }

    const setValidity = (variable: string, validity: boolean) =>{
        setValidationState(validationState => ({
            ...validationState,
            [variable]: validity
        }));
    }

    const validateAndSendInfo = () => {
        //TODO when setting up the email API
        setHasSubmit(true);

        const allValid = Object.values(validationState).every(v => v);
        console.log(validationState);

        if (allValid) {
            // Submit the form
            console.log("Form submitted:", adoptionForm);
        } else {
            console.log("Form contains errors.");
        }
    }

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    let imageSliderSlides : ImageSlide[] = [];
    props.adoptablePetInfo.photos.map(image => {
        let fullSized = image.full;
        let slide : ImageSlide = {
            src: fullSized
        }
        imageSliderSlides.push(slide);
    });

    const fullBreed = `${props.adoptablePetInfo.age} ${props.adoptablePetInfo.breeds.primary + (props.adoptablePetInfo.breeds.mixed ? ` Mix` : "")}`;
    const genderStatus = `${props.adoptablePetInfo.gender} ${props.adoptablePetInfo.attributes.spayed_neutered ? " (Fixed)" : " (Not Fixed)"}`;

    const getPropertyImage = (property: boolean | null): React.ReactNode => {
        let icon;
        
        if(property == true) {
            icon = checkMarkIcon;
        }
        else if(property == false) {
            icon = cancelIcon;
        }
        else {
            icon = questionMarkIcon
        }

        return <img src={icon} className="icon" />
    }

    return (
        <div className="petDetails flexColumn rowGap">
            <div>
                <Link to={AdoptablePetsRoute} className="clickItem">&#8249; Back to Adoptable Pets</Link>
            </div>
            <div className="flexRow justifyBetween alignCenter flexWrap rowGap">
                <div className={isMobile ? "petImagesMobileWidth" : "petImagesDesktopWidth"}>
                    <ImageSliderComponent
                        slides={imageSliderSlides}
                        roundedImages={true}
                    />
                </div>
                <div className={(isMobile ? "petInfoMobileWidth" : "petInfoDesktopWidth") + " flexColumn rowGap"}>
                    <div>
                        <h2>{props.adoptablePetInfo.name}</h2>
                        <p>{fullBreed} | {genderStatus}</p>
                    </div>

                    <div>
                        <div className="flexRow flexWrap columnGap">
                            <div className="flexColumn columnWidth">
                                <div className="flexRow justifyBetween alignCenter">Good with children {getPropertyImage(props.adoptablePetInfo.environment.children)}</div>
                                <div className="flexRow justifyBetween alignCenter">Good with dogs {getPropertyImage(props.adoptablePetInfo.environment.dogs)}</div>
                                <div className="flexRow justifyBetween alignCenter">Good with cats {getPropertyImage(props.adoptablePetInfo.environment.cats)}</div>
                            </div>
                            <div className="flexColumn columnWidth">
                                <div className="flexRow justifyBetween alignCenter">House trained {getPropertyImage(props.adoptablePetInfo.attributes.house_trained)}</div>
                                <div className="flexRow justifyBetween alignCenter">Special needs {getPropertyImage(props.adoptablePetInfo.attributes.special_needs)}</div>
                                <div className="flexRow justifyBetween alignCenter">Shots current {getPropertyImage(props.adoptablePetInfo.attributes.shots_current)}</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>{props.adoptablePetInfo.description} 
                            <Link to={props.adoptablePetInfo.url} target="_blank" className="clickItem">Read More</Link>
                        </p>
                    </div>                    
                </div>
            </div>
            <div className="flexRow justifyCenter">
                <div className={(isMobile ? 'formWidthMobile' : 'formWidthDesktop') + ' flexColumn rowGap'}>
                    <div>
                        <h2 className="centerJustifySelf">Interested in Adoption?</h2>
                        <div className="centerJustifySelf">
                            <p>Fields marked with a <span className='required'> * </span> are required</p>
                        </div>
                    </div>
                    
                    <div className="flexRow flexWrap rowGap columnGap">
                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.name}

                                labelName = "First Name"
                                isRequired = {true}
                                maxInput = {20}

                                inputValue = {adoptionForm.firstName}
                                variableName = {AdoptionFormFieldNames.firstName}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>

                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.name}

                                labelName = "Last Name"
                                isRequired = {true}
                                maxInput = {20}

                                inputValue = {adoptionForm.lastName}
                                variableName = {AdoptionFormFieldNames.lastName}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>
                    </div>

                    <TextInputComponent
                        inputType={InputTypes.email}

                        labelName = 'Email'
                        isRequired = {false}
                        maxInput = {50}

                        inputValue={adoptionForm.email}
                        variableName={AdoptionFormFieldNames.email}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />

                    <TextInputComponent
                        inputType={InputTypes.phone}

                        labelName = 'Phone Number'
                        isRequired = {true}
                        maxInput = {12}

                        inputValue = {adoptionForm.phoneNumber}
                        variableName = {AdoptionFormFieldNames.phoneNumber}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />

                    <TextInputComponent
                        inputType={InputTypes.address}

                        labelName = 'Address Line 1'
                        isRequired = {false}
                        maxInput = {20}

                        inputValue = {adoptionForm.address1}
                        variableName = {AdoptionFormFieldNames.address1}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />

                    <TextInputComponent
                        inputType={InputTypes.address}

                        labelName = 'Address Line 2'
                        isRequired = {false}
                        maxInput = {20}

                        inputValue = {adoptionForm.address2}
                        variableName = {AdoptionFormFieldNames.address2}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />

                    <div className="flexRow flexWrap rowGap columnGap">
                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.city}

                                labelName = 'City'
                                isRequired = {false}
                                maxInput = {20}

                                inputValue = {adoptionForm.city}
                                variableName = {AdoptionFormFieldNames.city}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>

                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.state}

                                labelName = 'State'
                                isRequired = {false}
                                maxInput = {20}

                                inputValue = {adoptionForm.state}
                                variableName = {AdoptionFormFieldNames.state}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>

                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.zip}

                                labelName = 'Zip'
                                isRequired = {false}
                                maxInput = {5}

                                inputValue = {adoptionForm.zip}
                                variableName = {AdoptionFormFieldNames.zip}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>
                    </div>

                    <h2 className="centerJustifySelf">Current Pets</h2>

                    <TextInputComponent
                        inputType={InputTypes.textArea}

                        labelName = 'What pets do you currently have?'
                        isRequired = {true}
                        maxInput = {500}

                        inputValue = {adoptionForm.currentPets}
                        variableName = {AdoptionFormFieldNames.currentPets}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />

                    <TextInputComponent
                        inputType={InputTypes.textArea}

                        labelName = "What's the name and age of your household members"
                        isRequired = {false}
                        maxInput = {500}

                        inputValue = {adoptionForm.householdMembers}
                        variableName = {AdoptionFormFieldNames.householdMembers}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />

                    <TextInputComponent
                        inputType={InputTypes.textArea}

                        labelName = "If renting, please provide the landlord's name and contact info"
                        isRequired = {false}
                        maxInput = {500}

                        inputValue = {adoptionForm.landlordInfo}
                        variableName = {AdoptionFormFieldNames.landlordInfo}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />

                    <h2 className="centerJustifySelf">References</h2>

                    <div className="flexRow flexWrap rowGap columnGap">
                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.name}

                                labelName = "Reference 1 Name"
                                isRequired = {true}
                                maxInput = {20}

                                inputValue = {adoptionForm.reference1Name}
                                variableName = {AdoptionFormFieldNames.reference1Name}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>

                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.phone}

                                labelName = "Reference 1 Phone"
                                isRequired = {true}
                                maxInput = {12}

                                inputValue = {adoptionForm.reference1Phone}
                                variableName = {AdoptionFormFieldNames.reference1Phone}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>
                    </div>

                    <div className="flexRow flexWrap rowGap columnGap">
                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.name}

                                labelName = "Reference 2 Name"
                                isRequired = {true}
                                maxInput = {20}

                                inputValue = {adoptionForm.reference2Name}
                                variableName = {AdoptionFormFieldNames.reference2Name}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>

                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.phone}

                                labelName = "Reference 2 Phone"
                                isRequired = {true}
                                maxInput = {12}

                                inputValue = {adoptionForm.reference2Phone}
                                variableName = {AdoptionFormFieldNames.reference2Phone}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>
                    </div>

                    <div className="flexRow flexWrap rowGap columnGap">
                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.name}

                                labelName = "Referene 3 Name"
                                isRequired = {true}
                                maxInput = {20}

                                inputValue = {adoptionForm.reference3Name}
                                variableName = {AdoptionFormFieldNames.reference3Name}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>

                        <div className={isMobile ? "formFlexItemMobile" : "formFlexItemDesktop"}>
                            <TextInputComponent
                                inputType={InputTypes.phone}

                                labelName = "Reference 3 Phone"
                                isRequired = {true}
                                maxInput = {12}

                                inputValue = {adoptionForm.reference3Phone}
                                variableName = {AdoptionFormFieldNames.reference3Phone}
                                onChange={onChange}
                                setValidity={setValidity}
                                hasSubmit={hasSubmit}
                            />
                        </div>
                    </div>

                    <h2 className="centerJustifySelf">Veterinary Info</h2>

                    <TextInputComponent
                        inputType={InputTypes.name}

                        labelName = "Vet Name"
                        isRequired = {false}
                        maxInput = {20}

                        inputValue = {adoptionForm.vetName}
                        variableName = {AdoptionFormFieldNames.vetName}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />

                    <TextInputComponent
                        inputType={InputTypes.phone}

                        labelName = "Vet Phone Number"
                        isRequired = {false}
                        maxInput = {12}

                        inputValue = {adoptionForm.vetPhone}
                        variableName = {AdoptionFormFieldNames.vetPhone}
                        onChange={onChange}
                        setValidity={setValidity}
                        hasSubmit={hasSubmit}
                    />

                    <div className="centerJustifySelf">
                        <button className='submitBtn' onClick={validateAndSendInfo}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}