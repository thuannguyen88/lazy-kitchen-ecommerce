import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// export the context
// build the UserContext, passing the default value
// the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// export the provider
// provider is the actual functional component, we recieve children and we need to return UserContext.Provider
// the .Provider is the component that will wrap around any other component that needs access to the values
// render the children {children} being <app/> as the provider wraps around our app
// provider will hold the values
// will allow any of the child components to access the values inside of its useState
export const UserProvider = ({ children }) => {
  // set up currentUser and setter function state with initialised value of null
  const [currentUser, setCurrentUser] = useState(null);

  // generate the value
  const value = { currentUser, setCurrentUser };

  //   // once this UserProvider mounts, i want you to sign out
  //   signOutAuthUser();

  // run this once when components mount/on page load
  useEffect(() => {
    // this listener receives a callback function and passes it as the second argument in onAuthStateChanged, and it will call this callback whenever the authentication state of our auth singleton changes, so when a user signs in thats considered an auth change as user has been authenticated, and when user signs out that is an auth change. so our callback is going to get invoked whenever a user logs in or logs outs.

    // this is a permanent open listener, once you set it, it is always waiting to see whether or not auth states are changing, and the moment it does it will run a callback

    // the problem is you need to tell it to stop listening when it unmounts because if you don't this is a memory leak
    // it provides us a useful function called unsubscribe, which stops it listening

    // with useEffect it will run whatever we return from this callback when it unmounts, so unsubscribe whenever you unmount

    // onAuthStateChanged function is persisting our auth singleton between refreshes so they stay logged in even after refresh, so firebase knows my user is still authenticated in because firebase is listening to our current connection

    // On this unsubscribe method, it will clean up this acutal method, and oftentimes with this unsubscribe it will call if you were to pass it a completeCallback it will also call that because when observer is removed it will call completeCallback
    const {unsubscribe}  = onAuthStateChangedListener((user) => {
      // if user is authenticated, then create user document from auth
      // our user snapshot in createUserDocumentFromAuth will check for instance of user document, and if it exists it will create a document of that user, if it already exists then it skips the step all together, either way we get a valid userDocRef
      if (user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
      // console.log(user);
    });
    return unsubscribe;
  }, []);

  // pass the value into value prop
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
