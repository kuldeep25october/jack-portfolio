import React from 'react'
import {Col} from 'react-bootstrap'

const Experience =(props)=>{
    return(
    <>
    <div className='ant-card'>
                <Col lg='10'>
                    <div className="ant-card-body">
                        <h2>{props.skill}</h2>
                        <p>{props.duration}</p>
                        <p id='para'>{props.para}</p>
                        <div>
                        </div>
                </div>
                </Col>
                </div>
    </>
    )
}
export default Experience;