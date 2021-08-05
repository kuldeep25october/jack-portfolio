import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Education = (props) => {
    return (
        <>
            <div className='ant-card'>
                <Row>
                    <Col lg='10'>
                        <div className="ant-card-body">
                            <h2>{props.skill}</h2>
                            <p>{props.duration}</p>
                            <p>{props.para}</p>
                        </div>                        
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Education;