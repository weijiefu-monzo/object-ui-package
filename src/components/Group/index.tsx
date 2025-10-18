import { h, ComponentChildren } from 'preact';
import styles from './Group.module.css';
import clsx from 'clsx';
export type GroupProps = {
  wrap?: boolean;
  children: ComponentChildren;
  fullWidth?: boolean;
};
export const Group = ({ wrap, children, fullWidth }: GroupProps) => {
  return (
    <div
      className={clsx(
        styles.group,
        wrap && styles.wrap,
        fullWidth && styles.fullWidth
      )}
    >
      {children}
    </div>
  );
};
