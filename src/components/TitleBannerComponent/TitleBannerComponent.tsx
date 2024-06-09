import './TitleBannerComponent.css'
import { ITitleBannerComponent } from "./ITitleBannerComponent";

export default function TitleBanner(props: ITitleBannerComponent) {
    return (
        <div className='banner'>
            <div className="titleContainer">
                <h2>{props.title}</h2>
            </div>
            <div className='bannerTransition' />
        </div>
    )
}