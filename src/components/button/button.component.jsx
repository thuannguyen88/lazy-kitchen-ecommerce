import "./button.styles.scss";
// we have 3 button variants
// default button
// google sign in button
// inverted button
// have default styling for the button and control the class styling for each button variant

// create variable called button types
const BUTTON_TYPES = {
  google: "google-sign-in-button",
  inverted: "inverted-button",
  checkout: "checkout-button",
};

// we can spread otherProps because buttons will container other props like type=submit
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
