import './Layout.css'
import { Link, Outlet } from 'react-router-dom'
import { HomeNav, NavItems } from '../../models/constants/NavBarConstants'
import pawsLogo from '../../assets/pawsLogo.png'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import { useContext } from 'react'
import { IsMobileContext } from '../../contexts/IsMobileContext'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

export default function Layout() {
    const isMobile = useContext(IsMobileContext)

    return (
        <div className='layout flexColumn textSize'>
            <div className={(isMobile ? 'justifyCenter' : 'justifyStart') + ' flexRow'}><Link to={HomeNav.route}><img src={pawsLogo} className="logo" alt="PAWS logo" /></Link></div>
            <NavBarComponent
                navBarItems = {NavItems}
            />
            <Outlet />
            <FooterComponent />
        </div>
    )
}