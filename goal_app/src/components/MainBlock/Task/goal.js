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
      dead_line: ""
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
      dead_line: ""
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

        <Form.Label>Goal</Form.Label>
        <Form.Control
          type="goal"
          placeholder="Enter your goal"
          onChange={e => this.setState({ goal: e.target.value })}
        />
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity" style={{}}>
            <Form.Label>Date Added</Form.Label>
            <Form.Control
              placeholder="Enter today's date"
              onChange={e => this.setState({ date_added: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Date Completed</Form.Label>
            <Form.Control
              placeholder="Enter complete date"
              onChange={e => this.setState({ date_completed: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              placeholder="set deadline"
              onChange={e => this.setState({ dead_line: e.target.value })}
            />
          </Form.Group>
        </Form.Row>

        <Form.Label>Status</Form.Label>
        <Form.Control
          style={{ width: "500px" }}
          type="Status"
          placeholder="Enter your progress on this goal"
          onChange={e => this.setState({ status: e.target.value })}
        />

        <div
          style={{
            marginTop: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            variant="outline-info"
            type="submit"
            onClick={this.pushToFirebase.bind(this)}
          >
            Add Goal
          </Button>
        </div>
      </div>
    );
  }
}

export default Goal;
