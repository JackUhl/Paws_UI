import './NotFound.css'
import notFound from '../../assets/notFound.jpg'
import { useContext } from 'react';
import { IsMobileContext } from '../../contexts/IsMobileContext';

export default function NotFound() {
    const isMobile = useContext<boolean>(IsMobileContext);
    
    return (
        <div className='notFound'>
            <div className='mainContainer'>
                <div className='contentBox flexRow flexWrap justifyBetween alignCenter'>
                    <img src={notFound} className={(isMobile ? 'imageMobileWidth' : 'imageDesktopWidth') + ' image'} />
                    <div className={isMobile ? 'infoMobileWidth' : 'infoDesktopWidth'}>
                        <h2>404 Not Found</h2>
                        <p>This page does not exist or was moved. Please try again later.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}