import * as actionTypes from "../action";


const initialState = {
  results: [],
};

export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray,
      };
    default:
      return state;
  }
};
