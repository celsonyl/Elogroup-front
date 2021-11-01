import React from 'react'
import "./index.css";

function Button({ text, onClick, type, formButton }) {
  return (
    <button
      className={`btn ${!formButton && "blueBtn"}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
