import { useContext, useState } from 'react';
import TitleBanner from '../../components/TitleBannerComponent/TitleBannerComponent'
import './Foster.css'
import { defaultFosterForm } from '../../models/objects/FosterForm';
import { IsMobileContext } from '../../contexts/IsMobileContext';

export default function Foster() {

    const [fosterForm, setFosterForm] = useState(defaultFosterForm);

    const isMobile = useContext<boolean>(IsMobileContext)

    const handleFirstNameChange = (event:React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        setFosterForm(prevForm => ({
            ...prevForm,
            firstName: newValue
        }));
    }

    const handleLastNameChange = (event:React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        setFosterForm(prevForm => ({
            ...prevForm,
            lastName: newValue
        }));
    }

    const handlePhoneNumberChange = (event:React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        setFosterForm(prevForm => ({
            ...prevForm,
            phoneNumber: newValue
        }));
    }

    const handleEmailChange = (event:React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        setFosterForm(prevForm => ({
            ...prevForm,
            email: newValue
        }));
    }

    const handleWhyYouWantChange = (event:React.FormEvent<HTMLTextAreaElement>) => {
        const newValue = event.currentTarget.value;
        setFosterForm(prevForm => ({
            ...prevForm,
            whyDoYouWantTo: newValue
        }));
    }

    const handlePetsYouHaveChange = (event:React.FormEvent<HTMLTextAreaElement>) => {
        const newValue = event.currentTarget.value;
        setFosterForm(prevForm => ({
            ...prevForm,
            whatPetsYouHave: newValue
        }));
    }

    const handleReference1NameChange = (event:React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        setFosterForm(prevForm => ({
            ...prevForm,
            reference1: {
                ...prevForm.reference1,
                name: newValue
            }
        }));
    }

    const handleReference1PhoneChange = (event:React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        setFosterForm(prevForm => ({
            ...prevForm,
            reference1: {
                ...prevForm.reference1,
                phoneNumber: newValue
            }
        }));
    }

    const handleReference2NameChange = (event:React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        setFosterForm(prevForm => ({
            ...prevForm,
            reference1: {
                ...prevForm.reference2,
                name: newValue
            }
        }));
    }

    const handleReference2PhoneChange = (event:React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        setFosterForm(prevForm => ({
            ...prevForm,
            reference1: {
                ...prevForm.reference2,
                phoneNumber: newValue
            }
        }));
    }

    const validateAndSendInfo = () => {
        //TODO when connected to a service
    }

    return (
        <div className='foster'>
            <TitleBanner
                title='Foster'
            ></TitleBanner>
            <div className='mainContainer flexRow justifyCenter rowGap flexWrap'>
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
                        <div className={isMobile ? 'longInputContainer' : 'shortInputContainer'}>
                            <label> First Name <span className='required'> * </span></label><br/>
                            <input className='inputField' type='text' value={fosterForm.firstName} onChange={handleFirstNameChange}></input>
                        </div>
                        <div className={isMobile ? 'longInputContainer' : 'shortInputContainer'}>
                            <label> Last Name <span className='required'> * </span></label><br/>
                            <input className='inputField' type='text' value={fosterForm.lastName} onChange={handleLastNameChange}></input>
                        </div>
                    </div>
                    <div className='flexRow justifyBetween flexWrap rowGap'>
                        <div className={isMobile ? 'longInputContainer' : 'shortInputContainer'}>
                            <label> Phone Number <span className='required'> * </span></label><br/>
                            <input className='inputField' type='text' value={fosterForm.phoneNumber} onChange={handlePhoneNumberChange}></input>
                        </div>
                        <div className={isMobile ? 'longInputContainer' : 'shortInputContainer'}>
                            <label> Email <span className='required'> * </span></label><br/>
                            <input className='inputField' type='text' value={fosterForm.email} onChange={handleEmailChange}></input>
                        </div>
                    </div>
                    <div className='largeInputField '>
                        <label> Why do you want to foster?</label><br/>
                        <textarea name="paragraph_text" value={fosterForm.whyDoYouWantTo} onChange={handleWhyYouWantChange}></textarea>
                    </div>
                    <div className='largeInputField '>
                        <label> What pets do you currently have?<span className='required'> * </span></label><br/>
                        <textarea name="paragraph_text" value={fosterForm.whatPetsYouHave} onChange={handlePetsYouHaveChange}></textarea>
                    </div>
                    <div className='flexRow justifyBetween flexWrap rowGap alignEnd'>
                        <div className={isMobile ? 'longInputContainer' : 'shortInputContainer'}>
                            <label> Reference 1 Name <span className='required'> * </span></label>
                            <input className='inputField' type='text' value={fosterForm.reference1.name} onChange={handleReference1NameChange}></input>
                        </div>
                        <div className={isMobile ? 'longInputContainer' : 'shortInputContainer'}>
                            <label> Reference 1 Phone Number <span className='required'> * </span></label>
                            <input className='inputField' type='text' value={fosterForm.reference1.phoneNumber} onChange={handleReference1PhoneChange}></input>
                        </div>
                    </div>
                    <div className='flexRow justifyBetween flexWrap rowGap alignEnd'>
                        <div className={isMobile ? 'longInputContainer' : 'shortInputContainer'}>
                            <label> Reference 2 Name <span className='required'> * </span></label>
                            <input className='inputField' type='text' value={fosterForm.reference2.name} onChange={handleReference2NameChange}></input>
                        </div>
                        <div className={isMobile ? 'longInputContainer' : 'shortInputContainer'}>
                            <label> Reference 2 Phone Number <span className='required'> * </span></label>
                            <input className='inputField' type='text' value={fosterForm.reference2.phoneNumber} onChange={handleReference2PhoneChange}></input>
                        </div>
                    </div>
                    <div className='centerJustifySelf'>
                        <button className='submitBtn' onClick={validateAndSendInfo}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}