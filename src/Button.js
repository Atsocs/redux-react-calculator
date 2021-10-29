import { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    let buttonStyle = {
      color: this.props.color,
      backgroundColor: this.props.bgcolor || "#ddd",
    };
    const text = this.props.children;
    return (
      <div
        className="button"
        style={buttonStyle}
        onClick={() => this.props.onClick && this.props.onClick(text)}
      >
        {text}
      </div>
    );
  }
}

export default Button;
