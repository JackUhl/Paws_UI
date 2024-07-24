import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { TestPets } from "../../models/constants/TestPets";
import { useContext, useEffect, useState } from "react";
import { animal } from "../../models/DTOs/PetInfo";
import { NotFoundRoute } from "../../models/constants/InternalUrlConstants";
import { ImageSlide } from "../../models/objects/ImageSlide";
import ImageSliderComponent from "../../components/ImageSliderComponent/ImageSliderComponent";
import './PetDetails.css'
import { AdoptablePetsRoute } from "../../models/constants/InternalUrlConstants";
import { IsMobileContext } from "../../contexts/IsMobileContext";

export default function PetDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [petInfo, setPetInfo] = useState<animal>(location.state?.petInfo);
    const [imageSliderSlides, setImageSliderSlides] = useState<ImageSlide[]>([]);

    const isMobile = useContext<boolean>(IsMobileContext);

    useEffect(() => {
        //If petInfo hasn't been set by location, load it based on id param
        if(petInfo == null) {
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

    useEffect(() => {
        if(petInfo == null) {
            return;
        }

        let imageSliderSlides : ImageSlide[] = [];
        petInfo.photos.map(image => {
            let fullSized = image.full;
            let slide : ImageSlide = {
                src: fullSized
            }
            imageSliderSlides.push(slide);
        });
        setImageSliderSlides(imageSliderSlides);
    }, [petInfo])

    return (
        <div className="petDetails">
            <div className='mainContainer'>
                <Link to={AdoptablePetsRoute}>&#8249; Back to Adoptable Pets</Link>
                <div className="flexRow justifyBetween flexWrap">
                    <div className={isMobile ? "petImagesMobileWidth" : "petImagesDesktopWidth"}>
                        <ImageSliderComponent
                            slides={imageSliderSlides}
                        />
                    </div>
                    <div className={isMobile ? "petInfoMobileWidth" : "petInfoDesktopWidth"}>
                        <h2>{petInfo?.name}</h2>
                        <p>{petInfo?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}