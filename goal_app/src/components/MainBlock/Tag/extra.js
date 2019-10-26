import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Extra extends Component {
  constructor(props, context) {
    super(props, context);
  
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close(){
    this.setState({ showModal: false });
  }

  open(){
    this.setState({ showModal: true });
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
          <Card.Img variant="top" src={"https://img.icons8.com/pastel-glyph/2x/plus.png"} style={{}} />
        </Card>

        <Modal show={this.state.showModal} onHide={this.close} size='m'>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>Modal content here </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default Extra;
