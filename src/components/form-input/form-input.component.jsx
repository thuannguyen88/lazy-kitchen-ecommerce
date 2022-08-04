import "./form-input.styles.scss";

const FormInput = ({ label, ...inputProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputProps} />
      {/* if label exists then render label. 
      and if user types something into one of the inputs, form field props has some value in it, then apply the shrink css class otherwise don't apply nothing*/}
      {label && (
        <label
          className={`${
            inputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
