import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //all calls to database are async
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
    //  const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>I am a sign-in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Redirect</button>
    </div>
  );
};

export default SignIn;
