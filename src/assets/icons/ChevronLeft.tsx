import type { FC } from 'react';

import { IconProps } from '../types/iconsProps';
import { IconStats } from '../types/iconsStats';

export const ChevronLeft: FC<IconProps> = ({
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
      d="M560 816 320 576l240-240 56 56-184 184 184 184-56 56Z"
    />
  </svg>
);
