import { GenericEventHandler, h } from "preact";
export type TextFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: GenericEventHandler<HTMLInputElement> | undefined;
};
export declare const TextField: ({ id, label, placeholder, value, onChange, }: TextFieldProps) => h.JSX.Element;
