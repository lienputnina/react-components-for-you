import { FC, ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';

import { Title, TitleLevel } from '../Title/Title';

import variables from '../../styles/scss/variables.module.scss';
import './Sidebar.scss';
import { Button, ButtonVariant } from '../Button/Button';

const { prefix } = variables;

export enum SidebarPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum DefaultButtonAriaLabels {
  OPEN = 'Open sidebar',
  CLOSE = 'Close sidebar',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  footer?: ReactNode;
  isOpen?: boolean;
  position?: SidebarPosition;
}

export const Sidebar: FC<SidebarProps> = ({
  title,
  children,
  footer,
  isOpen: initialIsOpen,
  position = SidebarPosition.LEFT,
  className,
  ...remainingProps
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  useEffect(() => {
    setIsOpen(initialIsOpen);
  }, [initialIsOpen]);

  return (
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
        >
          open
        </Button>
      )}
      <div>
        <div className="sidebar-header">
          <Button
            className="sidebar-close-button"
            variant={ButtonVariant.SECONDARY}
            aria-label={DefaultButtonAriaLabels.CLOSE}
          >
            X
          </Button>
          <div>
            <Title level={TitleLevel.TWO}>{title}</Title>
          </div>
        </div>
        <div className="sidebar-content">{children}</div>
        {footer && <div className="sidebar-footer">{footer}</div>}
      </div>
    </aside>
  );
};
