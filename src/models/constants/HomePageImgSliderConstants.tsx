import { ImageSlide } from "../objects/ImageSlide";
import { AdoptablePetsNav, DonateNav, FosterNav, VolunteerNav } from "./NavBarConstants";

export const HomePageSlides: ImageSlide[] = [
    {
        src:`src\\assets\\HomePageImageSlider\\dog1.jpg`,
        headerText:'Meet Our Furry Friends',
        subHeaderText:'Discover the Hearts Behind Our Tails',
        buttonText:'Adopt',
        buttonRoute:AdoptablePetsNav.route
    },
    {
        src:`src\\assets\\HomePageImageSlider\\dog2.jpg`,
        headerText:'Foster Heroes Wanted',
        subHeaderText:'Become a Foster Parent and Change Lives',
        buttonText:'Foster',
        buttonRoute:FosterNav.route
    },
    {
        src:`src\\assets\\HomePageImageSlider\\dog3.jpg`,
        headerText:'Support Our Mission',
        subHeaderText:'Donate Today to Make a Pawsitive Impact',
        buttonText:'Volunteer',
        buttonRoute:VolunteerNav.route
    },
    {
        src:`src\\assets\\HomePageImageSlider\\dog4.jpg`,
        headerText:'Community Outreach',
        subHeaderText:'Join Us in Making a Difference Beyond Our Doors',
        buttonText:'Donate',
        buttonRoute:DonateNav.route
    }
]