import { useEffect, useState } from 'react'
import './AdoptablePets.css'
import { AnimalsInfo } from '../../models/DTOs/AnimalsInfo';
import PetCardComponent from '../../components/PetCardComponent/PetCardComponent';
import { v4 as uuidv4 } from 'uuid';
import { AnimalsService } from '../../services/AnimalsService';

export default function AdoptablePets() {
    const [animalInfo, setAnimalInfo] = useState<AnimalsInfo>()

    useEffect(() => {
        AnimalsService.GetAnimalsInfo()
            .then(response => {
                setAnimalInfo(response.data)
            })
            .catch (error => {
                console.log(error)
            })
    }, []);

    return (
        <div className='adoptablePets'>
            <div className='mainContainer'>
                <div className='flexRow flexWrap'>
                    {animalInfo?.animals.map(pet => (
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