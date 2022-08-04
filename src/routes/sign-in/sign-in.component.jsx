import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  //all calls to database are async
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    //  console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <section>
      <div className="sign-in-section">
        <div className="sign-in-container">
          <h1>I do not have an account</h1>
          <button onClick={logGoogleUser} className="google-sign-in-button">
            Sign up with Google
          </button>
          <div className="line"></div>
          <SignUpForm />
        </div>
        <div className="right-container">
          <h2>I'm the right div</h2>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
