import './ImageSliderComponent.css'
import { useEffect, useState } from 'react';
import { IImageSliderComponent } from './IImageSliderComponent'
import '../RouteButtonComponent/RouteButtonComponent'
import RouteButtonComponent from '../RouteButtonComponent/RouteButtonComponent';


export default function ImageSliderComponent(props: IImageSliderComponent) {

    const [imgNum, setImgNum] = useState(props.slides.length);
    const [curImgIndex, setCurImgIndex] = useState(0);
    const [prevImgIndex, setPrevImgIndex] = useState(0);
    const [hover, setHover] = useState(false);
    const [timeoutId, setTimeoutId] = useState(0);

    useEffect(() => {
      if(timeoutId != 0) {
        clearTimeout(timeoutId);
      }
      let id = setTimeout(() => {
        changeImageIndex(curImgIndex, curImgIndex+1);
      }, 15000);
      setTimeoutId(id);
    }, [curImgIndex]);

    const changeImageIndex = (currentIndex: number, newIndex : number) => {
        if (newIndex == imgNum){
            setCurImgIndex(0);
        }
        else if (newIndex < 0){
            setCurImgIndex(imgNum - 1);
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
    <>
      <div 
      onMouseEnter={ () => {setHover(true);}}
      onMouseLeave={ () => {setHover(false);}}
      >
        <div className='imageSliderContainer' id='imageSlider'>
          {props.slides.map((filePath, index) => (
              <img
                key={index}
                className={`imageSliderImg ${setImgClass(index)}`}
                id={`selectedImg${index}`}
                src={filePath.src}
              />
            ))}
          <span className={`arrowSpanLeft ${hover ? 'fade-in' : 'fade-out'}`}> 
              <i className='arrow left'
              onClick={() => {changeImageIndex(curImgIndex, curImgIndex-1)}}
              /> 
          </span>
          <span className={`arrowSpanRight ${hover ? 'fade-in' : 'fade-out'}`}>
              <i className='arrow right'
              onClick={() => {changeImageIndex(curImgIndex, curImgIndex+1)}}
              /> 
          </span>
          <div className='slideTextContainer'>
            <h1>{props.slides[curImgIndex].headerText}</h1>
            <h2>{props.slides[curImgIndex].subHeaderText}</h2>
            <div className='routeBtnContainer'>
              <RouteButtonComponent
                route={props.slides[curImgIndex].buttonRoute}
                text={props.slides[curImgIndex].buttonText}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}