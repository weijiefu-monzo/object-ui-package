import { GenericEventHandler, h } from "preact";
import { useId } from "preact/hooks";
import styles from "./Select.module.css";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onChange?: GenericEventHandler<HTMLSelectElement> | undefined;
  disabled?: boolean;
};

export const Select = ({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
  disabled,
}: SelectProps) => {
  const hasValue = value !== undefined && value !== "";
  const generatedId = useId();
  const selectId = id ?? generatedId;
  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label} htmlFor={selectId}>
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`${styles.select} ${!hasValue ? styles.placeholder : ""} ${
          disabled ? styles.disabled : ""
        }`}
        value={value ?? ""}
        onChange={onChange}
        disabled={disabled}
      >
        {placeholder && !hasValue && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
