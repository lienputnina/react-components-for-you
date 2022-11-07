import type { FC } from 'react';
import classNames from 'classnames';

import variables from '../../styles/scss/variables.module.scss';
import './Text.scss';

const { prefix } = variables;

export enum TextStyle {
  REGULAR = 'regular',
  BOLD = 'bold',
  ITALIC = 'italic',
}
export interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
  textStyle?: TextStyle;
}

export const Text: FC<TextProps> = ({
  textStyle = TextStyle.REGULAR,
  children,
  ...remainingProps
}) => (
  <p
    className={classNames(`${prefix}-text`, `${textStyle}`)}
    {...remainingProps}
  >
    {children}
  </p>
);
