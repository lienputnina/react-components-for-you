import type { FC } from 'react';
import classNames from 'classnames';

import variables from '../../styles/scss/variables.module.scss';
import './Button.scss';

const { prefix } = variables;

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = ButtonVariant.PRIMARY,
  ...remainingProps
}) => (
  <button
    type="button"
    className={classNames(`${prefix}-button`, `${variant}`)}
    {...remainingProps}
  >
    {children}
  </button>
);
