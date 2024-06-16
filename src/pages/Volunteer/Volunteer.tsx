import { useContext, useState } from 'react';
import TitleBanner from '../../components/TitleBannerComponent/TitleBannerComponent'
import './Volunteer.css'
import { IsMobileContext } from '../../contexts/IsMobileContext';

export default function Volunteer() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [transport, setTransport] = useState(false);
    const [eventSetUp, setEventSetUp] = useState(false);
    const [fundraising, setFundraising] = useState(false);
    const [photography, setPhotography] = useState(false);
    const [grooming, setGrooming] = useState(false);
    const [training, setTraining] = useState(false);

    const isMobile = useContext<boolean>(IsMobileContext)

    const handleFirstNameChange = (event:React.FormEvent<HTMLInputElement>) => {
        setFirstName(event.currentTarget.value);
    }
    const handleLastNameChange = (event:React.FormEvent<HTMLInputElement>) => {
        setLastName(event.currentTarget.value);
    }
    const handleEmailChange = (event:React.FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    }
    const handlePhoneChange = (event:React.FormEvent<HTMLInputElement>) => {
        setPhone(event.currentTarget.value);
    }
    const handleTransportChange = () => {
        setTransport(!transport);
    }
    const handleEventSetUpChange = () => {
        setEventSetUp(!eventSetUp);
    }
    const handleFundraisingChange = () => {
        setFundraising(!fundraising);
    }
    const handlePhotographyChange = () => {
        setPhotography(!photography);
    }
    const handleGroomingChange = () => {
        setGrooming(!grooming);
    }
    const handleTrainingChange = () => {
        setTraining(!training);
    }
    const validateAndSendInfo = () => {
        //TODO when setting up the email API
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
                        <div className={isMobile ? 'longInputContainer' : 'shortInputContainer'}>
                            <label> First Name <span className='required'> * </span></label><br/>
                            <input className='textInput' type='text' value={firstName} onChange={handleFirstNameChange}></input>
                        </div>
                        <div className={isMobile ? 'longInputContainer' : 'shortInputContainer'}>
                            <label> Last Name <span className='required'> * </span></label><br/>
                            <input className='textInput' type='text' value={lastName} onChange={handleLastNameChange}></input>
                        </div>
                    </div>
                    <div className='longInputContainer'>
                        <label> Email <span className='required'> * </span></label><br/>
                        <input className='textInput' type='text' value={email} onChange={handleEmailChange}></input>
                    </div>
                    <div className='longInputContainer'>
                        <label> Phone Number <span className='required'> * </span></label><br/>
                        <input className='textInput' type='tel' value={phone} onChange={handlePhoneChange}></input>
                    </div>
                    <div className='flexColumn'>
                        <label>What can you help with? <span className='required'> * </span></label>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={transport} onChange={handleTransportChange}></input>
                            <label>Transport</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={eventSetUp} onChange={handleEventSetUpChange}></input>
                            <label>Event Setup</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={fundraising} onChange={handleFundraisingChange}></input>
                            <label>Fundraising</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={photography} onChange={handlePhotographyChange}></input>
                            <label>Photography</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={grooming} onChange={handleGroomingChange}></input>
                            <label>Grooming</label>
                        </div>
                        <div className='flexRow alignCenter'>
                            <input type='checkbox' checked={training} onChange={handleTrainingChange}></input>
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