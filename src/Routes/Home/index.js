import React from 'react'
import Pages from '../../Components/HOC/Page'
import AboutAuthor from './Components/AboutAuthor';
import AboutMyself from './Components/AboutMyself';
import MyExpertise from './Components/MyExpertise';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Carousel from './Components/Carousel';

class Home extends React.Component {
    render() {
        return (
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
                    <Carousel />
                </Pages>
            </>
        )
    }
}
export default Home;