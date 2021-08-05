import React from 'react'
import './style.scss';
import { Images } from '../../../../Shared/Assets';
import ImagesIcon from '../../../../Components/Cells/ImagesIcon'


const AboutAuthor = () => {
    return (
        <>
            <div className='AboutMeContainer'>
                <h2>About Me</h2>
                <ImagesIcon src={Images.xhero_right} />
            </div>
        </>
    );
}
export default AboutAuthor;