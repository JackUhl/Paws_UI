import './ImageSliderComponent.css'
import { useContext, useEffect, useState } from 'react';
import { IImageSliderComponent } from './IImageSliderComponent'
import '../LinkButtonComponent/LinkButtonComponent'
import { IsMobileContext } from '../../contexts/IsMobileContext';
import { v4 as uuidv4 } from 'uuid';
import { ImageSlide } from '../../models/objects/ImageSlide';


export default function ImageSliderComponent(props: IImageSliderComponent) {

    const [curImgIndex, setCurImgIndex] = useState(0);
    const [prevImgIndex, setPrevImgIndex] = useState(0);
    const [numberOfImages] = useState(props.slides.length);
    const [hover, setHover] = useState(false);
    const [timeoutId, setTimeoutId] = useState(0);
    
    const isMobile = useContext<boolean>(IsMobileContext);

    useEffect(() => {
      if(numberOfImages > 1) {
        if(timeoutId != 0) {
          clearTimeout(timeoutId);
        }
        let id = setTimeout(() => {
          changeImageIndex(curImgIndex+1);
        }, 15000);
        setTimeoutId(id);
      }
    }, [curImgIndex]);

    const changeImageIndex = (newIndex: number) => {
      let currentIndex = curImgIndex;
      
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

    const getImgClass = (slide: ImageSlide, index: number) => {
      let cssClasses = []

      if (index == prevImgIndex && index == curImgIndex) {
        cssClasses.push('first');
      }
      else if (index == prevImgIndex) {
        cssClasses.push('inactive');
      }
      else if (index == curImgIndex) {
        cssClasses.push('active');
      }

      if(slide.textElements != null) {
        cssClasses.push('imageTextFilter');
      }

      let cssClassesString = cssClasses.reduce(
        (cssClassesString, cssClass) => `${cssClass} ` + cssClassesString,
        ""
      );

      return cssClassesString;
    }

  return (
    <div 
      onMouseEnter={ () => {setHover(true);}}
      onMouseLeave={ () => {setHover(false);}}
      className='imageSlider'
    >
      <div className='relativeContainer'>
        {props.slides.map((slide, index) => (
          <img
            key={index}
            className={`${getImgClass(slide, index)}`}
            src={slide.src}
          />
        ))}
        <div className='absoluteContainer flexRow'>
          <div className='arrowFlex centerJustifySelf alignCenter'>
            {numberOfImages > 1 && <div className={`arrow left ${isMobile ? 'showArrow' : hover ? 'arrowFadeInLeft' : 'arrowFadeOutLeft'}`}
              onClick={() => {changeImageIndex(curImgIndex-1)}}
            />}
          </div>
          <div className='imageTextFlex flexColumn justifyCenter'>
              {props.slides[curImgIndex]?.textElements?.map((textElement) => (
                <div
                  key={uuidv4()}
                >
                  {textElement}
                </div>
              ))}
          </div>
          <div className='arrowFlex centerJustifySelf alignCenter'>
            {numberOfImages > 1 && <div className={`arrow right ${isMobile ? 'showArrow' : hover ? 'arrowFadeInRight' : 'arrowFadeOutRight'}`}
              onClick={() => {changeImageIndex(curImgIndex+1)}}
            />}
          </div>
        </div>
      </div>
    </div>
  )
}