import './FooterComponent.css'
import miniLogo from '../../assets/pawsMiniLogo.png'
import { useContext } from 'react'
import { IsMobileContext } from '../../contexts/IsMobileContext';
import { GeneralEmail, PetFinderPage, AdoptAPetPage} from '../../models/constants/UrlConstants';

export default function FooterComponent() {
    const isMobile = useContext<boolean>(IsMobileContext);

    return (
        <div className='footer bottomOfScreen'>
            <div className='outerFooterContainer centerJustifySelf'>
                <div className='innerFooterContainer flexRow justifyAround alignStart flexWrap rowGap'>
                    <div className={(isMobile ? 'footerTextContainerMobile' : 'footerTextContainerDesktop') + ' flexColumn'}>
                        <h2 className='footerTitle'>Contact</h2>
                        <p><b>Address:</b> 8190A Beechmont #249, Cincinnati, OH 45255</p>
                        <p><b>Email:</b> <a href={"mailto:" + GeneralEmail} className='hyperLink'>{GeneralEmail}</a></p>
                        <p><b>Phone:</b> (513) 604-9789</p>
                    </div>
                    <img src={miniLogo} className={(isMobile ? 'hidden' : '') + ' footerLogo centerAlignSelf'} />
                    <div className={(isMobile ? 'footerTextContainerMobile' : 'footerTextContainerDesktop') + ' flexColumn'}>
                        <h2 className='footerTitle'>Additional Resources</h2>
                        <a href={PetFinderPage} target='_blank' className='hyperLink'>Petfinder Page</a>
                        <a href={AdoptAPetPage} target='_blank' className='hyperLink'>Adopt a Pet Page</a>
                    </div>
                </div>
            </div>
        </div>
    )
}