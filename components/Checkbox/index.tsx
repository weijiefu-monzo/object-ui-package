import { h } from "preact";
import { useId } from "preact/hooks";
import styles from "./Checkbox.module.css";

export type CheckboxProps = {
  id?: string;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <label className={styles.checkbox} htmlFor={inputId}>
      <input
        id={inputId}
        type="checkbox"
        className={styles.input}
        checked={!!checked}
        onChange={(e) => onChange?.((e.target as HTMLInputElement).checked)}
      />
      <span className={styles.box} aria-hidden="true" />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
