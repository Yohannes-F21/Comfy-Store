import React from "react";

const FormInput = ({ name, label, type, defaultValue }) => {
  return (
    <div>
      <label className="form-control ">
        <div className="label">
          <span className="label-text capitalize">{label}</span>
        </div>
        <input
          type={type}
          name={name}
          placeholder={defaultValue}
          className="input input-bordered "
        />
      </label>
    </div>
  );
};

export default FormInput;
