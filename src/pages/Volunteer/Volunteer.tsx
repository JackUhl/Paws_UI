import { FormEvent, useState } from 'react';
import TitleBanner from '../../components/TitleBannerComponent/TitleBannerComponent'
import './Volunteer.css'

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
    const handleTransportChange = (event:React.FormEvent<HTMLInputElement>) => {
        setTransport(!transport);
    }
    const handleEventSetUpChange = (event:React.FormEvent<HTMLInputElement>) => {
        setEventSetUp(!eventSetUp);
    }
    const handleFundraisingChange = (event:React.FormEvent<HTMLInputElement>) => {
        setFundraising(!fundraising);
    }
    const handlePhotographyChange = (event:React.FormEvent<HTMLInputElement>) => {
        setPhotography(!photography);
    }
    const handleGroomingChange = (event:React.FormEvent<HTMLInputElement>) => {
        setGrooming(!grooming);
    }
    const handleTrainingChange = (event:React.FormEvent<HTMLInputElement>) => {
        setTraining(!training);
    }
    const validateAndSendInfo = () => {
        //TODO when setting up the email API
    }
    return (
        <div className='volunteerPage'>
            <TitleBanner
                title='Volunteer'
            ></TitleBanner>

            <div className='mainContain flexRow'>
                <div className='whyYouShould'>
                    <div className='centerChildren'>
                        <h2>Join our cause!</h2>
                    </div>
                    <div className='pinkBackground'>
                        <p>Volunteering at P.A.W.S offers a chance to directly impact the lives of animals in need. By dedicating your time, you provide essential care and attention to neglected or abandoned pets, helping them on their path to finding loving homes.</p>
                        <div className='centerChildren'>  
                            <img src="https://tonsofgoodness.com/wp-content/uploads/2020/09/1-2-1024x576.jpg" />
                        </div>  
                        <p> Join a community passionate about animal welfare! It's a meaningful opportunity to contribute to a cause that relies on our collective kindness and support.</p>
                    </div>
                </div>
                <div className='seperator'/>
                <div className='form'>
                    <div className='centerChildren'>
                        <h2>Contact Information</h2>
                    </div>
                    <div className='nameContain flexRow flexGap'>
                        <div>
                            <label> First Name </label><br/>
                            <input className='short' type='text' value={firstName} onChange={handleFirstNameChange}></input>
                        </div>
                        <div>
                            <label> Last Name </label><br/>
                            <input className='short' type='text' value={lastName} onChange={handleLastNameChange}></input>
                        </div>
                    </div>
                    <div>
                        <label> Email </label><br/>
                        <input className='long' type='text' value={email} onChange={handleEmailChange}></input>
                    </div>
                    <div>
                        <label> Phone Number </label><br/>
                        <input className='long' type='tel' value={phone} onChange={handlePhoneChange}></input>
                    </div>
                    <div className='centerChildren'>
                        <h4>What can you help with?</h4>
                    </div>
                    
                    <div className='checkBoxContainer '>
                        <div>
                            <input type='checkbox' checked={transport} onChange={handleTransportChange}></input>
                            <label>Transport</label><br/>
                            <input type='checkbox' checked={eventSetUp} onChange={handleEventSetUpChange}></input>
                            <label>Event Set Up</label><br/>
                            <input type='checkbox' checked={fundraising} onChange={handleFundraisingChange}></input>
                            <label>Fundraising</label><br/>
                        </div>
                        <div>
                            <input type='checkbox' checked={photography} onChange={handlePhotographyChange}></input>
                            <label>Photography</label><br/>
                            <input type='checkbox' checked={grooming} onChange={handleGroomingChange}></input>
                            <label>Grooming</label><br/>
                            <input type='checkbox' checked={training} onChange={handleTrainingChange}></input>
                            <label>Training</label><br/>
                        </div>
                    </div>
                    <div className='centerChildren'>
                        <button className='submitBtn' onClick={validateAndSendInfo}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}