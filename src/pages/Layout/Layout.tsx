import './Layout.css'
import { Link, Outlet } from 'react-router-dom'
import { HomeNav, NavItems } from '../../models/constants/NavBarConstants'
import pawsLogo from '../../assets/pawsLogo.png'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'

export default function Layout() {
    return (
        <>
            <Link to={HomeNav.route}><img src={pawsLogo} className="logo" alt="PAWS logo" /></Link>
            
            <NavBarComponent
                navBarItems = {NavItems}
            />
            
            <Outlet />
        </>
    )
}