const PRESS_NUM = "PRESS_NUM";
const ENTER = "ENTER";

// action
export const pressNum = (n) => ({
  type: PRESS_NUM,
  payload: n,
});

export const enter = () => ({
  type: ENTER,
});

// inputState = append | replace | push

export const reducer = (
  state = { stack: [], inputState: "replace" },
  { type, payload }
) => {
  console.log("oi");
  switch (type) {
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
      } else {
        console.error("inputState = append | replace | push");
      }
      break;
    default:
      return state;
  }
};

/*function calculator(state, action) {
  if (state === undefined) {
    return {
      visor: "",
    };
  }

  let visor = state.visor;

  switch (action.type) {
    case "+":
      return { visor: "" };
    case "-":
      return { visor: "" };
    case "*":
      return { visor: "" };
    case "/":
      return { visor: "" };
    case "%":
      return { visor: "" };
    case "=":
      return { visor: "" };
    case "plusOrMinus":
      return { visor: "" };
    case "backspace":
      return { visor: "" };
    case "clear":
      return { visor: "" };
    case "parenthesis":
      return { visor: "" };
    case "decimalSeparator":
      return { visor: "" };
    default:
      // antes, checar se a action é número
      return state;
  }
}*/
