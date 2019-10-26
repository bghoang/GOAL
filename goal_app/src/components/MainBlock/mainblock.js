import React, { Component } from "react";
import Tag from "./Tag/tag";
import "./mainblock.css";

class MainBlock extends Component {
  render() {
    return (
      <div
        className="tags"
        style={{
          marginLeft: "6rem",
          paddingBottom: "1rem"
        }}
      >
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    );
  }
}

export default MainBlock;
