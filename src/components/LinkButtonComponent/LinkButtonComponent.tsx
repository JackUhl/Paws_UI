import './LinkButtonComponent.css'
import { ILinkButtonComponent } from "./ILinkButtonComponent"
import { Link } from 'react-router-dom'


export default function LinkButtonComponent(props: ILinkButtonComponent) {
    return (
        <div className='linkButton'>
            <Link to={props.route} target={props.linksToInternalRoute ? "_self" : "_blank"}>
                <div className='buttonContainer flexRow justifyCenter alignCenter'>
                    {props.imgPath != '' && <img src={props.imgPath} className='buttonImage'/>}
                    <p className='buttonText'>{props.text}</p>
                </div>
            </Link>
        </div>
    )
}