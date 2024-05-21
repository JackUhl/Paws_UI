import './NavBarComponent.css'
import { INavBarComponent } from './INavBarComponent'
import NavBarItemComponent from '../NavBarItemComponent/NavBarItemComponent'
import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect, useState } from 'react';
import { IsMobileContext } from '../../contexts/IsMobileContext';
import burgerIcon from '../../assets/hamburgerMenuIcon.png'

export default function NavBarComponent(props: INavBarComponent) {
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState<boolean>(false);
  const isMobile = useContext<boolean>(IsMobileContext);

  useEffect(() => {
    setMobileMenuExpanded(false);
  }, [isMobile])

  const handleHamburgerClick = () => {
    setMobileMenuExpanded(!mobileMenuExpanded);
  }

  const handleNavBarItemClicked = () => {
    setMobileMenuExpanded(false)
  }

  const nonMobileView = (
    <div className='navBar'>
      <div className='navBarBox flexRow alignCenter'>
      {props.navBarItems.map(navBarItem => (
        <div key={uuidv4()}>
          <NavBarItemComponent
            item={navBarItem}
          />
        </div>
      ))}
      </div>
    </div>
  )

  const mobileView = (
    <div className='navBar'>
      <div className='navBarBox relativePosition flexRow alignCenter'>
        <img src={burgerIcon} className='burgerIcon' alt='burger icon' onClick={handleHamburgerClick}></img>
        {mobileMenuExpanded && <div className='dropDownMenu flexColumn'>
          {props.navBarItems.map(navBarItem => (
            <div 
              onClick={handleNavBarItemClicked} 
              key={uuidv4()}
            >
              <NavBarItemComponent
                item={navBarItem}
              />
            </div>
          ))}
        </div>}
      </div>
    </div>
  )

  return (
    <>
      {!isMobile && nonMobileView}

      {isMobile && mobileView}
    </>
  )
}