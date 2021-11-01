import React from "react";

import styles from "./index.module.css";
export function Logo() {
  return (
    <h3 className={styles.title}>
      <span>ELO</span>
      <span className={styles.bolder}>GROUP</span>
    </h3>
  );
}
