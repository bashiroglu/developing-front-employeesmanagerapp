import React from 'react';

function Button({ children, classes }) {
  return (
    <button type="submit" className={`btn ${classes}`}>
      {children}
    </button>
  );
}

export default Button;
