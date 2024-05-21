import { useState } from 'react';
import TitleBanner from '../../components/TitleBannerComponent/TitleBannerComponent'
import './Foster.css'
import { FosterForm, defaultFosterForm } from '../../models/objects/FosterForm';

export default function Foster() {

    const [fosterForm, setFosterForm] = useState(defaultFosterForm);

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
        <>
            <div className='fosterPageMainContainer'>
                <TitleBanner
                    title='Foster'
                ></TitleBanner>

                <div className='fosterHeros'>
                    <div className='imgTextAlign flexRow flexGap'>
                        <img src='https://pawsomeanimalwelfare.com/wp-content/uploads/2024/02/425834462_122118173588181652_7023249176980479669_n-1.jpg'/>
                        <div className='flexColumn pinkBackground'>
                            <div className='centerChildren'>
                                <h2>Become a Foster Hero</h2>
                            </div>
                            <p>Our foster volunteers are the heart and soul of our pet rescue efforts. Their willingness to open up their homes and hearts to animals in need is what allows us to save lives and find forever homes. The more people who step up to foster, the more animals we can help. It's thanks to our amazing fosters that we can make a difference in the lives of these deserving animals. Become a Foster Hero Today!</p>
                        </div>
                    </div>
                </div>
                <div className='fosterForm '>
                    <div className='centerChildren'>
                        <h2>Foster Application</h2>
                    </div>
                    <div className='flexRow centerChildren'>
                        <p>Fields marked with a <span className='required'> * </span> are required</p>
                    </div>
                    <div className='flexRow flexGap'>
                        <div className='fillHalf inputField '>
                            <label> First Name <span className='required'> * </span></label><br/>
                            <input className='firstNameInput' type='text' value={fosterForm.firstName} onChange={handleFirstNameChange}></input>
                        </div>
                        <div className='fillHalf inputField '>
                            <label> Last Name <span className='required'> * </span></label><br/>
                            <input className='lastNameInput' type='text' value={fosterForm.lastName} onChange={handleLastNameChange}></input>
                        </div>
                    </div>
                    <div className='flexRow flexGap'>
                        <div className='fillHalf inputField '>
                            <label> Phone Number <span className='required'> * </span></label><br/>
                            <input className='phoneNumberInput' type='text' value={fosterForm.phoneNumber} onChange={handlePhoneNumberChange}></input>
                        </div>
                        <div className='fillHalf inputField '>
                            <label> Email <span className='required'> * </span></label><br/>
                            <input className='emailInput' type='text' value={fosterForm.email} onChange={handleEmailChange}></input>
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
                    <div className='flexRow flexGap'>
                        <div className='fillHalf inputField '>
                            <label> Reference 1 Name <span className='required'> * </span></label><br/>
                            <input className='reference1NameInput' type='text' value={fosterForm.reference1.name} onChange={handleReference1NameChange}></input>
                        </div>
                        <div className='fillHalf inputField '>
                            <label> Reference 1 Phone Number <span className='required'> * </span></label><br/>
                            <input className='reference1PhoneInput' type='text' value={fosterForm.reference1.phoneNumber} onChange={handleReference1PhoneChange}></input>
                        </div>
                    </div>
                    <div className='flexRow flexGap'>
                        <div className='fillHalf inputField '>
                            <label> Reference 2 Name <span className='required'> * </span></label><br/>
                            <input className='reference2NameInput' type='text' value={fosterForm.reference2.name} onChange={handleReference2NameChange}></input>
                        </div>
                        <div className='fillHalf inputField '>
                            <label> Reference 2 Phone Number <span className='required'> * </span></label><br/>
                            <input className='reference2PhoneInput' type='text' value={fosterForm.reference2.phoneNumber} onChange={handleReference2PhoneChange}></input>
                        </div>
                    </div>
                    <div className='centerChildren'>
                        <button className='submitBtn' onClick={validateAndSendInfo}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}