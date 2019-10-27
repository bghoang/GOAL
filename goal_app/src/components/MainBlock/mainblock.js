import React, { Component } from "react";
import Tag from "./Tag/tag";
import Extra from "./Tag/extra";
import "./mainblock.css";
import Info from "./tagInfor";
import AddButton from "./AddButton/addButton";

class MainBlock extends Component {
  render() {
    return (
      <div>
        <div
          className="tags"
          style={{
            marginLeft: "6rem",
            paddingBottom: "1rem"
          }}
        >
          {Info.map(m => (
            <Tag {...m} className="tag" />
          ))}

          <Extra />
        </div>
        <AddButton />
      </div>
    );
  }
}

export default MainBlock;
