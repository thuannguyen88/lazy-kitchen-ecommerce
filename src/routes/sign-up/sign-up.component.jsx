import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up.styles.scss";
import Button from "../../components/button/button.component";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import Or from "../../components/or/or.component";
import { Link } from "react-router-dom";

const SignUp = () => {
  //all calls to database are async
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    //  console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <section>
      <div className="sign-up-section">
        <div className="sign-up-container">
          <h1>Sign up</h1>

          <Button onClick={logGoogleUser} buttonType="google">
            Continue with Google
          </Button>

          <Or />

          <SignUpForm />

          <span className="log-in-link">
            Already have an account?{` `}
            <Link className="nav-link" to="/login">
              Login here
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
