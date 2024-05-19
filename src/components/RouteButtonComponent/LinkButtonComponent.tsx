import './LinkButtonComponent.css'
import { ILinkButtonComponent } from "./ILinkButtonComponent"
import { Link } from 'react-router-dom'


export default function LinkButtonComponent(props: ILinkButtonComponent) {
    return (
        <>
            <Link to={props.route} target={props.linksToInternalRoute ? "_self" : "_blank"}>
                <div className='buttonContainer buttonRow'>
                    {props.imgPath != '' && <img src={props.imgPath} className='buttonImage'/>}
                    <p className='buttonText'>{props.text}</p>
                </div>
            </Link>
        </>
    )
}