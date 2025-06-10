
import * as React from "react";
import styles from "./card.module.css";

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const cardClass = className ? `${styles.customCard} ${className}` : styles.customCard;

  return <div className={cardClass}>{children}</div>;
}
