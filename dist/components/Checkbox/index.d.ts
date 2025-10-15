import { h } from "preact";
export type CheckboxProps = {
    id?: string;
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
};
export declare const Checkbox: ({ id, label, checked, onChange }: CheckboxProps) => h.JSX.Element;
