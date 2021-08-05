import React from 'react'
import { Col } from 'react-bootstrap'

const Education = (props) => {
    return (
        <>
            <Col lg='10'>
                <ul className='EducationSubHeading'>
                    <li><h2>{props.skill}</h2></li>
                    <li><p>{props.duration}</p></li>
                    <li>
                        <ul className='float-right'>
                            <li><p><span>{props.para_1}</span><span>{props.para_2}{props.icon}</span></p></li>
                        </ul>
                    </li>
                    <li><p>{props.para}</p></li>
                </ul>
            </Col>
        </>
    )
}
export default Education;