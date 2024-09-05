import { Link} from "react-router-dom";
import { useContext, useEffect} from "react";
import { ImageSlide } from "../../models/objects/ImageSlide";
import ImageSliderComponent from "../../components/ImageSliderComponent/ImageSliderComponent";
import './PetDetails.css'
import { AdoptablePetsRoute } from "../../models/constants/InternalUrlConstants";
import { IsMobileContext } from "../../contexts/IsMobileContext";
import { IPetDetails } from "./IPetDetails";
import LinkButtonComponent from "../../components/LinkButtonComponent/LinkButtonComponent";
import petfinderIcon from "../../assets/petfinderIcon.png"
import checkMarkIcon from "../../assets/checkMarkIcon.svg"
import cancelIcon from "../../assets/cancelIcon.svg"
import questionMarkIcon from "../../assets/questionMarkIcon.svg"

export default function PetDetails(props: IPetDetails) {
    const isMobile = useContext<boolean>(IsMobileContext);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    let imageSliderSlides : ImageSlide[] = [];
    props.adoptablePetInfo.photos.map(image => {
        let fullSized = image.full;
        let slide : ImageSlide = {
            src: fullSized
        }
        imageSliderSlides.push(slide);
    });

    const fullBreed = `${props.adoptablePetInfo.age} ${props.adoptablePetInfo.breeds.primary + (props.adoptablePetInfo.breeds.mixed ? ` Mix` : "")}`;
    const genderStatus = `${props.adoptablePetInfo.gender} ${props.adoptablePetInfo.attributes.spayed_neutered ? " (Fixed)" : " (Not Fixed)"}`;

    const getPropertyImage = (property: boolean | null): React.ReactNode => {
        let icon;
        
        if(property == true) {
            icon = checkMarkIcon;
        }
        else if(property == false) {
            icon = cancelIcon;
        }
        else {
            icon = questionMarkIcon
        }

        return <img src={icon} className="icon" />
    }

    return (
        <div className="petDetails">
            <div className="bottomSpacing">
                <Link to={AdoptablePetsRoute}>&#8249; Back to Adoptable Pets</Link>
            </div>
            <div className="flexRow justifyBetween flexWrap">
                <div className={isMobile ? "petImagesMobileWidth" : "petImagesDesktopWidth"}>
                    <ImageSliderComponent
                        slides={imageSliderSlides}
                        roundedImages={true}
                    />
                </div>
                <div className={isMobile ? "petInfoMobileWidth" : "petInfoDesktopWidth"}>
                    <div className="bottomSpacing">
                        <h2>{props.adoptablePetInfo.name}</h2>
                        <p>{fullBreed} | {genderStatus}</p>
                    </div>

                    <div className="bottomSpacing">
                        <p>More about {props.adoptablePetInfo.name}</p>
                        <table>
                            <tr>
                                <td>Good with children</td>
                                <td>{getPropertyImage(props.adoptablePetInfo.environment.children)}</td>
                            </tr>
                            <tr>
                                <td>Good with dogs</td>
                                <td>{getPropertyImage(props.adoptablePetInfo.environment.dogs)}</td>
                            </tr>
                            <tr>
                                <td>Good with cats</td>
                                <td>{getPropertyImage(props.adoptablePetInfo.environment.cats)}</td>
                            </tr>
                            <tr>
                                <td>House trained</td>
                                <td>{getPropertyImage(props.adoptablePetInfo.attributes.house_trained)}</td>
                            </tr>
                            <tr>
                                <td>Special needs</td>
                                <td>{getPropertyImage(props.adoptablePetInfo.attributes.special_needs)}</td>
                            </tr>
                            <tr>
                                <td>Shots current</td>
                                <td>{getPropertyImage(props.adoptablePetInfo.attributes.special_needs)}</td>
                            </tr>
                        </table>
                    </div>

                    <p>{props.adoptablePetInfo.description}</p>
                    <LinkButtonComponent
                        linksToInternalRoute={false}
                        route={props.adoptablePetInfo.url}
                        text="Petfinder Page"
                        imgPath={petfinderIcon}
                    />
                </div>
            </div>
        </div>
    )
}