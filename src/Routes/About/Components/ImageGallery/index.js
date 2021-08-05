import React from 'react'
import './style.scss';
import { Images } from '../../../../Shared/Assets';
import ImagesIcon from '../../../../Components/Cells/ImagesIcon'
import  {FaSearchPlus} from 'react-icons/fa'
const ImgGallery = () => {
    return (
        <>
            <div className='ImgGalry'>
                {/* <ul>
                    <li>
                        <a><ImagesIcon src={Images.xgallery4}/></a>
                        <span><FaSearchPlus /></span>
                    </li>
                    <li>
                        <a><ImagesIcon src={Images.xgallery2}/></a>
                    </li>
                    <li>
                        <a><ImagesIcon src={Images.xgallery1}/></a>
                    </li>
                    <li>
                        <a><ImagesIcon src={Images.xgallery2}/></a>
                    </li>
                </ul> */}
                
                <div className='authorIntro'>
                    <p>I’m a designer, based in San Francisco. Currently a freelancer. You can see my hobbies on @Jack-Co and some photos on me too.</p>
                <div className='BorderBottom'></div>
                </div>
            </div>
        </>
    );
}
export default ImgGallery;