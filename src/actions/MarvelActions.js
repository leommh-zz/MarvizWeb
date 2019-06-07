import { COMICS_LIST } from "../reducers/types";
import { getAllComics } from "../services/api";

export const getComics = (limit) => {
  return async (dispatch, getState) => {
    getAllComics({ 
      limit,
      callback: (comics) => dispatch({ type: COMICS_LIST, payload: comics })
    })
  };
};


