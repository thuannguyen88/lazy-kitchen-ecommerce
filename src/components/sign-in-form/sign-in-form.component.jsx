import { useState } from "react";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import Or from "../or/or.component";

import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import { ReactComponent as GoogleIcon } from "../../assets/google_icon_color.svg";

// empty states
// create an empty object with email and password
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  // destructure and set as constants to use
  const { email, password } = formFields;

  // see values of formFields update onChange in console
  console.log(formFields);

  // reset form fields after submission
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();

    createUserDocumentFromAuth(user);
  };

  // a method that leverages the form fields in order to actually create this method
  const handleSubmit = async (event) => {
    // to prevent default of form
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(response);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("this is not a valid email address");
          break;
        case "auth/user-not-found":
          alert("no account exists with this email");
          break;
        case "auth/wrong-password":
          alert("password does not match with existing account");
          break;
        case "auth/too-many-requests":
          alert(
            "access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later"
          );
          break;
        default:
          console.log(error);
      }

      console.log(error);
    }
  };

  // displayName from userObject from firebase is null, so can use the value from displayName in form to update database

  // create a generic handlechange event to use for all form fields
  const handleChange = (event) => {
    // destructure targeting the value and the name
    const { name, value } = event.target;
    //  console.log(formFields);
    // preserve the form fields we aren't changing and for the form field we're targeting, set its name and value
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Welcome Back</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Button type="submit">Log in</Button>
      </form>
      <Or />

      <Button type="button" onClick={signInWithGoogle} buttonType="google">
      <span className="google-text">
              <GoogleIcon className="google-icon"></GoogleIcon> Continue with
              Google
            </span>
      </Button>
    </div>
  );
};

export default SignInForm;
