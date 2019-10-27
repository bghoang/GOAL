import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./tag.css"

class Extra extends Component {
  constructor(props, context) {
    super(props, context);
  
    this.initialState = {
      showModal: false,
      categorySelect: "Select a Category",
      showOther: false
    };

    this.state = this.initialState;

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

  }

  submit() {
    //Update database here
    alert('success')
  }
  close(){
    this.setState(() => this.initialState);
  }

  open(){
    this.setState({ showModal: true });
  }

  handleSelect(e) {
    this.setState({ categorySelect: e });
    if(e === 'Other') {
        this.setState({ showOther: true });
    }
  }


  render() {
    return (
      <div>
        <Card
          onClick={this.open}
          style={{
            width: "18rem",
            margin: "2rem"
          }}
          border='light'
        >
          <Card.Img variant="top" src={"https://img.icons8.com/pastel-glyph/2x/plus.png"} style={{}} className="tag"/>
        </Card>

        <Modal show={this.state.showModal} onHide={this.close} size='m'>
          <Modal.Header closeButton>
            <Modal.Title>Add a Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <InputGroup className="mb-3">
                <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title={this.state.categorySelect}
                id="input-group-dropdown-1"
                onSelect={this.handleSelect}
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
            <InputGroup className="mb-3">
                <FormControl
                hidden={!this.state.showOther}
                placeholder="Enter Category"
                aria-label="Enter Category"
                aria-describedby="basic-addon2"
                />
            </InputGroup>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.submit}>Add</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default Extra;
