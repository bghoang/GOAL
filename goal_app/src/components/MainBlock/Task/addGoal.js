import React, { Component } from "react";
import db from "./db";
import ListGroup from "react-bootstrap/ListGroup";

class AddGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.firebaseRef = db.database().ref("goals");
    this.firebaseRef.on("value", dataSnapshot => {
      let items = [];

      dataSnapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item[".key"] = childSnapshot.key;
        items.push(item);
      });

      this.setState({ items });
    });
  }
  componentWillUnmount() {
    this.firebaseRef.off();
  }

  render() {
    const nameTag = this.props.name;
    function showGoal(tag, goal) {
      if (tag === nameTag) {
        return goal;
      } else {
        return;
      }
    }
    function check(status, tag) {
      if (status === "Incomplete" && tag === nameTag) {
        return "danger";
      }
      if (status === "In progress" && tag === nameTag) {
        return "warning";
      }
      if (status === "Completed" && tag === nameTag) {
        return "success";
      } else {
        return "none";
      }
    }

    const records = this.state.items.map(items => (
      <ListGroup>
        <ListGroup.Item action variant={check(items.status, items.category)}>
          {showGoal(items.category, items.goal)}
        </ListGroup.Item>
      </ListGroup>
    ));
    return <div>{records}</div>;
  }
}
export default AddGoal;
