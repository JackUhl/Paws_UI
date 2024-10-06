import { useContext } from "react";
import { IPetCard } from "./IPetCardComponent";
import "./PetCardComponent.css"
import { IsMobileContext } from "../../contexts/IsMobileContext";
import { useNavigate } from "react-router-dom";
import { AdoptablePetsIdRoute } from "../../models/constants/InternalUrlConstants";
import { AnimalSummaryHelper } from "../../utilities/helpers/AnimalSummaryHelper";

export default function PetCardComponent(props: IPetCard) {
    const isMobile = useContext(IsMobileContext);
    const navigate = useNavigate();

    const animalSummary = AnimalSummaryHelper.GetAnimalSummary(props.adoptablePetInfo);

    const handleOnClick = () => {
        navigate(AdoptablePetsIdRoute(props.adoptablePetInfo.id.toString()));
    }

    return (
        <div 
            className={(isMobile ? "petCardWidthMobile" : "petCardWidthDesktop") + " petCard"}
            onClick={handleOnClick}
        >
            <img src={props.adoptablePetInfo.primary_photo_cropped.full} className="petImage"/>
            <div className="petText">
                <h2 className="petName">{props.adoptablePetInfo.name}</h2>
                <p>{animalSummary.fullBreed}</p>
                <p>{animalSummary.genderStatus}</p>
                <span className="readMore routeLink">Read More</span>
            </div>
        </div>
    )
}