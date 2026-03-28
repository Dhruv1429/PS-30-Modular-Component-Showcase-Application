import React, { memo } from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'medium', isDisabled = false, onClick, style }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={isDisabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default memo(Button);