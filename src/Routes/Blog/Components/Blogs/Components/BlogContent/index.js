import React from 'react'
import { Col } from 'react-bootstrap'
import { UserOutlined, WechatOutlined, MinusOutlined } from '@ant-design/icons';

const BlogContent = (props) => {
    return (
        <>
            <Col lg='12'>
                <img alt='' src={props.imgsrc} />
                <a href='' className='BlogDate'><h3>{props.date}</h3><p>{props.month}</p></a>
                <div className='BlogCntnt'>
                    <a href=''><h2>{props.heading}</h2></a>
                    <p>{props.paragraph}</p>
                    <ul>
                        <li>
                            <a href=''>{<UserOutlined />}<span>{props.category}</span>{<MinusOutlined />}</a>
                        </li>
                        <li>
                            <a href=''>{<WechatOutlined />}<span>{props.comment}</span></a>
                        </li>
                    </ul>
                </div>
            </Col>
        </>
    )
}
export default BlogContent;