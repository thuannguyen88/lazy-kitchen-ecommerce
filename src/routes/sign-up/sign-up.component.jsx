// import { useContext } from "react";

import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button from "../../components/button/button.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Or from "../../components/or/or.component";
// import { Link } from "react-router-dom";

import { ReactComponent as GoogleIcon } from "../../assets/google_icon_color.svg";

// import { UserContext } from "../../contexts/user.context";

import "./sign-up.styles.scss";

const SignUp = () => {
  // const { setCurrentUser } = useContext(UserContext);

  //all calls to database are async
  const logGoogleUser = async () => {
    await signInWithGooglePopUp();
    //  console.log(response);
    // setCurrentUser(user);

    // await createUserDocumentFromAuth(user);
  };

  return (
    <section>
      <div className="sign-up-section">
        <div className="sign-up-container">
          <h1>Sign up</h1>

          <Button onClick={logGoogleUser} buttonType="google">
            <span className="google-text">
              <GoogleIcon className="google-icon"></GoogleIcon> Continue with
              Google
            </span>
          </Button>

          <Or />

          <SignUpForm />

          <p className="disclaimer-container">
            By signing up, you agree to our Privacy Policy, Cookie Policy,
            Member Agreement, and that we may share your personal information
            with our partners to confirm your account.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
