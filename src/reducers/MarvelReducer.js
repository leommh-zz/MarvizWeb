import { COMICS_LIST } from "./types";

const INITIAL_STATE = {
  comics: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMICS_LIST:
      return {
        ...state,
        comics: action.payload
      };
    default:
      return state;
  }
};
