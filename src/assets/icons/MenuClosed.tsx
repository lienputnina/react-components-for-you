import type { FC } from 'react';

import { IconProps } from '../types/iconsProps';
import { IconStats } from '../types/iconsStats';

export const MenuClosed: FC<IconProps> = ({
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
      d="M120 816v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
    />
  </svg>
);
