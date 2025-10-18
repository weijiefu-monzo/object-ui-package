import { GenericEventHandler, h } from "preact";
import { useId } from "preact/hooks";
import styles from "./TextField.module.css";

export type TextFieldProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: GenericEventHandler<HTMLInputElement> | undefined;
};
export const TextField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
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
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
