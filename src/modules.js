import he from "he";

const PRESS_NUM = "PRESS_NUM";
const ENTER = "ENTER";
const OPERATION = "OPERATION";
const CLEAR = "CLEAR";
const OPPOSITE = "OPPOSITE";

// Actions
export const pressNum = (n) => ({
  type: PRESS_NUM,
  payload: n,
});

export const enter = () => ({
  type: ENTER,
});

export const operation = (op) => ({
  type: OPERATION,
  payload: op,
});

export const clear = () => ({
  type: CLEAR,
});

export const opposite = () => ({
  type: OPPOSITE,
});

const doOperation = (x, y, op) => {
  const a = parseFloat(x);
  const b = parseFloat(y);
  console.log(a, b, op);
  switch (op) {
    case "^":
      return b ** a;
    case "+":
      return b + a;
    case he.decode("&minus;"):
      return b - a;
    case he.decode("&times;"):
      return b * a;
    case he.decode("&divide;"):
      return b / a;
    case "%":
      return b % a;
    default:
      return 0;
  }
};

// inputState = append | replace | push
const initialState = { stack: [], inputState: "replace" };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPPOSITE:
      return {
        stack: [
          `${-parseFloat(state.stack[0] || "0")}`,
          ...state.stack.slice(1),
        ],
        inputState: state.inputState,
      };
    case CLEAR:
      return initialState;
    case OPERATION:
      return {
        stack: [
          `${doOperation(
            state.stack[0] || "0",
            state.stack[1] || "0",
            payload
          )}`,
          ...state.stack.slice(2),
        ],
        inputState: "push",
      };
    case ENTER:
      return {
        stack: [state.stack[0] || 0, ...state.stack],
        inputState: "replace",
      };
    case PRESS_NUM:
      if (state.inputState === "append") {
        return {
          stack: [(state.stack[0] || "0") + payload, ...state.stack.slice(1)],
          inputState: "append",
        };
      } else if (state.inputState === "replace") {
        return {
          stack: [payload, ...state.stack.slice(1)],
          inputState: "append",
        };
      } else if (state.inputState === "push") {
        return {
          stack: [payload, ...state.stack],
          inputState: "append",
        };
      } else {
        console.error("inputState = append | replace | push");
      }
      break;
    default:
      return state;
  }
};
