import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import NavbarScript from '../scripts/NavbarScript';

function Navbar() {
  return (

    <nav>
      <script src={NavbarScript}></script>
      <div class="navbar">
        <ul class = "menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/github">Github</Link></li>
            <li><Link to="/discord">Discord</Link></li>
            <li><Link to="/linktree">LinkTree</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
            <li class= "icons">
                <a href="https://www.linkedin.com/in/devxnet/"><i class="fa-brands fa-linkedin-in fa-bounce"></i></a>
                <a href="https://github.com/Dev-xNet"><i class="fa-brands fa-github fa-bounce"></i></a>
                <a href="https://discord.gg/FwEGtSW6WE"><i class="fa-brands fa-discord fa-bounce"></i></a>
                <a href="https://hashnode.com/@DevXNet"><i class="fa-brands fa-hashnode fa-bounce"></i></a>
                <a href="https://dev.to/devxnet"><i class="fa-brands fa-dev fa-bounce"></i></a>
                <a href="https://twitter.com/devxnet"><i class="fa-brands fa-twitter fa-bounce"></i></a>
            </li>
            <div class="cancel-btn"><i class="fas fa-times"></i></div>
        </ul>
        <div class="media-icons">
              <a href="https://www.linkedin.com/in/devxnet/"><i class="fa-brands fa-linkedin-in fa-bounce"></i></a>
              <a href="https://github.com/Dev-xNet"><i class="fa-brands fa-github fa-bounce"></i></a>
              <a href="https://discord.gg/FwEGtSW6WE"><i class="fa-brands fa-discord fa-bounce"></i></a>
              <a href="https://hashnode.com/@DevXNet"><i class="fa-brands fa-hashnode fa-bounce"></i></a>
              <a href="https://dev.to/devxnet"><i class="fa-brands fa-dev fa-bounce"></i></a>
              <a href="https://twitter.com/devxnet"><i class="fa-brands fa-twitter fa-bounce"></i></a>
              
        </div>
      </div>
      <div class="menu-btn"><i class="fa-solid fa-bars"></i></div>
    </nav>
  );
}

export default Navbar;