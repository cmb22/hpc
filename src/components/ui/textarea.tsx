
import * as React from "react";
import styles from "./textarea.module.css";

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className={styles.customTextarea} {...props} />;
}
