import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./header.css";
import db from "../MainBlock/Task/db"
import Button from 'react-bootstrap/Button'
//const btnLogout = document.getElementById('btnLogout');
function LogOut(e){
    console.log("triggered");
    db.auth().signOut();
    
}
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {currentEmail: ""};
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home" className="brand">
              <h1 className="big-header">GOAL</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" sticky='top'>
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
        <Button onClick={LogOut} variant="primary" type="submit">
        Log Out
      </Button>
        </Navbar>
      </div>
    );
  }
}

export default Header;
