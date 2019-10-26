import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./footer.css";
import { SocialIcon } from "react-social-icons";

class Footer extends Component {
  render() {
    const CURRENT_YEAR = new Date().getFullYear();
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="brand">
            <h3 className="big-footer">LOCATION</h3>
            <div className="location">
              2215 John Daniel Drive Clark, MO 65243
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="social">
              <SocialIcon
                className="twitter"
                url="http://twitter.com/jaketrent"
              />
              <SocialIcon
                className="other"
                url="http://facebook.com/jaketrent"
              />
              <SocialIcon
                className="other"
                url="http://linkedin.com/jaketrent"
              />
              <SocialIcon
                className="other"
                url="http://instagram.com/jaketrent"
              />
            </Nav>
          </Navbar.Collapse>
          <Navbar className="copyright">
            © {CURRENT_YEAR} Copyright: Goal.com
          </Navbar>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
