import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import {AuthContext} from "../auth/Auth";
import '../App.css';
import db from "../components/MainBlock/Task/db"
import "bootstrap/dist/css/bootstrap.min.css";
import {provider, provider2} from "../components/MainBlock/Task/db";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
const Login = ({history}) => {

	const handleLogin = (event) => {
		console.log("pressed log in");
		event.preventDefault();
		const {email, password} = event.target.elements;
		try{
			db
			.auth()
			.signInWithEmailAndPassword(email.value,password.value);
			history.push("/");
		} catch(error){
			console.log(error);
		} 
	}

	const { currentUser } = useContext(AuthContext);
      if (currentUser) {
        return <Redirect to="/" />;
      }

    const redirectSignUp = () => {
        history.push("/signup")
      }

	return(
		<div className = "centered">
			<Container id="LogIn" >
				<h1> Welcome to GOAL!</h1>
				<h3>Log In</h3>
				<Form onSubmit={handleLogin}>
		  			<Form.Group>
		    			<Form.Label>Email address</Form.Label>
		    			<Form.Control name = "email" type="email" placeholder="Enter email" />
		    			<Form.Label>Password</Form.Label>
		    			<Form.Control name = "password" type="password" placeholder="Password" />
		    			<br/>
		    			<Button id = "Button" type="submit">
		    				Log In
		  				</Button>
		  			</Form.Group>
		  			<Form.Text className="text-muted">
		      			Don't have an account?
		  			</Form.Text>
		   			<Button id = "Button" onClick={redirectSignUp}>
		    			Sign Up
		  			</Button>
				</Form>
			</Container>
		</div>
	);
};
export default Login;

	/*const handleLoginWithGoogle = () => {
    try{
        db
        .auth()
        .signInWithPopup(provider2);
        history.push("/");
        } catch (error){
           alert(error);
        }
    }
    const handleLoginWithFb = ( ) => {
    try{
        db
        .auth()
        .signInWithPopup(provider);
        history.push("/");
    } catch (error){
        alert(error);
    }
    }*/