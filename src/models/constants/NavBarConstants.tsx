import { NavBarItem } from "../objects/NavBarItem";

export const HomeNav: NavBarItem = {
    title: "Home",
    route: "/"
}

export const AdoptablePetsNav: NavBarItem = {
    title: "Adoptable Pets",
    route: "/AdoptablePets"
}

export const FosterNav: NavBarItem = {
    title: "Foster",
    route: "/Foster"
}

export const VolunteerNav: NavBarItem = {
    title: "Volunteer",
    route: "/Volunteer"
}

export const DonateNav: NavBarItem = {
    title: "Donate",
    route: "/Donate"
}

export const NavItems: NavBarItem[] = [
    HomeNav,
    AdoptablePetsNav,
    FosterNav,
    VolunteerNav,
    DonateNav
]