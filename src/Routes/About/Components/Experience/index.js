import React from 'react'
import './style.scss';
import { Row, Col } from 'react-bootstrap'
import ExperienceInner from '../../../../Constant/Experience';
import Experience from './Components/ExperienceContent';
import { Images } from '../../../../Shared/Assets';
import ImagesIcon from '../../../../Components/Cells/ImagesIcon'

const ExperienceContent = () => {
    return (
        <>
            <div className='experience'>
                <Row >
                    <Col>
                        <h1>Experience</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        ExperienceInner.map((val, ind) => {
                            return (
                                <Experience
                                    key={ind}
                                    skill={val.skill}
                                    duration={val.duration}
                                    para={val.para}
                                />
                            )
                        })
                    }
                </Row>
            </div>
            <div className='vision-section'>
                <Row>
                {/* <div className='vision-section-img'> */}
                    <Col lg='7'>
                   <ImagesIcon src={Images.visit_jpg}/>
                    {/* </div> */}
                    </Col>
                    {/* </div> */}
                    <Col lg='5' position='relative'>
                        <h3>"I help creative entrepreneurs build better businesses, maximize productivity, and cultivate an engaged community.</h3>
                    </Col>
                </Row>

            </div>
        </>
    )
}
export default ExperienceContent;

