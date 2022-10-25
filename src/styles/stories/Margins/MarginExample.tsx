import classNames from 'classnames';
import type { FC } from 'react';

import './MarginExample.scss';

export enum MarginSize {
  EXTRA_SMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl',
}

export interface MarginExampleProps {
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

const renderMarginExampleContent = (size: MarginSize) => (
  <div className={classNames('margin', `margin-${size}`)}>
    <p className="margin-text">{`Margin size :${getMarginSizeValue(size)}`}</p>
  </div>
);

export const MarginExample: FC<MarginExampleProps> = ({ size }) => (
  <main className="margin-main">
    <div>{renderMarginExampleContent(size)}</div>
    <div>{renderMarginExampleContent(size)}</div>
  </main>
);
