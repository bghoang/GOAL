import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home" className="brand">
            <h1 className="big-header">GOAL</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="home" className="home">
                Home
              </Nav.Link>
              <Nav.Link href="timeline" className="timeline">
                Timeline
              </Nav.Link>
              <Nav.Link href="goals" className="goals">
                Goals
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
