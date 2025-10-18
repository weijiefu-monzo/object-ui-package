import { h, ComponentChildren } from 'preact';
export type ModalProps = {
    children: ComponentChildren;
    isOpen: boolean;
    onClose: () => void;
    title: string;
    actions: ComponentChildren;
};
export declare const Modal: ({ children, title, isOpen, actions, onClose, }: ModalProps) => h.JSX.Element;
