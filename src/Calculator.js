import { Component } from "react";
import "./Calculator.css";
import Visor from "./Visor";
import Button from "./Button";

class Calculator extends Component {
  render() {
    const red = "red";
    const green = "green";
    const white = "white";
    return (
      <div className="calculator">
        <Visor text={this.props.visorText} equals={"1.5"} />
        <div className="buttons-container">
          <Button color={red}>C</Button>
          <Button color={green}>()</Button>
          <Button color={green}>%</Button>
          <Button color={green}>&divide;</Button>
          <br />
          <Button onClick={this.props.pressNumWithDispatch}>7</Button>
          <Button onClick={this.props.pressNumWithDispatch}>8</Button>
          <Button onClick={this.props.pressNumWithDispatch}>9</Button>
          <Button color={green}>&times;</Button>
          <br />
          <Button onClick={this.props.pressNumWithDispatch}>4</Button>
          <Button onClick={this.props.pressNumWithDispatch}>5</Button>
          <Button onClick={this.props.pressNumWithDispatch}>6</Button>
          <Button color={green}>&minus;</Button>
          <br />
          <Button onClick={this.props.pressNumWithDispatch}>1</Button>
          <Button onClick={this.props.pressNumWithDispatch}>2</Button>
          <Button onClick={this.props.pressNumWithDispatch}>3</Button>
          <Button color={green}>+</Button>
          <br />
          <Button>&plusmn;</Button>
          <Button onClick={this.props.pressNumWithDispatch}>0</Button>
          <Button>,</Button>
          <Button color={white} bgcolor={green}>
            =
          </Button>
        </div>{" "}
      </div>
    );
  }
}

export default Calculator;
