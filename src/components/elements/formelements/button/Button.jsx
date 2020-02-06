import React from 'react';

function Button({ children, classes, disabled }) {
  return (
    <button disabled={disabled} type="submit" className={`btn ${classes}`}>
      {children}
    </button>
  );
}

export default Button;
