import { FC } from 'react';
import './Button.scss';
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: 'primary' | 'danger';
    shape?: 'rounded';
}
export declare const Button: FC<ButtonProps>;
export default Button;
