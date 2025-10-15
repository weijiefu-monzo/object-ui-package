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
};
export declare const Select: ({ id, label, placeholder, options, value, onChange, }: SelectProps) => h.JSX.Element;
