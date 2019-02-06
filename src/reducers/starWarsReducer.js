import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";
const initialState = {
  characters: [],
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
