import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import db from "../Task/db";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class AddButton extends Component {
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

  pushToFirebase(event  ) {
    const {
      goal,
      status,
      date_added,
      date_completed,
      dead_line,
      category
    } = this.state;
    event.preventDefault();
    this.firebaseRef
      .child(goal)
      .set({ goal, status, date_added, date_completed, dead_line, category });
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
        <Container>
        <Form.Label style={{ fontSize: "60px" }}>Goal</Form.Label>
        <Form.Control
          style={{ marginBottom: "15px" }}
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

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="Status"
              placeholder="Enter your progress on this goal"
              onChange={e => this.setState({ status: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="Category"
              placeholder="Enter the category for this goal"
              onChange={e => this.setState({ category: e.target.value })}
            />
          </Form.Group>
        </Form.Row>
        <div
          style={{
            marginTop: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10rem"
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
        </Container>
      </div>
    );
  }
}

export default AddButton;
