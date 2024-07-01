import { NavBarItem } from "../objects/NavBarItem";
import { HomeRoute, AdoptablePetsRoute, FosterRoute, VolunteerRoute, DonateRoute } from "./InternalUrlConstants";

export const HomeNav: NavBarItem = {
    title: "Home",
    route: HomeRoute
}

export const AdoptablePetsNav: NavBarItem = {
    title: "Adoptable Pets",
    route: AdoptablePetsRoute
}

export const FosterNav: NavBarItem = {
    title: "Foster",
    route: FosterRoute
}

export const VolunteerNav: NavBarItem = {
    title: "Volunteer",
    route: VolunteerRoute
}

export const DonateNav: NavBarItem = {
    title: "Donate",
    route: DonateRoute
}

export const NavItems: NavBarItem[] = [
    HomeNav,
    AdoptablePetsNav,
    FosterNav,
    VolunteerNav,
    DonateNav
]