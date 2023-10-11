// IMPORTS
import React, { useEffect } from 'react';

// SECTIONS
import Welcome from '../sections/HomeSections/Welcome.jsx';
import HomeFooter from '../sections/HomeSections/HomeFooter.jsx';

// STYLES
import '../styles/Home.css';


function Home() {

    // CHANGE TITLE
    useEffect(() => {
        document.title = 'Home - DevXNet';
    }, []);
    
    return (

        <body>
            
            <div><Welcome/></div>
            <div><HomeFooter/></div>
            
        </body>

    );
}

export default Home;