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

    const genitalStatus = props.adoptablePetInfo.attributes.spayed_neutered ? "(Fixed)" : "(Not Fixed)";

    return (
        <div className="petDetails">
            <div className="backToAdoptablePetsButton">
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
                    <h2>{props.adoptablePetInfo.name}</h2>
                    <p>{props.adoptablePetInfo.breeds.primary} | {props.adoptablePetInfo.gender} {genitalStatus} | {props.adoptablePetInfo.age}</p>
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