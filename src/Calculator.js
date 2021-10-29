import { Component } from "react";
import "./Calculator.css";
import Visor from "./Visor";
import ButtonsContainer from "./ButtonsContainer";

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Visor text={"(1+1)*(3/4)"} equals={"1.5"} />
        <ButtonsContainer />
      </div>
    );
  }
}

export default Calculator;
