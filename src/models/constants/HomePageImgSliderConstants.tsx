import LinkButtonComponent from "../../components/LinkButtonComponent/LinkButtonComponent";
import { ImageSlide } from "../objects/ImageSlide";
import { AdoptablePetsRoute, DonateRoute, FosterRoute, VolunteerRoute } from "./InternalUrlConstants";

export const HomePageSlides: ImageSlide[] = [
    {
        src:`/dog1.jpg`,
        textElements: [
            <h1>Meet Our Furry Friends</h1>,
            <h2>Discover the Hearts Behind Our Tails</h2>,
            <div className="routeButtonContainer">
                <LinkButtonComponent
                    linksToInternalRoute={true}
                    text="Adopt"
                    route={AdoptablePetsRoute}
                    imgPath=""
                />
            </div>
        ]
    },
    {
        src:`/dog2.jpg`,
        textElements: [
            <h1>Foster Heroes Wanted</h1>,
            <h2>Become a Foster Parent and Change Lives</h2>,
            <div className="routeButtonContainer">
                <LinkButtonComponent
                    linksToInternalRoute={true}
                    text="Foster"
                    route={FosterRoute}
                    imgPath=""
                />
            </div>
        ]
    },
    {
        src:`/dog3.jpg`,
        textElements: [
            <h1>Support Our Mission</h1>,
            <h2>Donate Today to Make a Pawsitive Impact</h2>,
            <div className="routeButtonContainer">
                <LinkButtonComponent
                    linksToInternalRoute={true}
                    text="Volunteer"
                    route={VolunteerRoute}
                    imgPath=""
                />
            </div>
        ]
    },
    {
        src:`/dog4.jpg`,
        textElements: [
            <h1>Community Outreach</h1>,
            <h2>Join Us in Making a Difference Beyond Our Doors</h2>,
            <div className="routeButtonContainer">
                <LinkButtonComponent
                    linksToInternalRoute={true}
                    text="Donate"
                    route={DonateRoute}
                    imgPath=""
                />
            </div>
        ]
    }
]