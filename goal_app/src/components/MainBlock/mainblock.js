import React, { Component } from "react";
import Tag from "./Tag/tag";
import "./mainblock.css";
import Info from 

class MainBlock extends Component {
  render() {
    const tagInfo = { name: "test", photo: "src" };
    return (
      <div
        className="tags"
        style={{
          marginLeft: "6rem",
          paddingBottom: "1rem"
        }}
      >
        <Tag category={tagInfo.name} />
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
