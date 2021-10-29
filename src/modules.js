const PRESS_NUM = "PRESS_NUM";

// action
export const pressNum = (n) => ({
  type: PRESS_NUM,
  payload: n,
});

export const reducer = (state = "0", { type, payload }) => {
  console.log("oi");
  switch (type) {
    case PRESS_NUM:
      return state + payload;
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
