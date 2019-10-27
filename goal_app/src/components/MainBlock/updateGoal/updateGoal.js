import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import db from "../Task/db";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "react-bootstrap/Modal";
import "../AddButton/addButton.css";

class UpdateGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: "",
      status: "",
      date_completed: "",
      target_date: "",
      statusSelect: "Change Goal Status",
      showModal: this.props.edit,
      currentEmail:""
      
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleStatSelect = this.handleStatSelect.bind(this);
    this.pushToFirebase = this.pushToFirebase.bind(this);
  }
    pushToFirebase(event) {
        console.log('IS THIS PUSHIGN TO FIREBAQSE')
    const {goal, target_date, status} = event.target.elements;
    var data = {"Target_Date": target_date.value, "Status": this.state.statusSelect};
    
    if(status == "Completed") {
        const date_completed = new Date().toDateString();
    }
    event.preventDefault();
    db.database().ref(this.state.currentEmail).child("Goals").child(this.props.goal).update(data);
        this.setState({
        goal: "",
        status: "",
        date_completed: "",
        target_date: "",
        statusSelect: "Change Goal Status",
        showModal: this.props.edit,
        });
    };

  // get current useremail
  componentDidMount() {
    db.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState({ currentEmail: firebaseUser.email.replace(/\./g, '') });
      } else {
        console.log("not logged in");
      }
    });
  }
  // set category
  handleCatSelect(e) {
    if(e){
      this.setState({ categorySelect: e });
    }

    if(e === 'Other') {
        this.setState({ showOther: true });
    }
  }

  close(){
    this.setState({ showModal: false});
  }

  open(){
    this.setState({ showModal: true });
  }

  handleStatSelect(e) {
    this.setState({ statusSelect: e });
  }

  render() {
    return (
      <div>
        <Modal show={this.props.edit} onHide={this.close} size='m'>
          <Modal.Header closeButton>
            <Modal.Title>Edit Goal 🎯</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>

          <Form onSubmit={this.pushToFirebase}>
            <Container>

        {/* Grabbing Goal Name*/}

                <Form.Label>Editing Goal: {this.props.goal}</Form.Label>

        {/* Grabbing Target Date*/}
                 <Form.Row>
                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Control name="target_date"
                      placeholder="Change target completion date?"
                      onChange={e => this.setState({ target_date: e.target.value })}
                    />
                    </Form.Group>
        {/* Grabbing Status*/}
                  
                    <InputGroup className="mb-3">
                      <DropdownButton name = "status"
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={this.state.statusSelect}
                        id="input-group-dropdown-1"
                        onSelect={this.handleStatSelect}
                        className="dropDown"
                      >
                        <Dropdown.Item eventKey="Active">Active</Dropdown.Item>
                        <Dropdown.Item eventKey="Inactive">Inactive</Dropdown.Item>
                        <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                    </Form.Row>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                variant="outline-info"
                type="submit"
                size="lg"
              >
                Submit
              </Button>
            </div>
            </Container>
            </Form>
          </div>
        </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UpdateGoal;