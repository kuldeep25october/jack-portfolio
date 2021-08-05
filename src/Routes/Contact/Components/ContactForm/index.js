import React from 'react'
import './style.scss';
import { Row, Col } from 'react-bootstrap'
import { BiHome } from 'react-icons/bi'
import { FaTabletAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const ContactForm = () => {
    return (
        <>
            <div className="CntctForm">
                <Row>
                    <Col lg='12'>
                        <h2>Get in Touch</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg='8'>
                        <Row>
                            <Col lg='12'>
                                <textarea placeholder='Enter Message' row='5' cols='5'></textarea>
                            </Col>
                            <Col lg='6'>
                                <input type='text' placeholder='Enter your name' />
                            </Col>
                            <Col lg='6'>
                                <input type='text' placeholder='Email' />
                            </Col>
                            <Col lg='12'>
                                <input type='text' placeholder='Enter Subject' />
                            </Col>
                        </Row>
                        <input type='button' value='SEND' />
                    </Col>
                    <Col lg='4'>
                        <div className='ContactInfo'>
                            <span className="float-left">
                                <BiHome />
                            </span>
                            <div>
                                <h3>Buttonwood, California.</h3>
                                <p>Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div className='ContactInfo'>
                            <span className="float-left">
                                <FaTabletAlt />
                            </span>
                            <div>
                                <h3>+1 253 565 2365</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className='ContactInfo'>
                            <span className="float-left">
                                <AiOutlineMail />
                            </span>
                            <div>
                                <h3>support@colorlib.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default ContactForm;