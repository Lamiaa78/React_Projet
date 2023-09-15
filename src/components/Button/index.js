import React from 'react';
import '../styles.css';

const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="custom-button"
    >
      {label}
    </button>
  );
};

export default Button;

