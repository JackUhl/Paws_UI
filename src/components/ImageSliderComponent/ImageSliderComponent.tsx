import './ImageSliderComponent.css'
import { useContext, useEffect, useState } from 'react';
import { IImageSliderComponent } from './IImageSliderComponent'
import '../LinkButtonComponent/LinkButtonComponent'
import LinkButtonComponent from '../LinkButtonComponent/LinkButtonComponent';
import { IsMobileContext } from '../../contexts/IsMobileContext';


export default function ImageSliderComponent(props: IImageSliderComponent) {

    const [curImgIndex, setCurImgIndex] = useState(0);
    const [prevImgIndex, setPrevImgIndex] = useState(0);
    const [hover, setHover] = useState(false);
    const [timeoutId, setTimeoutId] = useState(0);
    const isMobile = useContext<boolean>(IsMobileContext);

    useEffect(() => {
      if(timeoutId != 0) {
        clearTimeout(timeoutId);
      }

      let id = setTimeout(() => {
        changeImageIndex(curImgIndex+1);
      }, 15000);

      setTimeoutId(id);
    }, [curImgIndex]);

    const changeImageIndex = (newIndex : number) => {
      let currentIndex = curImgIndex;
      let numberOfImages = props.slides.length;
      
      if (newIndex == numberOfImages){
            setCurImgIndex(0);
        }
        else if (newIndex < 0){
            setCurImgIndex(numberOfImages - 1);
        }
        else {
            setCurImgIndex(newIndex);
        }

        setPrevImgIndex(currentIndex);
    }

    const setImgClass = (index : number) => {
      if (index == prevImgIndex && index == curImgIndex) {
        return 'first';
      }
      else if (index == prevImgIndex) {
        return 'inactive';
      }
      else if (index == curImgIndex) {
        return 'active';
      }
      else {
        return ''
      }
    }

  return (
    <div 
      onMouseEnter={ () => {setHover(true);}}
      onMouseLeave={ () => {setHover(false);}}
      className='imageSlider'
    >
      <div className='relativeContainer'>
        {props.slides.map((filePath, index) => (
          <img
            key={index}
            className={`${setImgClass(index)}`}
            src={filePath.src}
          />
        ))}
        <div className='absoluteContainer flexRow'>
          <div className='arrowFlex justifySelf alignCenter'>
            <div className={`arrow left ${isMobile ? 'showArrow' : hover ? 'arrowFadeInLeft' : 'arrowFadeOutLeft'}`}
              onClick={() => {changeImageIndex(curImgIndex-1)}}
            />
          </div>
          <div className='imageTextFlex flexColumn justifyCenter'>
            <h1>{props.slides[curImgIndex].headerText}</h1>
            <h2>{props.slides[curImgIndex].subHeaderText}</h2>
            <div className='routeButtonContainer'>
              <LinkButtonComponent
                linksToInternalRoute={true}
                route={props.slides[curImgIndex].buttonRoute}
                text={props.slides[curImgIndex].buttonText}
                imgPath=''
              />
            </div>
          </div>
          <div className='arrowFlex justifySelf alignCenter'>
            <div className={`arrow right ${isMobile ? 'showArrow' : hover ? 'arrowFadeInRight' : 'arrowFadeOutRight'}`}
              onClick={() => {changeImageIndex(curImgIndex+1)}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}