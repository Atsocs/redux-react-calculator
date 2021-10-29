import { connect } from "react-redux";
import Calculator from "./Calculator";
import { pressNum, enter, operation, clear, opposite } from "./modules";

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    calculatorState: state,
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    pressNumWithDispatch: (n) => dispatch(pressNum(n)),
    enterAction: () => dispatch(enter()),
    operationAction: (op) => dispatch(operation(op)),
    clearAction: () => dispatch(clear()),
    oppositeAction: () => dispatch(opposite()),
  };
}

// The HOC
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);

export default connectedComponent;
