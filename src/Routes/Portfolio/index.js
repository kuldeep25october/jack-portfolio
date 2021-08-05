import React from 'react'
import Pages from '../../Components/HOC/Page'
import AboutPortfolio from './Components/AboutPortfolio';
import ImageGallery from './Components/ImgGallery';
import IntroAbtAuthor from './Components/IntroAbtAuthor';

class Portfolio extends React.Component {
    render() {
        return (
            <>
                <Pages
                    showHeader
                    showFooter
                >
                    <AboutPortfolio />
                    <ImageGallery/>
                    <IntroAbtAuthor/>
                </Pages>
            </>
        )
    }
}
export default Portfolio;