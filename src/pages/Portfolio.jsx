// IMPORTS
import React, { useEffect } from 'react';

// SECTIONS

// STYLES
import '../styles/Portfolio.css';

function Portfolio() {

    // CHANGE TITLE
    useEffect(() => {
        document.title = 'Portfolio - DevXNet';
    }, []);
    
    return (

        <h1>this is the Portfolio Page</h1>

    );
}

export default Portfolio;