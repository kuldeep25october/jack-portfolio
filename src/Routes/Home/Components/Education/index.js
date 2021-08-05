import React from 'react'
import './style.scss';
import { Row, Col } from 'react-bootstrap'
import EducationInner from '../../../../Constant/Education';
import Education from './Components/EducationContent';

const EducationContent = () => {

    return (
        <>
            <div className='education'>
                <Row >
                    <Col>
                        <h1>Education</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        EducationInner.map((val, ind) => {
                            return (
                                <Education
                                    key={ind}
                                    skill={val.skill}
                                    duration={val.duration}
                                    para={val.para}
                                    para_1={val.para_1}
                                    para_2={val.para_2}
                                    icon={val.icon}
                                />
                            )
                        })
                    }
                </Row>
            </div>
        </>
    )
}
export default EducationContent;
