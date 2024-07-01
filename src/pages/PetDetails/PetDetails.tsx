import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TestPets } from "../../models/constants/TestPets";
import { useEffect, useState } from "react";
import { animal } from "../../models/DTOs/PetInfo";
import { NotFoundRoute } from "../../models/constants/InternalUrlConstants";
import { IPetDetails } from "./IPetDetails";

export default function PetDetails(props: IPetDetails) {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [petInfo, setPetInfo] = useState<animal>()

    useEffect(() => {
        const PetDetailsState: IPetDetails = location.state

        //If location has pet state passed, load it, otherwise try and find it by loading it.
        if(PetDetailsState?.petInfo != null) {
            setPetInfo(PetDetailsState.petInfo);
        }
        else {
            const petId = Number.parseInt(params.id!);
            const foundPet = TestPets.animals.find(animal => animal.id == petId)
            if(foundPet == null) {
                navigate(NotFoundRoute);
            }
            else {
                setPetInfo(foundPet);
            }
        }
    }, []);

    return (
        <div className="petDetails">
            <div className='mainContainer'>
                <p>{JSON.stringify(petInfo)}</p>
            </div>
        </div>
    )
}