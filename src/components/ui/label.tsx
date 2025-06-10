
import * as React from "react";
import styles from "./label.module.css";
export const Label = ({ children }: { children: React.ReactNode }) => {
  return <label className={styles.customLabel}>{children}</label>;
}
