import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav id="nav-wrap" className="opaque">

           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
           <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

           <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#education">Education</a></li>
           </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
