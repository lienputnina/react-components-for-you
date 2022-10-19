import classNames from 'classnames';
import { FC } from 'react';

import './MarginExample.scss';

export enum MarginSizes {
  EXTRASMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRALARGE = 'xl',
}

export interface MarginExampleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size: MarginSizes;
}

const getSizeValue = (size: MarginSizes): string => {
  let text = '';
  switch (size) {
    case 'xs':
      text = '0.125rem';
      break;
    case 'sm':
      text = '0.25rem';
      break;
    case 'md':
      text = '0.375rem';
      break;
    case 'lg':
      text = '0.5rem';
      break;
    case 'xl':
      text = '0.625rem';
      break;
    default:
      text = 'no value found';
      break;
  }
  return `Margin size : ${text}`;
};

export const MarginExample: FC<MarginExampleProps> = ({
  size = MarginSizes.SMALL,
}) => (
  <main className="margin-main">
    <div className={classNames('margin', `margin-${size}`)}>
      <div className="margin-text">{getSizeValue(size)}</div>
    </div>
    <div className={classNames('margin', `margin-${size}`)}>
      <div className="margin-text">{getSizeValue(size)}</div>
    </div>
  </main>
);
