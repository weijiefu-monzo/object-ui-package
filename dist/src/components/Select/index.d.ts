import { GenericEventHandler, h } from "preact";
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
export declare const Select: ({ id, label, placeholder, options, value, onChange, disabled, }: SelectProps) => h.JSX.Element;
