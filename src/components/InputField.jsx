import React from 'react';

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  ...props
}) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;
