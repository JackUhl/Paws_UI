import { useEffect, useState } from 'react'
import './AdoptablePets.css'
import { animal, PetfinderResponse } from '../../models/DTOs/PetfinderResponse';
import PetCardComponent from '../../components/PetCardComponent/PetCardComponent';
import { v4 as uuidv4 } from 'uuid';
import { AdoptablePetsService } from '../../services/AdoptablePetsService/AdoptablePetsService';
import { useNavigate, useParams } from 'react-router-dom';
import { NotFoundRoute } from "../../models/constants/InternalUrlConstants";
import PetDetails from '../PetDetails/PetDetails';
import NotFound from '../NotFound/NotFound';

export default function AdoptablePets() {
    const [adoptablePets, setAdoptablePets] = useState<PetfinderResponse>();
    const [selectedAdoptablePet, setSelectedAdoptablePet] = useState<animal>();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        //On page load, fetch all adoptable pets and set the state
        if(adoptablePets == null) {
            AdoptablePetsService.GetAdoptablePets()
            .then(response => {
                setAdoptablePets(response.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }, []);

    useEffect(() => {
        if(params.id != null && adoptablePets != null) {
            const id = Number.parseInt(params.id!);
            const foundAdoptablePet = adoptablePets.animals.find(animal => animal.id == id)
            if(foundAdoptablePet == null) {
                navigate("/" + NotFoundRoute);
            }
            else {
                setSelectedAdoptablePet(foundAdoptablePet);
            }
        }
        else {
            setSelectedAdoptablePet(undefined);
        }
    }, [params.id, adoptablePets])

    return (
        <div className='adoptablePets'>
            <div className='mainContainer'>
                {selectedAdoptablePet != null &&
                    <PetDetails 
                        adoptablePetInfo={selectedAdoptablePet}
                    />
                }
                {selectedAdoptablePet == null &&
                    <div className='flexRow flexWrap rowGap adoptablePetsColumnGap'>
                    {adoptablePets?.animals.map(adoptablePet => (
                        <PetCardComponent 
                            key={uuidv4()}
                            adoptablePetInfo={adoptablePet}
                        />
                    ))}
                    </div>
                }
            </div>
        </div>
    )
}