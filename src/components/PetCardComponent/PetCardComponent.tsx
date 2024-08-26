import { useContext } from "react";
import { IPetCard } from "./IPetCardComponent";
import "./PetCardComponent.css"
import { IsMobileContext } from "../../contexts/IsMobileContext";
import { useNavigate } from "react-router-dom";
import { AdoptablePetsIdRoute } from "../../models/constants/InternalUrlConstants";

export default function PetCardComponent(props: IPetCard) {
    const isMobile = useContext(IsMobileContext);
    const navigate = useNavigate();

    const maxDescriptionLength = 75;

    const handleOnClick = () => {
        navigate(AdoptablePetsIdRoute(props.adoptablePetInfo.id.toString()));
    }

    return (
        <div 
            className={(isMobile ? "petCardWidthMobile" : "petCardWidthDesktop") + " petCard"}
            onClick={handleOnClick}
        >
            <img src={props.adoptablePetInfo.photos[0].medium} className="petImage"/>
            <div className="petText">
                <h2 className="petName">{props.adoptablePetInfo.name}</h2>
                <p>{props.adoptablePetInfo.description.substring(0, maxDescriptionLength)}{props.adoptablePetInfo.description.length > maxDescriptionLength && (<span>...</span>)}</p>
                {props.adoptablePetInfo.description.length > maxDescriptionLength && (<span className="readMore routeLink">Read More</span>)}
            </div>
        </div>
    )
}