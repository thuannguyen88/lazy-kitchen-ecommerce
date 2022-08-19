// create a seperation between my frontend and the services it relies on
// set up all these utility functions to minimise the impact changing 3rd party libraries have on our codebase

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

// export create instance. the auth is a singleton because it keeps track of the authentication state of the entire application. as the user signs in through different means and methods we need some way to be certain what it is the user has done where in the browser you navigate away from the website you are breaking the instance of the website, so this auth is the only way we can keep track of whether users are properly authenticating or not and thats whats great about this service of firebase.
export const auth = getAuth();

// anonmyous function that returns signInWithPopUp, so no sqigglies, and we want to pass auth and the provider
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

// points directly to our database
export const db = getFirestore();

// create a function that takes first parameter is collectionKey i.e. users, and second parameter is json objects
// calling to an API to store data so it'll be asynchryonous
// how do we create the collection
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // passing in our db instance, get the collection within the db, and within this db the collection we are looking for is the collectionKey we're going to pass in
  // so when we call this function we will give it categories
  const collectionReference = collection(db, collectionKey);

  // how to store each of these objects into this collectionReference as a new document?
  // we want to make sure all of our objects we want to add to our collection are successfully added and to do that we need to use a batch
  // create batch instance
  const batch = writeBatch(db);

  // for each of these objects i want you to batch set for me
  // iterate over each object in the array
  objectsToAdd.forEach((object) => {
    // use doc method and pass it the collectionReference , pass it the key value of the shop-data which is title
    // we add an additional batch set call on there creating a new document reference for each of those objects where the key is the title
    const docRef = doc(collectionReference, object.title.toLowerCase());

    // i want you to batch.set on this docReference, because firebase will give us a document reference even if it doesnt exist yet, it will just point to that place with that specific key, in this case {object.title} inside of our collection
    // and then for the second parameter, set that value as the object itself, and the value is the object itself
    batch.set(docRef, object);
  });
  // this will fire the batch
  // commits all the writes to the database in this write batch as a single atomic unit
  await batch.commit();
  // console.log done so we know
  console.log("done");
};

export const getCategoriesandDocuments = async () => {
  // get the collection reference for categories collection
  const collectionReference = collection(db, "categories");

  // im going to create a query from this collectionReference that gives you an object
  const q = query(collectionReference)

  // get a snapshot , executes the query and returns the result as a QuerySnapshot
  const querySnapshot = await getDocs(q)
  // const querySnapshot = await getDocs(q);
   
  // reduce, the first parameter being the callback, and the second parameter being the object which is an empty object because we're building the instance of it
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    // destructure the title and items from the snapshot of our data
    const { title, items } = docSnapshot.data();
    // the title of our accumulater needs to be lowercase because at the moment is uppercase, and that value is going to be equal to items
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

// a method thats an async function that receives a user authentication object
// in cases where we get additional information, as an object
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = { displayName: "" }
) => {
  // if no userAuth then we want to return, to protect code
  if (!userAuth) return;

  // see if theres an existing document reference , a special object that firestore uses when talking about actual instance of a document model
  // doc takes 3 arguments; database, collections, identifier
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  // userSnapshot allows us to check if an instance of the document exists within our database with userSnapshot.exists() and it also allows us to access the data
  const userSnapshot = await getDoc(userDocRef);

  // check is snapshot exists, if it doesnt we want to create it inside of our database
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    // create a new data object so we know when users are signing in
    const createdAt = new Date();

    // after all fields have been filled, spread in the additionalInformation object. if displayName is full then we'll spread in the additonalinformation with displatName key and its string value which will overwrite the null value
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  // if i domt get an email or password then i want to exit and not call this method
  return await createUserWithEmailAndPassword(auth, email, password);
  // return await value
};

// sign in helper function
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  // if i dont get an email or password then i want to exit and not call this method
  return await signInWithEmailAndPassword(auth, email, password);
  // return await value
};

// create interfact layer function for signing out
export const signOutAuthUser = async () => await signOut(auth);

// create a helper function for returning back an observer listener
// for it to work it takes two parameters; first being auth singleton, second being a callback we want to call everytime this auth state changed
// onAuthStateChanged is behind the scenes creating a listener for us, and in here its going to take our next value and set is our callback for this observer pattern
// we optionally also have available from the observer pattern more parameters 'error' callback as number 3 and 'completed' callback as number 4
// onAuthStateChanged(auth, callback, errorCallback, completedCallback);
// {
// next: callback
// error: errorCallback,
// complete: completedCallback
// }
export const onAuthStateChangedListener = async (callback) => {
  return await onAuthStateChanged(auth, callback);
};
