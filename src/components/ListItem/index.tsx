import { h, ComponentChildren } from 'preact';
import styles from './ListItem.module.css';
import clsx from 'clsx';
export type ListItemProps = {
  avatar?: ComponentChildren;
  label?: string;
  description?: string;
  action?: ComponentChildren;
  onClick?: () => void;
  outlined?: boolean;
};
export const ListItem = ({
  avatar,
  label,
  description,
  action,
  onClick,
  outlined=false
}: ListItemProps) => {
  const handleActionClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <li
      className={clsx(styles.listItem, onClick && styles.clickable, outlined && styles.outlined)}
      onClick={onClick}
    >
      {avatar && <div className={styles.avatar}>{avatar}</div>}
      <div className={styles.content}>
        {label && <div className={styles.label}>{label}</div>}
        {description && <div className={styles.description}>{description}</div>}
      </div>
      {action && (
        <div className={styles.action} onClick={handleActionClick}>
          {action}
        </div>
      )}
    </li>
  );
};
