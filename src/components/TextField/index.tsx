import { GenericEventHandler, h } from "preact";
import { useId } from "preact/hooks";
import styles from "./TextField.module.css";

export type TextFieldProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: GenericEventHandler<HTMLInputElement> | undefined;
  type?: string;
  disabled?: boolean;
  error?: string;
};
export const TextField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  type,
  disabled,
  error,
}: TextFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <div className={styles.textField}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`${styles.input} ${disabled ? styles.disabled : ""} ${
          error ? styles.error : ""
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};
