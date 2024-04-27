import './ImageSliderComponent.css'
import { useState } from 'react';
import { IImageSliderComponent } from './IImageSliderComponent'

export default function ImageSliderComponent(props: IImageSliderComponent) {

    const [imgNum, setImgNum] = useState(props.filePaths.length);
    const [curImgIndex, setCurImgIndex] = useState(0);
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

  return (
    <>
      <div 
      onMouseEnter={ () => {setHover(true);}}
      onMouseLeave={ () => {setHover(false);}}
      >
        <div className='imageSliderContainer' id='imageSlider'>
          {props.filePaths.map((filePath, index) => (
              <img
                key={index}
                className={`imageSliderImg ${curImgIndex === index ? 'active' : 'inactive'}`}
                id={`selectedImg${index}`}
                src={filePath}
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
        </div>
      </div>
    </>
  )
}