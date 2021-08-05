import React from 'react'
import Pages from '../../Components/HOC/Page'
import AboutBlog from './Components/BlogHeading';
import LatestBlog from './Components/Blogs';
import InfoAbtAuthor from './Components/InfoAbtAuthor';

class Blog extends React.Component {
    render() {
        return (
            <>
                <Pages
                    showHeader
                    showFooter
                >
                    <AboutBlog/>
                    <LatestBlog/>
                    <InfoAbtAuthor/>
                </Pages>
            </>
        )
    }
}
export default Blog;