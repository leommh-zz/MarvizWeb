import { REGISTER } from "./types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        register: action.payload
      };
    default:
      return state;
  }
};
