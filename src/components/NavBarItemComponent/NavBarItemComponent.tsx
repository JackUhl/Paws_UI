import './NavBarItemComponent.css'
import { INavBarItemComponent } from "./INavBarItemComponent"
import { Link, useLocation } from 'react-router-dom'


export default function NavBarItemComponent(props: INavBarItemComponent) {

    const navItemSelected = (): boolean => {
        let sitePathName = useLocation().pathname;
        let itemPathName = props.item.route;

        return sitePathName == itemPathName;
    }

    return (
        <>
            <div className="navBarItemContainer">
                <Link to={props.item.route} className={"navBarItemText " + (navItemSelected() ? "navBarItemTextSelected" : "navBarItemTextNormal")}>{props.item.title}</Link>
            </div>
        </>
    )
}