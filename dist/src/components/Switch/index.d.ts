import { h } from "preact";
export type SwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
};
export declare const Switch: ({ checked, onChange, disabled }: SwitchProps) => h.JSX.Element;
