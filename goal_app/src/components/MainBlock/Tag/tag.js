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
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/6e/94/69/6e94695575a2c897135f7cc0b86800eb.png"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Tag;
