import { NavBarItem } from "../../models/objects/NavBarItem";

export interface INavBarItemComponent {
    item: NavBarItem;
    setMobileMenuExpanded: React.Dispatch<React.SetStateAction<boolean>>
}