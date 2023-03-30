import type { FC } from 'react';

import { IconProps } from '../types/iconProps';
import { IconStats } from '../types/iconStats';

export const Done: FC<IconProps> = ({
  size = IconStats.SIZE,
  fill = IconStats.FILL,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 96 960 960"
  >
    <path
      fill={fill}
      d="M382 816 154 588l57-57 171 171 367-367 57 57-424 424Z"
    />
  </svg>
);
