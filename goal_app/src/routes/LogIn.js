import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import {AuthContext} from "../auth/Auth";
import '../App.css';
import db from "../components/MainBlock/Task/db"
import "bootstrap/dist/css/bootstrap.min.css";
import {provider, provider2} from "../components/MainBlock/Task/db";
import Form from 'react-bootstrap/Form'

const Login = ({history}) => {
	const handleLogin = (event) => {
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
		<div className="centered">
			<h1>Log In</h1>
			<form onSubmit={handleLogin}>
				<Form.Label>
					Email
				</Form.Label>
				<input name="email" type="email" placeholder="Email"/>
				<label>
					Password
				</label>
				<input name="password" type="password" placeholder="Password"/>
				<button type="submit">Log In</button>
			</form>
			<button onClick={redirectSignUp}> Sign UP </button>
			{/*<button onClick={handleLoginWithGoogle}>Log In with Google</button>*/}
      		 {/*<button onClick={handleLoginWithFb}>Log In with Facebook</button>*/}
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