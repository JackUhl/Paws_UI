import ImageSliderComponent from '../../components/ImageSliderComponent/ImageSliderComponent'
import { HomePageSlides } from '../../models/constants/HomePageImgSliderConstants'
import './Home.css'

export default function Home() {
    return (
        <>
            <ImageSliderComponent 
                slides={HomePageSlides}
            />
        </>
    )
}