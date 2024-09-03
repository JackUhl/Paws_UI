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

  return (
    <div className='navBar'>
      <div className='navBarBox flexRow alignCenter'>
        {isMobile && <img src={burgerIcon} className='burgerIcon' alt='burger icon' onClick={handleHamburgerClick}></img>}
        <div className={isMobile ? 'dropDownMenu flexColumn' : 'navBarBox flexRow alignCenter'}>
          {(isMobile && mobileMenuExpanded || !isMobile) && props.navBarItems.map(navBarItem => (
            <div
              key={uuidv4()}
            >
              <NavBarItemComponent
                item={navBarItem}
                setMobileMenuExpanded={setMobileMenuExpanded}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}