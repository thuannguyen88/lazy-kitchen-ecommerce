import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { Link } from "react-router-dom";
import "./log-in.styles.scss";

const LogIn = () => {
  return (
    <section>
      <div className="log-in-section">
        <div className="log-in-container">
          <SignInForm />
          <span className="log-in-link">
            New to Lazykitchen?{` `}
            <Link className="nav-link" to="/signup">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
