import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  render() {
    return (
      <div className="Die">
        <i
          className={`fas fa-dice-${this.props.face} ${
            this.props.rolling && "animate__animated animate__flip"
          }`}
        ></i>
      </div>
    );
  }
}

export default Die;
