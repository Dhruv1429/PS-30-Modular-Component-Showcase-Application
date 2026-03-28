import React, { memo } from 'react';
import './Input.css';

const Input = ({ label, name, type = 'text', value, onChange, placeholder, error, helperText }) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label" htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${error ? 'input-error' : ''}`}
      />
      {helperText && (
        <span className={`input-helper ${error ? 'text-error' : 'text-muted'}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default memo(Input);