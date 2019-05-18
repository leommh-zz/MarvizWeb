import { COMIC_FAVORITE } from "../reducers/types";

export const favorite = ({ comic }) => {
  return (dispatch, getState) => {
    dispatch({ type: COMIC_FAVORITE, payload: comic });
  };
};
