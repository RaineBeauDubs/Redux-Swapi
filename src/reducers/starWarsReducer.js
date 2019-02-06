import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SUCCESS:
    console.log(action.payload);
      return {
        ...state,
        characters: action.payload.results,
        fetching: false
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
