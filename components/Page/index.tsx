import { h, ComponentChildren } from 'preact';
import styles from './Page.module.css';

type PageProps = {
  children?: ComponentChildren;
};
export const Page = ({ children }: PageProps) => {
  return <div className={styles.page}>{children}</div>;
};
