import './Home.css';
import homeDog1 from '../../assets/homeDog1.jpg';
import homeDog2 from '../../assets/homeDog2.jpg';

export default function Home() {
    return (
        <>
            <div className='maxContentWrapper'>
                <div className='pairRowFlex'>
                    <div className='pairColumnFlex center'>
                        <h2>Nurturing Hope: We are P.A.W.S</h2>
                        <p>Welcome to P.A.W.S, the Pawsome Animal Welfare Society, where compassion meets action. Our dedicated team rescues animals in distress, providing them with medical care and finding them loving homes. But our mission goes further. We advocate for their well-being every step of the way, ensuring each paw print tells a tale of hope and restoration. Beyond rescue, we prioritize fostering animal-human connections through rehabilitation and personalized care. Join us in nurturing hope, one paw at a time.</p>
                    </div>
                    <img src={homeDog1} alt="homeDog1" className='homeDog1Img'/>
                </div>

                <div className='pairRowFlex'>
                    <img src={homeDog2} alt="homeDog2" className='homeDog1Img'/>
                    <div className='pairColumnFlex spaceBetween'>
                        <h2>Get Involved, Make a Difference</h2>
                        <p>Are you ready to join our journey of compassion? There are countless ways you can get involved and help make a lasting impact:</p>
                        <p><b>Adopt</b>: Give a loving home to a furry friend in need and experience the joy of companionship like no other.</p>
                        <p><b>Volunteer</b>: Be a part of our dedicated team and contribute your time, skills, and passion to our cause.</p>
                        <p><b>Foster</b>: Provide a temporary haven for animals on their way to finding forever homes.</p>
                        <p><b>Donate</b>: Your support ensures that we can continue our vital work and provide care to animals in need.</p>
                    </div>
                </div>
            </div>
        </>
    )
}