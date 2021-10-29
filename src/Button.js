import { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    let buttonStyle = {
      color: this.props.color,
      backgroundColor: this.props.bgcolor || "#ddd"
    };
    return (
      <div className="button" style={buttonStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
