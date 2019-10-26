import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Tag extends Component {
  render() {
    return (
      <div>
        <Card
          style={{
            width: "18rem",
            margin: "2rem"
          }}
        >
          <Card.Img variant="top" src={this.props.photo} style={{}} />
          <Card.Body style={{}}>
            <Card.Title>{this.props.name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Tag;
