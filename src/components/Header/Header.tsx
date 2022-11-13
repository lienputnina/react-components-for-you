import type { FC, HTMLProps, ReactNode } from 'react';
import variables from '../../styles/scss/variables.module.scss';

import logo from '../../assets/img/logo-icon.png';

import './Header.scss';

const { prefix } = variables;

export interface HeaderProps extends HTMLProps<HTMLDivElement> {
  logoUrl?: string;
  children?: ReactNode;
}

export const Header: FC<HeaderProps> = ({
  logoUrl,
  children,
  ...otherProps
}) => (
  <header className={`${prefix}-header`} {...otherProps}>
    <a id="logo" href={logoUrl || '/'}>
      <img src={logo} alt="Scrabble logo" />
    </a>
    {children}
  </header>
);
