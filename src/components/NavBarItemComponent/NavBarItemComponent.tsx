import './NavBarItemComponent.css'
import { INavBarItemComponent } from "./INavBarItemComponent"
import { Link, useLocation } from 'react-router-dom'


export default function NavBarItemComponent(props: INavBarItemComponent) {

    const navItemSelected = (): boolean => {
        let sitePathName = useLocation().pathname;
        let itemPathName = props.item.route;

        return sitePathName == itemPathName;
    }

    const handleNavBarItemClicked = () => {
        window.scrollTo(0,0);
        props.setMobileMenuExpanded(false);
    }

    return (
        <>
            <div 
                className="navBarItemContainer"
            >
                <Link to={props.item.route} onClick={handleNavBarItemClicked} className={"navBarItemText " + (navItemSelected() ? "navBarItemTextSelected" : "navBarItemTextNormal")}>{props.item.title}</Link>
            </div>
        </>
    )
}