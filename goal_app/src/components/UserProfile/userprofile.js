import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import './userprofile.css'

class UserProfile extends Component {
  render() {
    return (
      <div className="jumbotron">
        <Jumbotron  fluid>
        <Container >
            <img src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="UserPic" height="200" width="200"/>
            <h1 className="userName">My Name</h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
        </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default UserProfile;
