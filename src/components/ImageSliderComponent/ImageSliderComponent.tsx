import './ImageSliderComponent.css'
import { useState } from 'react';
import { IImageSliderComponent } from './IImageSliderComponent'
import '../RouteButtonComponent/RouteButtonComponent'
import RouteButtonComponent from '../RouteButtonComponent/RouteButtonComponent';


export default function ImageSliderComponent(props: IImageSliderComponent) {

    const [imgNum, setImgNum] = useState(props.slides.length);
    const [curImgIndex, setCurImgIndex] = useState(0);
    const [prevImgIndex, setPrevImg] = useState(0)
    const [hover, setHover] = useState(false);

    const changeCurImg = (newIndex : number) => {
        if (newIndex == imgNum){
            setCurImgIndex(0);
        }
        else if (newIndex < 0){
            setCurImgIndex(imgNum - 1);
        }
        else {
            setCurImgIndex(newIndex);
        }
    }

    const setImgActiveState = (index:number) => {
      if(index === prevImgIndex){
        return curImgIndex === index ? 'first' : 'inactive'
      }
      else{
        return curImgIndex === index ? 'active' : ''
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
                className={`imageSliderImg ${setImgActiveState(index)}`}
                id={`selectedImg${index}`}
                src={filePath.src}
              />
            ))}
          <span className={`arrowSpanLeft ${hover ? 'fade-in' : 'fade-out'}`}> 
              <i className='arrow left'
              onClick={() => {changeCurImg(curImgIndex-1)}}
              /> 
          </span>
          <span className={`arrowSpanRight ${hover ? 'fade-in' : 'fade-out'}`}>
              <i className='arrow right'
              onClick={() => {changeCurImg(curImgIndex+1)}}
              /> 
          </span>
          <div className='slideTextConainer'>
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