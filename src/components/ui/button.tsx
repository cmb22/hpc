
import * as React from "react";
import styles from "./button.module.css";

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.customButton} {...props} >
      {children}
    </button>
  );
}
