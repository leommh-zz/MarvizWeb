import { COMIC_FAVORITE } from "./types";
import loginImage from "../assets/img/perfil.png";

const INITIAL_STATE = {
  user: {
    name: "Usuário de teste",
    login: "teste",
    image: loginImage,
    comicsFavorite: []
  }
};

const favorite = (comicsFavorite, comic) => {
  if (comicsFavorite.length <= 0) {
    return [...comicsFavorite, comic]
  }
  const comicSelected = comicsFavorite.filter(c => c.id === comic.id);
  if (comicSelected.length > 0) {
    return comicsFavorite.filter(c => c.id !== comic.id)
  } 

  return [...comicsFavorite, comic]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMIC_FAVORITE:
      return {
        ...state,
        user: {
          ...state.user,
          comicsFavorite: favorite(state.user.comicsFavorite, action.payload)
        }
      };
    default:
      return state;
  }
};
