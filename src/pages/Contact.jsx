// IMPORTS
import React, { useEffect } from 'react';

// SECTIONS

//STYLES
import '../styles/Contact.css';

function Contact() {

    // CHANGE TITLE
    useEffect(() => {
        document.title = 'Contact - DevXNet';
    }, []);

    return (
        <h1>Contact Page</h1>
    );
}

export default Contact;