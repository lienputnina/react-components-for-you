import classNames from 'classnames';
import { FC } from 'react';

import './PaddingExample.scss';

export enum PaddingSize {
  EXTRA_SMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl',
}

export interface PaddingExampleProps {
  size: PaddingSize;
}

const getSizeValue = (size: PaddingSize) => {
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

export const PaddingExample: FC<PaddingExampleProps> = ({ size }) => (
  <div className={classNames('padding', `padding-${size}`)}>
    <div className="padding-text">{`Padding size :${getSizeValue(size)}`}</div>
  </div>
);