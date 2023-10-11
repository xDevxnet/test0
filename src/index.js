// REACT
import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

// PAGES
import Layout from './components/navbar/Layout';  //LAYOUT
import Home from "./pages/Home";                  //HOME
import Portfolio from './pages/Portfolio';        //PORTFOLIO
import Blog from './pages/Blog';                  //BLOG
import Discord from './pages/Discord';            //DISCORD
import LinkTree from './pages/LinkTree';          //LINKTREE
import Contact from './pages/Contact';            //CONTACT
import Error from './pages/Error';                //ERROR

// STYLES
import './styles/index.css';
import './components/assets/css/bootstrap.min.css';

// APPLICATION
export default function App() {
    return (
    
        <HashRouter>
        <Routes>
            <Route path="/"           element={<Layout />}>
            <Route index            element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="discord"   element={<Discord />} />
            <Route path="linktree"  element={<LinkTree/>} />
            <Route path="contact"   element={<Contact />} />
            <Route path="blog"      element={<Blog />} />
            <Route path="*"         element={<Error />} />
            </Route>
        </Routes>
        </HashRouter>
        
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

