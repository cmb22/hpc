
import * as React from "react";
import styles from "./Select.module.css"

export const Select = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return <select className={styles.select} {...props}>{children}</select>;
}
