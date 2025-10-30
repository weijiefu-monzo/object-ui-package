import { h } from "preact";
import styles from "./Switch.module.css";
import clsx from "clsx";

export type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};
export const Switch = ({ checked, onChange, disabled }: SwitchProps) => {
  return (
    <div
      className={clsx(
        styles.switch,
        checked && styles.checked,
        disabled && styles.disabled
      )}
      onClick={() => !disabled && onChange(!checked)}
    >
      <div className={styles.track}>
        <div className={styles.thumb}></div>
        <div className={styles.status}> {checked ? "On" : "Off"} </div>
      </div>
    </div>
  );
};
