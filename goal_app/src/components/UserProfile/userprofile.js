import React, { Component } from "react";
import {useEffect, useState} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import './userprofile.css'
import './fontawesome/css/all.css'	
import avatar_default from './avatar_default.png';
import {editUsername} from './functions.js'
import db from '../MainBlock/Task/db';
//import {AuthContext} from '../../auth/Auth';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {currentEmail: ""};
  }
  componentDidMount(){
    db.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        this.setState({currentEmail: firebaseUser.email});
        console.log(typeof(firebaseUser))
        console.log(firebaseUser.email);
      } else{
        console.log('not logged in');
      }
    });
  }
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
        <Container >
            <img src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="UserPic" height="200" width="200"/>
            <h1 className="userName">{this.state.currentEmail}</h1>
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
