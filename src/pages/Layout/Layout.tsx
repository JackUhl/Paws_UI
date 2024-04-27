import './Layout.css'
import { Link, Outlet } from 'react-router-dom'
import { HomeNav, NavItems } from '../../models/constants/NavBarConstants'
import pawsLogo from '../../assets/pawsLogo.png'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import { useContext } from 'react'
import { IsMobileContext } from '../../contexts/IsMobileContext'

export default function Layout() {
    const isMobile = useContext(IsMobileContext)

    return (
        <>
            <Link to={HomeNav.route} className={isMobile ? "logoMobile" : "logoDesktop"}><img src={pawsLogo} className="logo" alt="PAWS logo" /></Link>
            
            <NavBarComponent
                navBarItems = {NavItems}
            />
            
            <Outlet />
        </>
    )
}