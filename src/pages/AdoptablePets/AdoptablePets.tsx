import { useContext, useEffect, useState } from 'react'
import './AdoptablePets.css'
import { animal, PetfinderResponse } from '../../models/DTOs/PetfinderResponse';
import PetCardComponent from '../../components/PetCardComponent/PetCardComponent';
import { v4 as uuidv4 } from 'uuid';
import { AdoptablePetsService } from '../../services/AdoptablePetsService/AdoptablePetsService';
import { useNavigate, useParams } from 'react-router-dom';
import { NotFoundRoute } from "../../models/constants/InternalUrlConstants";
import PetDetails from '../PetDetails/PetDetails';
import { CircleSpinner } from 'react-spinners-kit';
import { RequestLoadingStatus } from '../../models/constants/FormLoadingEnum';
import errorImage from '../../assets/notFound.jpg'
import { IsMobileContext } from '../../contexts/IsMobileContext';

export default function AdoptablePets() {
    const [adoptablePets, setAdoptablePets] = useState<PetfinderResponse>();
    const [selectedAdoptablePet, setSelectedAdoptablePet] = useState<animal>();
    const [isLoading, setIsLoading] = useState<RequestLoadingStatus>(RequestLoadingStatus.notRequested);
    const navigate = useNavigate();
    const params = useParams();

    const isMobile = useContext<boolean>(IsMobileContext);

    useEffect(() => {
        //On page load, fetch all adoptable pets and set the state
        if(adoptablePets == null) {
            setIsLoading(RequestLoadingStatus.loading);
            AdoptablePetsService.GetAdoptablePets()
            .then(response => {
                setAdoptablePets(response.data);
                setIsLoading(RequestLoadingStatus.success);
            })
            .catch(() => {
                setIsLoading(RequestLoadingStatus.failed);
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
                {selectedAdoptablePet == null && isLoading == RequestLoadingStatus.loading &&
                    <div className='flexRow justifyCenter alignCenter loadingContainer'>
                        <CircleSpinner color="#483174"/>
                    </div>
                }
                {selectedAdoptablePet == null && isLoading == RequestLoadingStatus.failed &&
                    <div className='contentBox flexRow flexWrap justifyBetween alignCenter'>
                    <img src={errorImage} className={(isMobile ? 'imageMobileWidth' : 'imageDesktopWidth') + ' image'} />
                    <div className={isMobile ? 'infoMobileWidth' : 'infoDesktopWidth'}>
                        <h2>Pardon Our Dust</h2>
                        <p>Something went wrong attempting to load our adoptable pet information. Please try again later.</p>
                    </div>
                </div>
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