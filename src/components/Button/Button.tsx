import { FC } from 'react';
import './Button.scss';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'danger';
  shape?: 'rounded';
}

export const Button: FC<ButtonProps> = ({ children, variant, shape }) => {
  const classNames = `btn btn-${variant} btn-${shape}`;
  return (
    <button type="button" className={classNames}>
      {children}
    </button>
  );
};

export default Button;
