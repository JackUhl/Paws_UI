import './ImageSliderComponent.css'
import { useState } from 'react';
import { IImageSliderComponent } from './IImageSliderComponent'

export default function ImageSliderComponent(props: IImageSliderComponent) {

    const [imgNum, setImgNum] = useState(props.filePaths.length);
    const [curImgIndex, setCurImgIndex] = useState(0);

  return (
    <>
      <div>
        <div className='imageSliderContainer' id='imageSlider'>
            <img className='imageSliderImg' id= {'selectedImg' + curImgIndex } src={props.filePaths[curImgIndex]}/>
        </div>
      </div>
    </>
  )
}