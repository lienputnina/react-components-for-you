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
  onClick,
  variant = ButtonVariant.PRIMARY,
  ...remainingProps
}) => (
  <button
    type="button"
    className={classNames(`${prefix}-btn`, `${variant}`)}
    {...remainingProps}
    onClick={() => console.log('Button clicked')}
  >
    {children}
  </button>
);
