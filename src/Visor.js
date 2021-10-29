import { Component } from "react";
import "./Visor.css";

class Visor extends Component {
  render() {
    return (
      <div className="visor">
        <div className="visor-content">{this.props.text}</div>
        <div className="visor-equals">{this.props.equals}</div>
      </div>
    );
  }
}

export default Visor;
