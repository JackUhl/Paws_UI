import ImageSliderComponent from '../../components/ImageSliderComponent/ImageSliderComponent'
import { HomePageImages } from '../../models/constants/HomePageImgSliderConstants'
import './Home.css'

export default function Home() {
    return (
        <>
            <p>This is the Home page</p>
            <ImageSliderComponent 
                filePaths={HomePageImages}
            />
        </>
    )
}