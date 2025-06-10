
import * as React from "react";
import styles from "./label.module.css";
export function Label({ children }: { children: React.ReactNode }) {
  return <label className={styles.customLabel}>{children}</label>;
}
