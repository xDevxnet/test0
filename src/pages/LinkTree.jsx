// IMPORTS
import React, { useEffect } from 'react';

// SECTIONS

// STYLES
import '../styles/LinkTree.css';

function LinkTree() {

    // CHANGE TITLE
    useEffect(() => {
        document.title = 'LinkTree - DevXNet';
    }, []);

    return (
        
        <h1>this is the LinkTree Page</h1>

    );
}

export default LinkTree;