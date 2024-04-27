import ImageSliderComponent from '../../components/ImageSliderComponent/ImageSliderComponent'
import { HomePageImages } from '../../models/constants/HomePageImgSliderConstants'
import './Home.css'

export default function Home() {
    return (
        <>
            <ImageSliderComponent 
                filePaths={HomePageImages}
            />
        </>
    )
}