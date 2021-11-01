import React, { forwardRef } from "react";

import styles from "./index.module.css";

function TextBox(
  { id, inputName, required, type, onChange, error, errorMsg },
  ref
) {
  return (
    <div className={styles.box}>
      <label
        className={`${styles.label} ${required && styles.required} ${
          error && styles.error
        }`}
        htmlFor={id}
      >
        {inputName}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        onChange={(e) => {
          if (onChange) onChange(e);
        }}
        required={required}
        ref={ref}
      />
      {error && <span className={styles.error}>{errorMsg}</span>}
    </div>
  );
}

export default forwardRef(TextBox);
