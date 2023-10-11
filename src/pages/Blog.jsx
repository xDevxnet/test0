// IMPORTS
import React, { useEffect } from 'react';

// SECTIONS

//STYLES
import '../styles/Blog.css';

function Blog() {
    
    // CHANGE TITLE
    useEffect(() => {
        document.title = 'Blog - DevXNet';
    }, []);

    return (
        <h1>Blog Page</h1>
    );
}

export default Blog;