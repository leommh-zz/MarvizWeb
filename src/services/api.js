import md5 from 'js-md5';
import axios from "axios";
import { AsyncStorage } from 'react-native';

/**
 * Importar chaves de um arquivo key.js dentro da pasta services (criar caso não exista)
 */
import { storageKey, publicKey, privateKey, devConfig, prodConfig } from "./key";

/**
 * Configuração API Marvel
 */
const marvelAPI = "https://gateway.marvel.com/v1/public";

const apiKey = publicKey;

const timestamp = Number(new Date())
const hash = md5.create()
hash.update(timestamp + privateKey + publicKey)

export const getAllComics = async ({ limit, callback }) => {
  const urlComics =`${marvelAPI}/comics?ts=${timestamp}&limit=${limit}&apikey=${apiKey}&hash=${hash}`;

  return axios.get(urlComics).then(comics => {
    if (callback) {
      return callback(comics.data.data.results);
    } else {
      return(comics.data.data.results);
    }
  });
};

export const getAuthors = async ({ comicId, callback }) => {
  const urlAuthors =`${marvelAPI}/comics/${comicId}/creators?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;

  return axios.get(urlAuthors).then(authors => {
    if (callback) {
      return callback(authors.data.data.results);
    } else {
      return(authors.data.data.results);
    }
  });
};

export const getCharacters = async ({ comicId, callback }) => {
  const urlCharacters =`${marvelAPI}/comics/${comicId}/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;

  return axios.get(urlCharacters).then(characters => {
    if (callback) {
      return callback(characters.data.data.results);
    } else {
      return(characters.data.data.results);
    }
  });
};

export const getSeries = async ({ id, type, callback }) => {
  const urlSeries =`${marvelAPI}/${type == 'author' ? 'creators' : 'characters'}/${id}/comics?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;

  return axios.get(urlSeries).then(series => {
    if (callback) {
      return callback(series.data.data.results);
    } else {
      return(series.data.data.results);
    }
  });
};

/**
 * Configuração do AsyncStorage
 */
export const postStorage = async (name, data) => {
  try {
    const value = await AsyncStorage.setItem(
      storageKey + name,
      JSON.stringify(data)
    );
    return { error: false, data: value }
  } catch (err) {
    return { error: true, message: err }
  }
};

export const getStorage = async (name) => {
  try {
    const value = await AsyncStorage.getItem(storageKey + name);
    if (value !== null) {
      return { error: false, data: JSON.parse(value) }
    } else {
      return { error: true }
    }
  } catch (err) {
    return { error: true, message: err }
  }
};