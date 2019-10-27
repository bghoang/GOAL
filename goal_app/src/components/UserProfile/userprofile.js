import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import './userprofile.css'
import './fontawesome/css/all.css'	
import avatar_default from './avatar_default.png';
import {editUsername, editGoal, editAvatar} from './functions.js'
class UserProfile extends Component {
  render() {
    return (
      <div className="jumbotron">
        <Jumbotron  fluid>
			<Container>
				<img src={avatar_default} class="user-image" id="avatar" alt="avatar default" onClick= {editAvatar} />
				<center>
					<div class = "user-name" id="userNameDiv">
						<p class = "user-name-font" id="userName"> User Name 
						</p>
						<button class = "edit-userName" id="edit-userName" onClick = {editUsername} > <i class="far fa-edit" id="userName-edit-logo"></i> </button>
					</div>
				</center>

				<p class = "custom-font">
					<i class="far fa-hand-point-down"></i> Upcoming goal <i class="far fa-hand-point-down"></i>
					<div class = "goal-headline" id="goal-headline">
						<p class = "inner-headline-text" id="goal"> This is my most recent upcoming goal at the moment. 
						</p>
						<button class = "edit-goal" onClick={editGoal} > <i class="far fa-edit" id="goal-edit-logo"></i> </button>
					</div>
				</p>
			</Container>
        </Jumbotron>
      </div>
    );
  }
}
export default UserProfile;
