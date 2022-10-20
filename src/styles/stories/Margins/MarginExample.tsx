import classNames from 'classnames';
import { FC } from 'react';

import './MarginExample.scss';

export enum MarginSize {
  EXTRASMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRALARGE = 'xl',
}

export interface MarginExampleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size: MarginSize;
}

const getMarginSizeValue = (size: MarginSize): string => {
  switch (size) {
    case 'xs':
      return '0.125rem';
    case 'sm':
      return '0.25rem';
    case 'md':
      return '0.375rem';
    case 'lg':
      return '0.5rem';
    case 'xl':
      return '0.625rem';
    default:
      return 'no value found';
  }
};

export const MarginExample: FC<MarginExampleProps> = ({ size }) => (
  <main className="margin-main">
    <div className={classNames('margin', `margin-${size}`)}>
      <p className="margin-text">{`Margin size :${getMarginSizeValue(
        size,
      )}`}</p>
    </div>
    <div className={classNames('margin', `margin-${size}`)}>
      <p className="margin-text">{`Margin size :${getMarginSizeValue(
        size,
      )}`}</p>
    </div>
  </main>
);
