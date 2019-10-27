import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/header";
import UserProfile from "../components/UserProfile/userprofile";
import Footer from "../components/Footer/footer";
import MainBlock from "../components/MainBlock/mainblock";
import AddButton from "../components/MainBlock/AddButton/addButton";
import Container from 'react-bootstrap/Container'
import db from "../components/MainBlock/Task/db"
import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import '../App.css';
class Home extends Component{
  constructor(props) {
    super(props);

    this.state = {
      currentEmail:"",
      goals: []
    };

  }

  // get current useremail
  componentDidMount() {
    db.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState({ currentEmail: firebaseUser.email.replace(/\./g, '') });
        this.firebaseRef = db.database().ref(db.auth().currentUser.email.replace(/\./g, '')).child('Goals');

        this.firebaseRef.once("value", snapshot => {
          let items = [];

          snapshot.forEach(childSnapshot => {
            let item = childSnapshot.val();
            if(item.Status == "Active") {
              items.push(item);
            }
          });

          this.setState({goals: items})
        });
      } else {
        console.log("not logged in");
      }
    });

    
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  render() {
    const nameTag = this.props.name;

    function showGoal(tag, goal) {
      if (tag === nameTag) {
        return goal;
      } else {
        return;
      }
    }

    return (
    	<div className="App">
    	<Header/>
    	<UserProfile/>
    	<AddButton/>
    	<br/>
    		<Container id="avoidfooter">
    		<h3> Active Goals</h3>
      		<ListGroup>
        		{this.state.goals.map(item => (
          		<ListGroup.Item>
            	<p>{item.Goal}</p> 
            	<p>Target Date: {item.Target_Date}</p>
            </ListGroup.Item>
        	))}
      		</ListGroup>
 			</Container>
 			<br/><br/>
      	<Footer id="foot"/>
      </div>
    );
  }
};
export default Home;
