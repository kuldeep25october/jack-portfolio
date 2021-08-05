import React from 'react'
import './style.scss';
import { Row, Col } from 'react-bootstrap';

const AboutMyself = () => {
    return (
        <>
            <div className='AboutMyselfBackground'>
                <Row>
                    <Col lg='8 ' position='relative'>
                        <div className='AboutMyselfContent'>
                            <p>ABOUT MYSELF</p>
                            <h2>I’m a Creative director based on New York, who loves clean, simple & unique design. I also enjoy crafting..</h2>
                            <input type='button' value='DOWNLOAD RESUME' />
                            <div className='Progress'>
                                <Row>
                                    <Col lg='6'>
                                        <div className='AuthorSkill'>
                                            <p>user research</p>
                                            <div className='progress-bar'>
                                                <div className='progress'></div>
                                            </div>
                                            <p>web design</p>
                                            <div className='progress-bar'>
                                                <div className='progress'></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg='6'>
                                        <div className='AuthorSkill'>
                                            <p>ui design</p>
                                            <div className='progress-bar'>
                                                <div className='progress'></div>
                                            </div>
                                            <p>illustration</p>
                                            <div className='progress-bar'>
                                                <div className='progress'></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <div className='para'>
                                        <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}
export default AboutMyself;