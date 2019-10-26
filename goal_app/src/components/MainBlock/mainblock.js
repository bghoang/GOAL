import React, { Component } from "react";
import Tag from "./Tag/tag";
import "./mainblock.css";
import Info from "./tagInfor";

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
        {Info.map(m => (
          <Tag {...m} />
        ))}
      </div>
    );
  }
}

export default MainBlock;
