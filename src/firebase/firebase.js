import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5buGaakLc9xAJudnVCzCqYtUV_-_ly6w",
    authDomain: "shop-db-2ee45.firebaseapp.com",
    databaseURL: "https://shop-db-2ee45.firebaseio.com",
    projectId: "shop-db-2ee45",
    storageBucket: "",
    messagingSenderId: "334680343680",
    appId: "1:334680343680:web:3f2ffd9a5522be7b"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
