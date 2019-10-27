import React, { Component } from "react";
import AddGoal from "./addGoal";

class Goal extends Component {
  render() {
    const name = this.props.goalname;
    return (
      <div>
        <AddGoal name={name} />
      </div>
    );
  }
}

export default Goal;
