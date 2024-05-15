import './Donate.css'
import LinkButtonComponent from '../../components/RouteButtonComponent/LinkButtonComponent'
import TitleBanner from '../../components/TitleBannerComponent/TitleBannerComponent'

export default function Donate() {
    return (
        <>
            <TitleBanner
                title='Donate'
            ></TitleBanner>
            <div className='maxContentWrapper'>
                <div className='donateInfo'>
                    <h2>Make a Pawsitive Impact Today!</h2>
                    <p>Looking for a way to make a pawsitive impact? Support PAWS, the Pawsome Animal Welfare Society, and help us continue our mission! With your generous donations and unwavering support, we can create a warm and nurturing environment where all pets feel safe and loved.</p>
                </div>
                <div className='donateRowFlex'>
                    <div className='donateColumnFlex'>
                        <LinkButtonComponent
                            linksToInternalRoute={false}
                            route='https://www.paypal.com/paypalme/PawsomeAnimalWelfare'
                            text='Donate with Paypal'>
                        </LinkButtonComponent>
                    </div>
                    <div className='donateColumnFlex'>
                        <LinkButtonComponent
                            linksToInternalRoute={false}
                            route='https://venmo.com/u/Gayla-Hawks'
                            text='Donate with Venmo'
                        ></LinkButtonComponent>
                    </div>
                </div>
            </div>
        </>
    )
}