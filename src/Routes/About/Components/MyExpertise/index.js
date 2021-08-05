import React from 'react'
import './style.scss';
import { Row, Col } from 'react-bootstrap';

const MyExpertise = () => {
    return (
        <>
            <div className='myExpertise'>
               <h2>My Expertise</h2>
                <Row>
                    <Col lg='6'>
                        <div className='myExpertiseList'>
                            <ul className='myExpertiseListItms'>
                                <li>User Experience Design</li>
                                <li>User Interface Design</li>
                                <li>Web Design</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.<br /><br />Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default MyExpertise;