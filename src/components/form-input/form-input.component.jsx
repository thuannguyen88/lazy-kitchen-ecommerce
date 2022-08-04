const FormInput = ({ label, ...inputProps }) => {
  return (
    <div className="group">
      {/* if label exists then render label. and if form field props has some value in it, then apply the shrink css class otherwise don't*/}
      {label && (
        <label
          className={`${
            inputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
      <input className="input" {...inputProps} />
    </div>
  );
};

export default FormInput;
