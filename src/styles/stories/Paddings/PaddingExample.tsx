import classNames from 'classnames';
import { FC } from 'react';

import './PaddingExample.scss';

export enum PaddingSizes {
  EXTRASMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRALARGE = 'xl',
}

export interface PaddingExampleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size: PaddingSizes;
}

const getSizeValue = (size: PaddingSizes): string => {
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
  return `Padding size : ${text}`;
};

export const PaddingExample: FC<PaddingExampleProps> = ({
  size = PaddingSizes.SMALL,
}) => (
  <div className={classNames('padding', `padding-${size}`)}>
    <div className="padding-text">{getSizeValue(size)}</div>
  </div>
);
