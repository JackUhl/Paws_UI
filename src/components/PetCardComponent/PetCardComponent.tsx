import { useContext } from "react";
import { IPetCard } from "./IPetCardComponent";
import "./PetCardComponent.css"
import { IsMobileContext } from "../../contexts/IsMobileContext";
import { Link } from "react-router-dom";
import { AdoptablePetsRoute } from "../../models/constants/InternalUrlConstants";

export default function PetCardComponent(props: IPetCard) {
    const isMobile = useContext(IsMobileContext);

    const maxDescriptionLength = 75;

    return (
        <div className={(isMobile ? "petCardWidthMobile" : "petCardWidthDesktop") + " petCard"}>
            <img src={props.petInfo.photos[0].medium} className="petImage"/>
            <div className="petText">
                <Link 
                    to={AdoptablePetsRoute + `/${props.petInfo.id}`} 
                    state= {{
                        petInfo: props.petInfo
                    }}
                >
                    <h2 className="petName routeLink">{props.petInfo.name}</h2>
                </Link>
                <p>{props.petInfo.description.substring(0, maxDescriptionLength)} {props.petInfo.description.length > maxDescriptionLength && (<span className="readMore routeLink">Read More...</span>)}</p>
            </div>
        </div>
    )
}