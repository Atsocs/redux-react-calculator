import { Component } from "react";
import Button from "./Button";
import "./ButtonsContainer.css";

class ButtonsContainer extends Component {
  render() {
    const red = "red";
    const green = "green";
    const white = "white";
    return (
      <div className="buttons-container">
        <Button color={red}>C</Button>
        <Button color={green}>()</Button>
        <Button color={green}>%</Button>
        <Button color={green}>&divide;</Button>
        <br />
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button color={green}>&times;</Button>
        <br />
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button color={green}>&minus;</Button>
        <br />
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button color={green}>+</Button>
        <br />
        <Button>&plusmn;</Button>
        <Button>0</Button>
        <Button>,</Button>
        <Button color={white} bgcolor={green}>
          =
        </Button>
      </div>
    );
  }
}

export default ButtonsContainer;
