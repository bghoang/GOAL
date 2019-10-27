import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import db from "./db";
import Col from "react-bootstrap/Col";

class Goal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: "",
      status: "",
      date_added: "",
      date_completed: "",
      dead_line: "",
      category: ""
    };

    this.firebaseRef = db.database().ref("goals");
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  pushToFirebase(event) {
    const { goal, status, date_added, date_completed, dead_line } = this.state;
    event.preventDefault();
    this.firebaseRef
      .child(goal)
      .set({ goal, status, date_added, date_completed, dead_line });
    this.setState({
      goal: "",
      status: "",
      date_added: "",
      date_completed: "",
      dead_line: "",
      category: ""
    });
  }

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item action variant="secondary">
            Secondary
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default Goal;
