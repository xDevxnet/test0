// IMPORTS
import React, { useEffect } from 'react';

// ERROR PAGE

// STYLES
import '../styles/Error.css';

function Error() {

    // CHANGE TITLE
    useEffect(() => {
        document.title = 'Error - DevXNet';
    }, []);

    return (
        <h1>this is the ErrorPage</h1>
    );
}

export default Error;