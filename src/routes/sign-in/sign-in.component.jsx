import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  //all calls to database are async
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    //  console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>I am a sign-in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Redirect</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
