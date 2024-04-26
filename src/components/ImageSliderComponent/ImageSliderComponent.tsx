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
            <span className={`arrowSpanLeft ${hover ? '' : 'fade-out'}`}> 
                <i className='arrow left'
                onClick={() => {changeCurImg(curImgIndex-1)}}
                /> 
            </span>
            <span className={`arrowSpanRight ${hover ? '' : 'fade-out'}`}>
                <i className='arrow right'
                onClick={() => {changeCurImg(curImgIndex+1)}}
                /> 
            </span>
            <img className='imageSliderImg' id= {'selectedImg' + curImgIndex } src={props.filePaths[curImgIndex]}/>
        </div>
      </div>
    </>
  )
}