import React from 'react';

function Button({ onClick, children, classes, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className={`btn ${classes}`}
    >
      {children}
    </button>
  );
}

export default Button;
