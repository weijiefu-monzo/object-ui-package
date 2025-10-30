import { h, ComponentChildren } from "preact";
import styles from "./Card.module.css";
import clsx from "clsx";

export type CardProps = {
  children: ComponentChildren;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return <div className={clsx(styles.card, className)}>{children}</div>;
};
