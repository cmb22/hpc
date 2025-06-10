
import * as React from "react";
import styles from "./input.module.css";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input
    // className="w-full p-2 border rounded" 
    className={styles.customInput}
    {...props} />;
}
