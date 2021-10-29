import { connect } from "react-redux";
import Calculator from "./Calculator";

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    visorText: state.visor,
  };
}


// The HOC
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);

export default connectedComponent;
