import { useEffect, useState } from 'react'
import './AdoptablePets.css'
import { PetInfo } from '../../models/DTOs/PetInfo';
import { TestPets } from '../../models/constants/TestPets';
import PetCardComponent from '../../components/PetCardComponent/PetCardComponent';
import { v4 as uuidv4 } from 'uuid';

export default function AdoptablePets() {
    const [pets, setPets] = useState<PetInfo>()

    useEffect(() => {
        setPets(TestPets);
    }, []);

    return (
        <div className='adoptablePets'>
            <div className='mainContainer'>
                <div className='flexRow flexWrap'>
                    {pets?.animals.map(pet => (
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