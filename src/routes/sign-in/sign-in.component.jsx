import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";
import Button from "../../components/button/button.component";

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
          <h1>Sign up</h1>

          <Button onClick={logGoogleUser} buttonType='google'>Continue with Google</Button>
          <div className="line-container">
            <div className="line"></div>
            <span className="or">OR</span>
          </div>

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
