import React, { Component } from 'react';
import gitLogo from '../github-logo.png';

const navbarStyles = {
  backgroundColor: "#F0131E",
  color: "white",
  fontWeight: "bold",
  paddingLeft: "1.2rem",
  paddingRight: "1rem"
}

export default class Header extends Component {
  render() {
    return (
      <>
        <nav style={navbarStyles} className="navbar shadow-lg">
          <a style={{ color: "white" }} className="navbar-brand" href="https://github.com/ianjbark3r/whoisthatsuperhero" >WhoIsThatSuperhero?</a>
          <a href="https://github.com/ianjbark3r/whoisthatsuperhero"><img src={gitLogo} className="image-fluid" alt="Github" /></a>
        </nav>
      </>
    )
  }
}
