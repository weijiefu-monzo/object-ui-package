import { h, ComponentChildren } from 'preact';
import styles from './Page.module.css';

export type PageProps = {
  children?: ComponentChildren;
};
export const Page = ({ children }: PageProps) => {
  return <div className={styles.page}>{children}</div>;
};
