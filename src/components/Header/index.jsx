import React from "react";
import styles from "./index.module.css";
import { Logo } from "../Logo";

export function Header({ title }) {
  return (
    <header className={styles.header}>
      <Logo />
      <h2 className={styles.title}>{title}</h2>
      <div></div>
    </header>
  );
}
