import React from 'react'
import Pages from '../../Components/HOC/Page'
import AboutAuthor from './Components/AboutAuthor';
import AboutMyself from './Components/AboutMyself';
import MyExpertise from './Components/MyExpertise';
import Experience from './Components/Experience';
import Education from './Components/Education';
import ImgGallery from './Components/ImageGallery';

class About extends React.Component{
    render(){
        return(
            <>
            <Pages
               showHeader
               showFooter
            >
              <AboutAuthor />   
              <AboutMyself />   
              <MyExpertise />
              <Experience />
              <Education />
              <ImgGallery />
            </Pages>
            </>
        )
    }
}
export default About;