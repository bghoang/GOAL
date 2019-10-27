import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import "./userprofile.css";
import "./fontawesome/css/all.css";
import { editUsername, editGoal, editAvatar } from "./functions.js";
import db from "../MainBlock/Task/db";
import API from "./api";
import "../../App.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      currentEmail: "",
      goals:  [" "]
    };
    this.firebaseRef = db.database().ref("userprofile");
  }

  componentDidMount() {
    db.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState({ currentEmail: firebaseUser.email });
        console.log(typeof firebaseUser);
        console.log(firebaseUser.email);
      } else {
        console.log("not logged in");
      }
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <Jumbotron fluid>
          <Container>
            <img
              src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg"
              class="user-image"
              alt="UserPic"
              height="300"
              width="300"
              onClick={editAvatar}
            />
            <h1 className="userName">{this.state.currentEmail}</h1>
          </Container>
        </Jumbotron>
        <API />
      </div>
    );
  }
}
export default UserProfile;

/**			<Container>
				<center>
					<div class = "user-name" id="userNameDiv">
						<p class = "user-name-font" id="userName"> User Name 
						</p>
						<button class = "edit-userName" id="edit-userName" onClick = {editUsername} > <i class="far fa-edit" id="userName-edit-logo"></i> </button>
					</div>
				</center>
			</Container> */
