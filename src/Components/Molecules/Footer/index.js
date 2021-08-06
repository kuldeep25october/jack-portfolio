import React from 'react'
import './style.scss'
import { Row, Col } from 'react-bootstrap'
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons'

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <Row>
                    <Col lg='6'>
                        <div className='ContactForm'>
                            <p>
                                DROP A LINE
                            </p>
                            <div className='mt-30'>
                                <input type='text' placeholder='Your Name' /><br />
                                <input type='text' placeholder='Email' /><br />
                                <input type='text' placeholder='Subject' /><br />
                                <textarea placeholder='Message' rows="2" cols="3"></textarea>
                                <input type='button' value='Send Message' />
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='Wrapper'>
                            <div className='AddressDetails'>
                                <p>
                                    CONTACT ME
                                </p>
                                <ul>
                                    <li>
                                        4657 Franklin Avenue, ARCH CAPE
                                    </li>
                                    <li>
                                        +361-883-3218
                                    </li>
                                    <li>
                                        hello@jac-co.com
                                    </li>
                                </ul>
                                <div className='mt-30'>
                                    <input type='button' value='DOWNLOAD RESUME' />
                                </div>
                                <div className='socialIcons'>
                                    <ul>
                                        <li>
                                            <a href=""><FacebookOutlined /></a>
                                        </li>
                                        <li>
                                            <a href=""><InstagramOutlined /></a>
                                        </li>
                                        <li>
                                            <a href=""><LinkedinOutlined /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </footer>
        </>
    )
}
export default Footer;