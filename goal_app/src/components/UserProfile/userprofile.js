import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import './userprofile.css'
import './fontawesome/css/all.css'	
import avatar_default from './avatar_default.png';
import {editUsername} from './functions.js'
class UserProfile extends Component {
  render() {
    return (
      <div className="jumbotron">
        <Jumbotron  fluid>
			<Container>
				<img src={avatar_default} class="user-image" alt="avatar default" onclick= "editAvatar()" id="avatar" />
				<center>
					<div class = "user-name" id="userNameDiv">
						<p class = "user-name-font" id="userName"> User Name <button class = "edit-userName" id="edit-userName" onClick = {editUsername} > <i class="far fa-edit"></i> </button>
						</p>
					</div>
				</center>

				<p class = "custom-font">
					<i class="far fa-hand-point-down"></i> Upcoming goal <i class="far fa-hand-point-down"></i>
					<div class = "goal-headline">
						<p class = "inner-headline-text" id="goal"> This is my most recent upcoming goal at the moment. <button class = "edit-goal" onclick="editGoal()" > <i class="far fa-edit"></i> </button>
						</p>
					</div>
				</p>
			</Container>
        </Jumbotron>
      </div>
    );
  }
}
export default UserProfile;
