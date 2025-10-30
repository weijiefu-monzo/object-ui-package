import { GenericEventHandler, h } from "preact";
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
export declare const TextField: ({ id, label, placeholder, value, onChange, type, disabled, error, }: TextFieldProps) => h.JSX.Element;
