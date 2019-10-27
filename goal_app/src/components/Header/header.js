import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./header.css";
import db from "../MainBlock/Task/db"
import Button from 'react-bootstrap/Button';
import ReactTooltip from 'react-tooltip';
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
          <Navbar.Brand href="/" className="brand">
              <h1 className="big-header"><p role="image" aria-label="target">G🎯AL</p></h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" sticky='top'>
              <Nav.Link href="/" className="nav-page">
                <a id="tooltip" class="fa fa-home" aria-hidden="true">
                  <span class="tooltiptext">Home</span>
                </a>
              </Nav.Link>

              <Nav.Link href="timeline" className="nav-page"> 
                <a id="tooltip" class="fa fa-calendar-check" aria-hidden="true">
                  <span class="tooltiptext">Timeline</span>
                </a>
              </Nav.Link>
              
              <Nav.Link href="goals" className="nav-page">
                <a id="tooltip" class="fa fa-bullseye" aria-hidden="true" >
                    <span class="tooltiptext">Goals</span>
                  </a>
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
