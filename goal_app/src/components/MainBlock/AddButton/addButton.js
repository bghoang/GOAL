import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import db from "../Task/db";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
import Modal from "react-bootstrap/Modal";
import "./addButton.css";



class AddButton extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      goal: "",
      status: "",
      date_added: "",
      date_completed: "",
      target_date: "",
      category: "",
      categorySelect: "Select a Category",
      statusSelect: "Select a Goal Status",
      showModal: false,
      showOther: false,
      currentEmail:""
    };
    this.state = this.initialState;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleCatSelect = this.handleCatSelect.bind(this);
    this.handleStatSelect = this.handleStatSelect.bind(this);
    this.pushToFirebase = this.pushToFirebase.bind(this);
    this.firebaseRef = db.database().ref("goals");
  }
    pushToFirebase(event) {
    const {goal, target_date, status, category} = event.target.elements;
    var data = {"Goal": goal.value, "Target_Date": target_date.value, 
      "Category": this.state.categorySelect, "Status": this.state.statusSelect};
    
    const date_added = new Date().toDateString();
    // goal, status, date_added, target_date,
    event.preventDefault();
    db.database().ref(this.state.currentEmail).child("Goals").push().set(data);
    this.setState({
      goal: "",
      status: "",
      date_added: "",
      date_completed: "",
      target_date: "",
      category: "",
      categorySelect: "Select a Category",
      statusSelect: "Select a Goal Status",
      showModal: false,
      showOther: false
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
    this.setState(() => this.initialState);
  }

  open(){
    this.setState({ showModal: true });
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }


  handleStatSelect(e) {
    console.log("ran into select"+ e);
    this.setState({ statusSelect: e });
  }

  render() {
    return (
      <div>
        <Button
            variant="info"
            type="button"
            size="lg"
            onClick={this.open}
          >
            Add a New Goal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close} size='m'>
          <Modal.Header closeButton>
            <Modal.Title>Set a New Goal 🎯</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>

          <Form onSubmit={this.pushToFirebase}>
            <Container>

        {/* Grabbing Goal Name*/}

                <Form.Label>Goal</Form.Label>
                   <Form.Control name="goal"
                      style={{ marginBottom: "15px" }}
                      type="goal"
                      placeholder="Enter your goal"
                      onChange={e => this.setState({ goal: e.target.value })}
                    />
        {/* Grabbing Target Date*/}
                 <Form.Row>
                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Target Date</Form.Label>
                    <Form.Control name="target_date"
                      placeholder="Set a target completion date"
                      onChange={e => this.setState({ target_date: e.target.value })}
                    />
                    </Form.Group>
                </Form.Row>
        {/* Grabbing Status*/}
                  <Form.Row>
                    <InputGroup className="mb-3"></InputGroup>
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
                    <DropdownButton
                      as={InputGroup.Prepend}
                      variant="outline-secondary"
                      title={this.state.categorySelect}
                      id="input-group-dropdown-1"
                      onSelect={this.handleCatSelect}
                      className="dropDown"
                    >
                      <Dropdown.Item eventKey="Health">Health</Dropdown.Item>
                      <Dropdown.Item eventKey="Professional">Professional</Dropdown.Item>
                      <Dropdown.Item eventKey="Skills">Skills</Dropdown.Item>
                      <Dropdown.Item eventKey="Travel">Travel</Dropdown.Item>
                      <Dropdown.Item eventKey="Lifestyle">Lifestyle</Dropdown.Item>
                      <Dropdown.Item eventKey="Personal">Personal</Dropdown.Item>
                      <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
        {/* Grabbing Category*/}
                  <InputGroup className="mb-3">
                    <FormControl name = "category"
                    hidden={!this.state.showOther}
                    placeholder="Enter Category"
                    aria-label="Enter Category"
                    aria-describedby="basic-addon2"
                    />
                  </InputGroup>
            </Form.Row>
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
                size="lg"
              >
                Add Goal
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

export default AddButton;