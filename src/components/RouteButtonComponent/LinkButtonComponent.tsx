import './LinkButtonComponent.css'
import { ILinkButtonComponent } from "./ILinkButtonComponent"
import { Link } from 'react-router-dom'


export default function LinkButtonComponent(props: ILinkButtonComponent) {
    return (
        <>
            <div className='buttonContainer'>
                <Link to={props.route} target={props.linksToInternalRoute ? "_self" : "_blank"}><p className='routeBtn'>{props.text}</p></Link>
            </div>
        </>
    )
}