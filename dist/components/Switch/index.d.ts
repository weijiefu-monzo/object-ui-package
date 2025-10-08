import { h } from 'preact';
type SwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
};
export declare const Switch: ({ checked, onChange }: SwitchProps) => h.JSX.Element;
export {};
