import { Link} from "react-router-dom";
import { useContext, useEffect} from "react";
import { ImageSlide } from "../../models/objects/ImageSlide";
import ImageSliderComponent from "../../components/ImageSliderComponent/ImageSliderComponent";
import './PetDetails.css'
import { AdoptablePetsRoute } from "../../models/constants/InternalUrlConstants";
import { IsMobileContext } from "../../contexts/IsMobileContext";
import { IPetDetails } from "./IPetDetails";

export default function PetDetails(props: IPetDetails) {
    const isMobile = useContext<boolean>(IsMobileContext);

    useEffect(() => {
        window.scrollTo(0,0);
    })

    let imageSliderSlides : ImageSlide[] = [];
    props.adoptablePetInfo.photos.map(image => {
        let fullSized = image.full;
        let slide : ImageSlide = {
            src: fullSized
        }
        imageSliderSlides.push(slide);
    });

    return (
        <div className="petDetails">
            <Link to={AdoptablePetsRoute}>&#8249; Back to Adoptable Pets</Link>
            <div className="flexRow justifyBetween flexWrap">
                <div className={isMobile ? "petImagesMobileWidth" : "petImagesDesktopWidth"}>
                    <ImageSliderComponent
                        slides={imageSliderSlides}
                    />
                </div>
                <div className={isMobile ? "petInfoMobileWidth" : "petInfoDesktopWidth"}>
                    <h2>{props.adoptablePetInfo?.name}</h2>
                    <p>{props.adoptablePetInfo?.description}</p>
                </div>
            </div>
        </div>
    )
}