import React from 'react'
import Pages from '../../Components/HOC/Page'
import AboutContact from './Components/ContactHeading';
import ContactMap from './Components/ContactMap';
import ContactForm from './Components/ContactForm';
import AuthorBio from './Components/AuthorBio';

class Contact extends React.Component {
    render() {
        return (
            <>
                <Pages
                    showHeader
                    showFooter
                >
                    <AboutContact />
                    <ContactMap />
                    <ContactForm />
                    <AuthorBio />
                </Pages>
            </>
        )
    }
}
export default Contact;