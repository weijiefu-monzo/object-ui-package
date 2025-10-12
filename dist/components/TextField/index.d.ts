import { GenericEventHandler, h } from 'preact';
export type TextFieldProps = {
    placeholder?: string;
    value?: string;
    onChange?: GenericEventHandler<HTMLInputElement> | undefined;
};
export declare const TextField: ({ placeholder, value, onChange }: TextFieldProps) => h.JSX.Element;
