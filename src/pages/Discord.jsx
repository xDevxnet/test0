// IMPORTS
import React, { useEffect } from 'react';

// SECTIONS

//STYLES
import '../styles/Discord.css';

function Discord() {

    // CHANGE TITLE
    useEffect(() => {
        document.title = 'Discord - DevXNet';
    }, []);

    return (
        <h1>Discord Page</h1>
    );
}

export default Discord;