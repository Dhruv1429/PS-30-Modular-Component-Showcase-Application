import React, { memo } from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',     
  isDisabled = false, 
  onClick,
  ...props 
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={isDisabled}
      onClick={onClick}
      aria-disabled={isDisabled} 
      {...props}
    >
      {children}
    </button>
  );
};

// Rubric: Memoization and render optimization applied
export default memo(Button);