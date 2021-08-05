import React from 'react'
import './style.scss'
import BlogContent from '../Blogs/Components/BlogContent/index'
import BlogMap from '../../../../Constant/BlogMap'
import { Row, Col } from 'react-bootstrap'
import { Images } from '../../../../Shared/Assets'
import ImagesIcon from '../../../../Components/Cells/ImagesIcon'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const LatestBlog = () => {
    return (
        <>
            <div className='BlogSection'>
                <div className='BlgCntnr'>
                    <Row>
                        <Col lg='8'>
                            <Row>
                                {
                                    BlogMap.map((val, ind) => {
                                        return (
                                            <BlogContent
                                                key={ind}
                                                imgsrc={val.imgsrc}
                                                date={val.date}
                                                month={val.month}
                                                heading={val.heading}
                                                paragraph={val.paragraph}
                                                category={val.category}
                                                comment={val.comment}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            <div className='NxtPrvBtn'>
                                <ul>
                                    <li>
                                        <a href=''>{<LeftOutlined />}</a>
                                    </li>
                                    <li>
                                        <a href=''>1</a>
                                    </li>
                                    <li>
                                        <a href=''>2</a>
                                    </li>
                                    <li>
                                        <a href=''>{<RightOutlined />}</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg='4'>
                            <div className='SideBar'>
                                <div className='SearchSection'>
                                    <input type='text' placeholder='Search Keyword' />
                                    <input type='button' value='Search' />
                                </div>
                                <div className='CategorySection'>
                                    <h2>Category</h2>
                                    <ul>
                                        <li>
                                            <a href=''>Restaurant Food(37)</a>
                                        </li>
                                        <li>
                                            <a href=''>Travel News(10)</a>
                                        </li>
                                        <li>
                                            <a href=''>Modern Technology(03)</a>
                                        </li>
                                        <li>
                                            <a href=''>Product(11)</a>
                                        </li>
                                        <li>
                                            <a href=''>Inspiration(21)</a>
                                        </li>
                                        <li>
                                            <a href=''>Health Care(21)09</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='PostSection'>
                                    <h2>Recent Post</h2>
                                    <div className='PostItem'>
                                        <ImagesIcon src={Images.post_1_jpg} />
                                        <div className='PostBody'>
                                            <a href=''>From life was you fish...</a>
                                            <p>January 12, 2019</p>
                                        </div>
                                    </div>
                                    <div className='PostItem'>
                                        <ImagesIcon src={Images.post_2_jpg} />
                                        <div className='PostBody'>
                                            <a href=''>The Amazing Hubble</a>
                                            <p>02 Hours Ago</p>
                                        </div>
                                    </div>
                                    <div className='PostItem'>
                                        <ImagesIcon src={Images.post_3_jpg} />
                                        <div className='PostBody'>
                                            <a href=''>Astronomy or Astrology</a>
                                            <p>03 Hours Ago</p>
                                        </div>
                                    </div>
                                    <div className='PostItem'>
                                        <ImagesIcon src={Images.post_4_jpg} />
                                        <div className='PostBody'>
                                            <a href=''>Asteroids telescope</a>
                                            <p>01 Hours Ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='TagSection'>
                                    <h2>Tag Clouds</h2>
                                    <ul>
                                        <li>
                                            <a href=''>project</a>
                                        </li>
                                        <li>
                                            <a href=''>love</a>
                                        </li>
                                        <li>
                                            <a href=''>technology</a>
                                        </li>
                                        <li>
                                            <a href=''>travel</a>
                                        </li>
                                        <li>
                                            <a href=''>restaurant</a>
                                        </li>
                                        <li>
                                            <a href=''>life style</a>
                                        </li>
                                        <li>
                                            <a href=''>design</a>
                                        </li>
                                        <li>
                                            <a href=''>illustration</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='InstagramSection'>
                                    <h2>Instagram Feeds</h2>
                                    <ul>
                                        <li>
                                            <a href=''><ImagesIcon src={Images.xpost_5} /></a>
                                        </li>
                                        <li>
                                            <a href=''><ImagesIcon src={Images.xpost_6} /></a>
                                        </li>
                                        <li>
                                            <a href=''><ImagesIcon src={Images.xpost_7} /></a>
                                        </li>
                                        <li>
                                            <a href=''><ImagesIcon src={Images.xpost_8} /></a>
                                        </li>
                                        <li>
                                            <a href=''><ImagesIcon src={Images.xpost_9} /></a>
                                        </li>
                                        <li>
                                            <a href=''><ImagesIcon src={Images.xpost_10} /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='NewsLetterSection'>
                                    <h2>Newsletter</h2>
                                    <div className='NewsLetterForm'>
                                        <input type='text' placeholder='Enter Email' />
                                        <input type='button' value='Subscribe' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default LatestBlog;