
import * as React from "react";
import styles from "./input.module.css";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.customInput} {...props} />;
}
