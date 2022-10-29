import type { FC } from 'react';
import classNames from 'classnames';

import variables from '../../styles/scss/variables.module.scss';
import './Title.scss';

export enum TitleLevel {
  ONE = 'h1',
  TWO = 'h2',
  THREE = 'h3',
  FOUR = 'h4',
}

export interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  level?: TitleLevel;
}

export const Title: FC<TitleProps> = ({
  level = TitleLevel.ONE,
  children,
  onClick,
  ...remainingProps
}: TitleProps) => {
  switch (level) {
    case TitleLevel.TWO:
      return (
        <h2
          className={classNames(`${variables.rcfu}-title`, 'heading-two')}
          {...remainingProps}
        >
          {children}
        </h2>
      );

    case TitleLevel.THREE:
      return (
        <h3
          className={classNames(`${variables.rcfu}-title`, 'heading-three')}
          {...remainingProps}
        >
          {children}
        </h3>
      );

    case TitleLevel.FOUR:
      return (
        <h4
          className={classNames(`${variables.rcfu}-title`, 'heading-four')}
          {...remainingProps}
        >
          {children}
        </h4>
      );

    case TitleLevel.ONE:
    default:
      return (
        <h1
          className={classNames(`${variables.rcfu}-title`, 'heading-one')}
          {...remainingProps}
        >
          {children}
        </h1>
      );
  }
};
