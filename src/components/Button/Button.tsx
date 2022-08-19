import classNames from 'classnames';
import { FC } from 'react';

import './Button.scss';

export enum ButtonVariant {
  PRIMARY = 'primary',
  DANGER = 'danger',
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  rounded?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = ButtonVariant.PRIMARY,
  rounded,
  ...remainingProps
}) => (
  <button
    type="button"
    className={classNames('btn', `btn-${variant}`, {
      rounded,
    })}
    {...remainingProps}
  >
    {children}
  </button>
);
