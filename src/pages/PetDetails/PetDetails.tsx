import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { TestPets } from "../../models/constants/TestPets";
import { useContext, useEffect, useState } from "react";
import { animal } from "../../models/DTOs/PetfinderResponse";
import { NotFoundRoute } from "../../models/constants/InternalUrlConstants";
import { ImageSlide } from "../../models/objects/ImageSlide";
import ImageSliderComponent from "../../components/ImageSliderComponent/ImageSliderComponent";
import './PetDetails.css'
import { AdoptablePetsRoute } from "../../models/constants/InternalUrlConstants";
import { IsMobileContext } from "../../contexts/IsMobileContext";
import { IPetDetails } from "./IPetDetails";

export default function PetDetails(props: IPetDetails) {
    const isMobile = useContext<boolean>(IsMobileContext);

    let imageSliderSlides : ImageSlide[] = [];
    props.petInfo!.photos.map(image => {
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
                    <h2>{props.petInfo?.name}</h2>
                    <p>{props.petInfo?.description}</p>
                </div>
            </div>
        </div>
    )
}