import './RouteButtonComponent.css'
import { IRouteButtonComponent } from "./IRouteButtonComponent"
import { Link } from 'react-router-dom'


export default function RouteButtonComponent(props: IRouteButtonComponent) {

    return (
        <>
            <div className='buttonContainer'>
                <Link to={props.route}><a className='routeBtn'>{props.text}</a></Link>
            </div>
        </>
    )
}