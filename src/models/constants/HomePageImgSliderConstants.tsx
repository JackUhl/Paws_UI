import { ImageSlide } from "../objects/ImageSlide";
import { AdoptablePetsNav, DonateNav, FosterNav, VolunteerNav } from "./NavBarConstants";

export const HomePageSlides: ImageSlide[] = [
    {
        src:`src\\assets\\HomePageImageSlider\\Cat1.jpg`,
        headerText:'This cat looks so polite lol',
        subHeaderText:'Look at the silly smile :)',
        buttonText:'Adopt',
        buttonRoute:AdoptablePetsNav.route
    },
    {
        src:`src\\assets\\HomePageImageSlider\\Cat2.jpg`,
        headerText:'This one has a little suit! Wow!',
        subHeaderText:'Doin some serious business',
        buttonText:'Foster',
        buttonRoute:FosterNav.route
    },
    {
        src:`src\\assets\\HomePageImageSlider\\Cat3.jpg`,
        headerText:'CRONCH.... MoNcH cRuNcH.... nom',
        subHeaderText:'me eating chips',
        buttonText:'Volunteer',
        buttonRoute:VolunteerNav.route
    },
    {
        src:`src\\assets\\HomePageImageSlider\\Cat4.jpg`,
        headerText:'Uh oh they arguin... he in trouble',
        subHeaderText:'oope',
        buttonText:'Donate',
        buttonRoute:DonateNav.route
    }
]