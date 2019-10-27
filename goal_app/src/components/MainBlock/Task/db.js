import * as firebase from "firebase";
//import { provider2 } from "../base"
const db = firebase.initializeApp({
  apiKey: "AIzaSyCVuvtxiljMw3vUmRVGzqeZRQbgZVOUbPY",
  authDomain: "sd-hack-2019.firebaseapp.com",
  databaseURL: "https://sd-hack-2019.firebaseio.com",
  projectId: "sd-hack-2019",
  storageBucket: "sd-hack-2019.appspot.com",
  messagingSenderId: "902516730645",
  appId: "1:902516730645:web:09a61c4db8684cf125571c"
});

export default db;
// export const provider2 = new firebase.auth.GoogleAuthProvider();
// export const provider = new firebase.auth.FacebookAuthProvider();
