import React, { Component } from "react";
import db from "./db";
import ListGroup from "react-bootstrap/ListGroup";

class AddGoal extends Component {
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
            if(item.Category == this.props.name) {
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
    function check(status) {
      if (status === "Inactive") {
        return "warning";
      }
      if (status === "Active") {
        return "success";
      } else {
        return "none";
      }
    }

    return (
      <ListGroup>
        {this.state.goals.map(item => (
          <ListGroup.Item variant={check(item.Status)}>
            <p>{item.Goal}</p> 
            <p>Target Date: {item.Target_Date}</p>
            
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}
export default AddGoal;
