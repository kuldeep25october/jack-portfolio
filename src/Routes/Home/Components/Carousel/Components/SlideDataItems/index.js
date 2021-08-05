import React from "react";
import { ZoomInOutlined } from '@ant-design/icons'
import { Images } from '../../../../../../Shared/Assets';
import ImagesIcon from '../../../../../../Components/Cells/ImagesIcon'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const pictures = [
  {
    img: Images.xgallery1,
    icon: <ZoomInOutlined />
  },
  {
    img: Images.xgallery2,
    icon: <ZoomInOutlined />
  },
  {
    img: Images.xgallery4,
    icon: <ZoomInOutlined />
  },
];

export default () => {
  return (
    <Splide
      options={{
        rewind: true,
        perPage: 2,
        perMove: 1,
        type: 'loop'
      }}>
      {pictures.map(slide => (
        <SplideSlide key={slide.src}>
          <div className='image'>
            <ImagesIcon src={slide.img} />
            <div className='icon'>
              {slide.icon}
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
