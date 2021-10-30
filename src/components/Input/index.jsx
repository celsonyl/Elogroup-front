import { forwardRef } from "react";
import "./index.css";

function TextBox(
  { id, inputName, required, type, onChange, error, errorMsg },
  ref
) {
  return (
    <div className="box">
      <label
        className={`label ${required && "required"} ${error && "error"}`}
        htmlFor={id}
      >
        {inputName}
      </label>
      <input
        className="input"
        type={type}
        id={id}
        onChange={(e) => {
          if (onChange) onChange(e);
        }}
        required={required}
        ref={ref}
      />
      {error && <span className="error">{errorMsg}</span>}
    </div>
  );
}

export default forwardRef(TextBox);
