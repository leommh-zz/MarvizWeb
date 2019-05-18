import { LOGIN } from "./types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload
      };
    default:
      return state;
  }
};
