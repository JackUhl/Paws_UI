import { useEffect, useState } from 'react'
import './AdoptablePets.css'
import { PetfinderResponse } from '../../models/DTOs/PetfinderResponse';
import PetCardComponent from '../../components/PetCardComponent/PetCardComponent';
import { v4 as uuidv4 } from 'uuid';
import { AdoptablePetsService } from '../../services/AdoptablePetsService';

export default function AdoptablePets() {
    const [adoptablePets, setAdoptablePets] = useState<PetfinderResponse>()

    useEffect(() => {
        AdoptablePetsService.GetAdoptablePets()
            .then(response => {
                setAdoptablePets(response.data)
            })
            .catch (error => {
                console.log(error)
            })
    }, []);

    return (
        <div className='adoptablePets'>
            <div className='mainContainer'>
                <div className='flexRow flexWrap'>
                    {adoptablePets?.animals.map(pet => (
                        <PetCardComponent 
                            petInfo={pet}
                            key={uuidv4()}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}