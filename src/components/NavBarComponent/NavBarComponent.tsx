import './NavBarComponent.css'
import { INavBarComponent } from './INavBarComponent'
import NavBarItemComponent from '../NavBarItemComponent/NavBarItemComponent'
import { v4 as uuidv4 } from 'uuid';

export default function NavBarComponent(props: INavBarComponent) {
  return (
    <>
      <div id='navBarBox'>
          {props.navBarItems.map(navBarItem => (
            <NavBarItemComponent
              key={uuidv4()}
              item={navBarItem}
            />
          ))}
      </div>
    </>
  )
}