import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink } from 'reactstrap';
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
      <Navbar style={navbarStyles} className="shadow-lg">
        <NavbarBrand>WhoIsThatSuperhero?</NavbarBrand>
        <NavLink href="https://github.com/ianjbark3r/whoisthatsuperhero"><img src={gitLogo} className="image-fluid" alt="Github" /></NavLink>
      </Navbar>
    )
  }
}
