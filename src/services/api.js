// import firebase from 'firebase';
// import FirebaseNative from 'react-native-firebase';
// import { AsyncStorage } from 'react-native';
import axios from "axios";

/**
 * Importar chaves de um arquivo key.js dentro da pasta services (criar caso não exista)
 */
import { publicKey, privateKey, devConfig, prodConfig } from "./key";

import md5 from 'js-md5';

/**
 * Configuração Firebase
 */
// const config = __DEV__ === false
//     ? prodConfig
//     : devConfig;

// export const firebaseImpl = firebase.initializeApp(config);
// export const firebaseDatabase = firebase.database();
// export const firebaseAuth = firebase.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();


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
  // console.warn(urlComics)
  return axios.get(urlComics).then(comics => {
    // console.warn(comics)
    return(comics.data.data.results);
  });
};

/**
 * Métodos da nossa api interna
 */

// export const onSignIn = async ({email, password}) => {

//   try {
//       console.log(`Email: ${ email } / Password: ${ password }`);
//       const user = await FirebaseNative.auth()
//           .signInAndRetrieveDataWithEmailAndPassword('leommh2@gmail.com', 'lm102030');
      
//       const TOKEN_KEY  = user.user.uid;

//       await AsyncStorage.setItem(TOKEN_KEY, "true");

//   }
//   catch(error) {
//       console.log(error);
//   }
// }

// export const onSignOut = async () => {

//   try {

//       await FirebaseNative.auth().signOut();

//       await AsyncStorage.removeItem(TOKEN_KEY);

//   } catch (error) {
//       console.log(error);
//   }
// }

// export const onSignUp = async (dados) => {
//   try {
//       const user = await FirebaseNative.auth()
//           .createUserWithEmailAndPassword(dados);

//       // console.log(user);
//   }
//   catch(err) {
//       console.log(err);
//   }
// }

// export const isSignedIn = async () => {
//   const token = await AsyncStorage.getItem(TOKEN_KEY);

//   return (token !== null) ? true : false;
  
// };
