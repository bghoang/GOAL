import React, { useCallback} from "react";
import db from "../components/MainBlock/Task/db";
import '../App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
const SignUp = ({history}) => {
	const redirectLogIn = () => {
		history.push("/home")
	}
	const handleSignUp = (event) => {

        event.preventDefault();
        const { email, password } = event.target.elements;

        try{
            db
            .auth()
            .createUserWithEmailAndPassword(email.value,
                                            password.value);
            history.push("/home");
        } catch(error){
            alert(error);
        }
     }
  
	return(
		<div  className="centered" >
		<Container id = "SignUp">
		<h1> Sign Up </h1>
		<Form onSubmit={handleSignUp}>
			<Form.Group controlId="formBasicEmail">
			<Form.Label>Email address</Form.Label>
			<Form.Control name="email" type="email" placeholder="Enter email" />
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
			<Form.Label>Password</Form.Label>
			<Form.Control name="password" type="password" placeholder="Password" />
			</Form.Group>
			<Button id="signupbutton" variant="primary" type="submit">
			Sign Up
			</Button>
			<Form.Text className="text-muted">
				Get Started!
			</Form.Text>
		</Form>
		</Container>
		</div>

	);
};
export default SignUp;