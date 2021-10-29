import he from "he";

const PRESS_NUM = "PRESS_NUM";
const ENTER = "ENTER";
const OPERATION = "OPERATION";

// action
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

// inputState = append | replace | push

const doOperation = (x, y, op) => {
  const a = parseFloat(x);
  const b = parseFloat(y);
  console.log(a, b, op);
  switch (op) {
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

export const reducer = (
  state = { stack: [], inputState: "replace" },
  { type, payload }
) => {
  switch (type) {
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
