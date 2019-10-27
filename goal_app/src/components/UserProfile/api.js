import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      content: ""
    };
  }
  async componentDidMount() {
    const url = "https://api.quotable.io/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ author: data.author, content: data.content });
  }

  render() {
    return (
      <div>
        <Alert
          style={{
            fontSize: "30px",
            marginBottom: "10px",
            marginTop: "-90px"
          }}
        >
          <div>
          "{this.state.content}" ({this.state.author})
          </div>
        </Alert>
      </div>
    );
  }
}
export default API;
