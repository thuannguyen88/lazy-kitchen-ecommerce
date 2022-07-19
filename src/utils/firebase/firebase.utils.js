import {
  getAuth,
    signInWithPopup,
  GoogleAuthProvider,
//   signInWithRedirect,
} from "firebase/auth";

// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5-CDDkUkBPzMr6Lhfw-zEk-vTpOpdb7I",
  authDomain: "lazy-kitchen-db.firebaseapp.com",
  projectId: "lazy-kitchen-db",
  storageBucket: "lazy-kitchen-db.appspot.com",
  messagingSenderId: "107339882349",
  appId: "1:107339882349:web:2afdfabd7a013e9c1c4464",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialise provider using google auth provider class
const provider = new GoogleAuthProvider();

// can tell how we want google auth to behave
// everytime someone interacts with our provider we want to force them to select an account
provider.setCustomParameters({
  prompt: "select_account",
});

// export create instance
export const auth = getAuth();

// anonmyous function that returns signInWithPopUp, so no sqigglies, and we want to pass auth and the provider
export const signInWithGoogleRedirect = () =>
  signInWithPopup(auth, provider);

// // points directly to our database
// export const db = getFirestore();

// // a method thats an async function that receives a user authentication object
// export const createUserDocumentFromAuth = async (userAuth) => {
//   // see if theres an existing document reference , a special object that firestore uses when talking about actual instance of a document model
//   // doc takes 3 arguments; database, collections, identifier
//   const userDocRef = doc(db, "users", userAuth.uid);

//   console.log(userDocRef);

//   // userSnapshot allows us to check if an instance of the document exists within our database with userSnapshot.exists() and it also allows us to access the data
//   const userSnapshot = await getDoc(userDocRef);

//   // check is snapshot exists, if it doesnt we want to create it inside of our database
//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     // create a new data object so we know when users are signing in
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//       });
//     } catch (error) {
//       console.log("error creating the user", error.message);
//     }
//   }
//   return userDocRef;
// }
