import { useEffect, useState } from 'react'
import './AdoptablePets.css'
import { animal, PetfinderResponse } from '../../models/DTOs/PetfinderResponse';
import PetCardComponent from '../../components/PetCardComponent/PetCardComponent';
import { v4 as uuidv4 } from 'uuid';
import { AdoptablePetsService } from '../../services/AdoptablePetsService/AdoptablePetsService';
import { useNavigate, useParams } from 'react-router-dom';
import { NotFoundRoute } from "../../models/constants/InternalUrlConstants";
import PetDetails from '../PetDetails/PetDetails';

export default function AdoptablePets() {
    const [adoptablePets, setAdoptablePets] = useState<PetfinderResponse>();
    const [selectedPet, setSelectedPet] = useState<animal>();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        //On page load, fetch all adoptable pets and set the state
        if(adoptablePets == null) {
            AdoptablePetsService.GetAdoptablePets()
            .then(response => {
                setAdoptablePets(response.data);
            })
            .catch (error => {
                console.log(error);
            })
        }
    }, []);

    useEffect(() => {
        if(params.id != null && adoptablePets != null) {
            const petId = Number.parseInt(params.id!);
            const foundPet = adoptablePets.animals.find(animal => animal.id == petId)
            if(foundPet == null) {
                navigate(NotFoundRoute);
            }
            else {
                setSelectedPet(foundPet);
            }
        }
        else {
            setSelectedPet(undefined);
        }
    }, [params.id, adoptablePets])

    return (
        <div className='adoptablePets'>
            <div className='mainContainer'>
                {selectedPet != null &&
                    <PetDetails 
                        petInfo={selectedPet}
                    />
                }
                {selectedPet == null &&
                    <div className='flexRow flexWrap rowGap adoptablePetsColumnGap'>
                    {adoptablePets?.animals.map(pet => (
                        <PetCardComponent 
                            petInfo={pet}
                            key={uuidv4()}
                        />
                    ))}
                    </div>
                }
            </div>
        </div>
    )
}