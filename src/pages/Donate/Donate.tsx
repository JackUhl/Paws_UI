import './Donate.css'
import LinkButtonComponent from '../../components/LinkButtonComponent/LinkButtonComponent'
import TitleBanner from '../../components/TitleBannerComponent/TitleBannerComponent'
import paypalIcon from '../../assets/paypalLogoIcon.svg'
import venmoIcon from '../../assets/venmoLogoIcon.svg'
import amazonIcon from '../../assets/amazonLogoIcon.svg'
import yalina from '../../assets/yalina.jpeg'
import winston from '../../assets/winston.jpg'
import dogToys from '../../assets/dogToys.jpg'
import { PaypalUrl, VenmoUrl, AmazonWishlistUrl } from '../../models/constants/UrlConstants'
import { useContext } from 'react'
import { IsMobileContext } from '../../contexts/IsMobileContext'

export default function Donate() {
    const isMobile = useContext<boolean>(IsMobileContext)

    return (
        <div className='donate'>
            <TitleBanner
                title='Donate'
            ></TitleBanner>
            <div className='mainContainer'>
                <div className='contentBox flexColumn'>
                    <h2 className={isMobile ? 'justifySelf' : ''}>Make an Impact Today!</h2>
                    <p>Looking for a way to make a pawsitive impact? Support PAWS, the Pawsome Animal Welfare Society, and help us continue our mission! With your generous donations and unwavering support, we can create a warm and nurturing environment where all pets feel safe and loved.</p>
                    <p>Your contributions are the backbone of our mission. With the majority of donations allocated towards essential pet supplies and vet bills, every dollar you donate directly impacts the well-being and care of our rescue pets, ensuring they receive the support they need to thrive.</p>
                </div>
                <div className='contentBox flexColumn'>
                    <h2 className={isMobile ? 'justifySelf' : ''}>How Your Donations Help</h2>
                    <div className='flexRow alignStart justifyAround flexWrap rowGap'>
                        <div className='flexColumn rowGap exampleItem'>
                            <img src={yalina} alt="yalina" />
                            <p>With your help, we are able to afford medical procedures such as providing life-saving heartworm treatment for one of our rescues, Yalina, ensuring a happy and healthy life.</p>
                        </div>
                        <div className='flexColumn rowGap exampleItem'>
                            <img src={winston} alt="winston" />
                            <p>Donations allow us to afford services such as hospice care which offered comfort and dignity for one of our rescues, Winston, so that he felt loved and supported.</p>
                        </div>
                        <div className='flexColumn rowGap exampleItem'>
                            <img src={dogToys} alt="dog toys" />
                            <p>We're able to purchase essential pet supplies such as food, bedding, and toys to make sure our rescue dogs had their needs met as they await adoption</p>                        
                        </div>
                    </div>
                </div>
                <div className='contentBox flexColumn'>
                    <h2 className={isMobile ? 'justifySelf' : ''}>Donate</h2>
                    <p>Any and all donations are appreciated! If you'd like to donate by mail, you can send your donation to our PO box at: 8901-A Beechmont #249, Cincinnati, OH 45255</p>
                    <div className='flexRow alignCenter justifyCenter rowGap columnGap flexWrap'>
                        <LinkButtonComponent
                            linksToInternalRoute={false}
                            route={PaypalUrl}
                            text='Paypal'
                            imgPath={paypalIcon}>
                        </LinkButtonComponent>
                        <LinkButtonComponent
                            linksToInternalRoute={false}
                            route={VenmoUrl}
                            text='Venmo'
                            imgPath={venmoIcon}>
                        </LinkButtonComponent>
                        <LinkButtonComponent
                            linksToInternalRoute={false}
                            route={AmazonWishlistUrl}
                            text='Amazon'
                            imgPath={amazonIcon}>
                        </LinkButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}