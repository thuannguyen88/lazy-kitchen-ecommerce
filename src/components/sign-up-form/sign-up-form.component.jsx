import { useState } from "react";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

// empty states
// create an object of default values to allow us to keep track of multiple fields inside of our form and make handleChange generic
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  // destructure and set as constants to use
  const { displayName, email, password, confirmPassword } = formFields;

  // see values of formFields update onChange in console
  console.log(formFields);

  // reset form fields after submission
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // a method that leverages the form fields in order to actually create this method
  const handleSubmit = async (event) => {
    // to prevent default of form
    event.preventDefault();
    // confirm the password and confirmPassword matches
    // see if we've authenticated the user with email and password
    // create a user document from what this returns

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // assign the firebase auth object to user variable
      // what does the response look like. now we know the response contains a user object from firebase, we can destructure that user.
      console.log(user);

      // user document is an entry for our new user in our users collection/table
      // create user document from the auth
      // pass in the user object and the displayName from our signup form
      // we pass in displayName because signing up via email and password does not provide a name
      await createUserDocumentFromAuth(user, { displayName });

      // after user document is created in database, we reset the form fields
      resetFormFields();
    } catch (error) {
      // when testing with password 123, error printed on console saying "Firebase: Password should be at least 6 characters (auth/weak-password)." which can be used to display for the user, which is very"

      // when writing in the same email address from previous sign up error was thrown "error FirebaseError: Firebase: Error (auth/email-already-in-use)." which is good to display to user to let them know"
      if (error.code === "auth/email-already-in-use") {
        alert("unable to create user, email is already in use");
      } else {
        console.log("handleSubmit user sign up error", error);
      }

      if (error.code === "auth/weak-password") {
        alert("password should be at least 6 characters");
      } else {
        console.log("handleSubmit user sign up error", error);
      }
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
    <div className="email-sign-up-container">
     
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name?"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Continue</Button>
      </form>
     
    </div>
  );
};

export default SignUpForm;
