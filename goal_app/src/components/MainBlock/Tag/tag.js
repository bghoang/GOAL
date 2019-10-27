import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Goal from "../Task/goal";
import "./tag.css"

class Tag extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Card
          onClick={this.open}
          className="tag"
          style={{
            width: "18rem",
            margin: "1.5rem"
          }}
          border="light"
        >
          <Card.Img variant="top" src={this.props.photo} style={{}} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
          </Card.Body>
        </Card>

        <Modal show={this.state.showModal} onHide={this.close} size="xl">
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                textAlign: "center",
                flex: 1
              }}
            >
              {this.props.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Goal goalname={this.props.name} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Tag;
