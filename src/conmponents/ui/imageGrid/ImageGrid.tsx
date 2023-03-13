import React from 'react';
import { PostType } from '../../../types';
import './imageGrid.css'

type ImageGridStructureType = Array<JSX.Element[]>

const ImageGridUi = (props: {list: JSX.Element[]}) => {
  const imageGrid: ImageGridStructureType = [
    [], [], []
  ] 

  for( let i = 0, j = 0; i <= props.list.length; i++ ){
    if( !imageGrid[j] ) j = 0

    if( props.list[i] ) {
      imageGrid[j].push(props.list[i]);
      j++
    }
  }

  return (
    <div className='image-grid'>
      { imageGrid.map(item => <div className='image-grid__column'>{item}</div>) }
    </div>
  );
};

export default ImageGridUi;