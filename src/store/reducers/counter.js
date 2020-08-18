import * as actionTypes from "../action";


const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.payload.value,
      };
    default:
      return state;
  }
};
