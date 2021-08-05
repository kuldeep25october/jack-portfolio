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
      {pictures.map(val => (
        <SplideSlide>
          <div className='image'>
            <ImagesIcon src={val.img} />
            <div className='icon'>
              {val.icon}
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
