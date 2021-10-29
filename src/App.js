import { connect } from "react-redux";
import Calculator from "./Calculator";
import { pressNum } from "./modules";

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    visorText: state,
  };
}

// Action

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    pressNumWithDispatch: (n) => dispatch(pressNum(n)),
  };
}

// The HOC
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);

export default connectedComponent;
