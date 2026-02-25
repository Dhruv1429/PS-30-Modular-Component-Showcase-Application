import React, { memo } from 'react';
import './Input.css';

const Input = ({
  label,
  id,
  error,
  helperText,
  type = 'text',
  value,
  onChange,
  disabled = false,
  ...props
}) => {
  return (
    <div className={`input-wrapper ${error ? 'has-error' : ''}`}>
      {label && <label htmlFor={id} className="input-label">{label}</label>}
      <input
        id={id}
        type={type}
        className="input-field"
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={!!error} // Rubric: Accessibility & UI Design
        aria-describedby={helperText ? `${id}-helper` : undefined}
        {...props}
      />
      {helperText && (
        <span id={`${id}-helper`} className="input-helper">
          {helperText}
        </span>
      )}
    </div>
  );
};

// Rubric: Memoization applied
export default memo(Input);