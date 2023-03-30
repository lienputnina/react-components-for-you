import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { Title, TitleLevel } from '../Title/Title';
import { Button, ButtonVariant } from '../Button/Button';

import variables from '../../styles/scss/variables.module.scss';
import './Sidebar.scss';

const { prefix } = variables;

export enum SidebarPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum DefaultButtonAriaLabels {
  OPEN = 'Open sidebar',
  CLOSE = 'Close sidebar',
}

export interface SidebarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  title: string;
  footer?: ReactNode;
  isOpen?: boolean;
  position?: SidebarPosition;
  onOpenButtonClick: () => void;
  onCloseButtonClick: () => void;
}

export const Sidebar: FC<SidebarProps> = ({
  title,
  children,
  footer,
  isOpen,
  position = SidebarPosition.LEFT,
  onOpenButtonClick,
  onCloseButtonClick,
  className,
  ...remainingProps
}) => (
  <aside
    className={classNames(`${prefix}-sidebar`, position, className, {
      hidden: !isOpen,
    })}
    {...remainingProps}
  >
    {!isOpen && (
      <Button
        className="sidebar-open-button"
        variant={ButtonVariant.SECONDARY}
        aria-label={DefaultButtonAriaLabels.OPEN}
        onClick={() => onOpenButtonClick()}
      >
        open
      </Button>
    )}
    <div>
      {isOpen && (
        <div className="sidebar-header">
          <Button
            className="sidebar-close-button"
            variant={ButtonVariant.SECONDARY}
            aria-label={DefaultButtonAriaLabels.CLOSE}
            onClick={() => onCloseButtonClick()}
          >
            X
          </Button>
          <div>
            <Title level={TitleLevel.TWO}>{title}</Title>
          </div>
        </div>
      )}
      <div className="sidebar-content">{children}</div>
      {footer && <div className="sidebar-footer">{footer}</div>}
    </div>
  </aside>
);
