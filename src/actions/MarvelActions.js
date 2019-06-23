import { COMICS_LIST } from "../reducers/types";
import { getAllComics } from "../services/api";
import { saveStorageData, getStorageData } from "../services/storage";

export const getComics = (limit) => {
  return async (dispatch, getState) => {
    let savedComics = await getStorageData('COMICS');
    if (!!savedComics && savedComics.length > 0) {
      dispatch({ type: COMICS_LIST, payload: savedComics })
    } else {
      getAllComics({ 
        limit,
        callback: async (comics) => {
          await saveStorageData('COMICS', comics)
          dispatch({ type: COMICS_LIST, payload: comics })
        } 
      })
    }
  };
};


