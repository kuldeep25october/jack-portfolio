import React from 'react'
import './style.scss';
import { Images } from '../../../../Shared/Assets';
import ImagesIcon from '../../../../Components/Cells/ImagesIcon'

const AboutAuthor = () => {
    return (
        <>
            <div className='Aboutauthor'>
                <ImagesIcon src={Images.xhero_right} />
                <h2>Visual Design<br />& Art Director</h2>
                <p>Hi, I am Jack, focusing<br /> on creating emotional<br /> experiences.</p>
                <input type='button' value='HIRE ME' />
            </div>
        </>
    );
}
export default AboutAuthor;