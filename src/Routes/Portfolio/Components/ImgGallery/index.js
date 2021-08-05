import React from 'react'
import './style.scss';
import { Images } from '../../../../Shared/Assets'
import ImagesIcon from '../../../../Components/Cells/ImagesIcon'
import { Row, Col } from 'react-bootstrap';

const ImageGallery = () => {
    return (
        <>
            <div className='ImgGalryContainer'>
                <h2>Crafted I have created</h2>
                <Row>
                    <Col lg='6'>
                        <ImagesIcon src={Images.xgallery1} />
                    </Col>
                    <Col lg='6'>
                        <ImagesIcon src={Images.xgallery2} />
                    </Col>
                </Row>
                <Row>
                    <Col lg='6'>
                        <ImagesIcon src={Images.xgallery1} />
                    </Col>
                    <Col lg='6'>
                        <ImagesIcon src={Images.xgallery2} />
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default ImageGallery;