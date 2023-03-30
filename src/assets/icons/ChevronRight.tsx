import type { FC } from 'react';

import { IconProps } from '../types/iconProps';
import { IconStats } from '../types/iconStats';

export const ChevronRight: FC<IconProps> = ({
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
      d="m376 816-56-56 184-184-184-184 56-56 240 240-240 240Z"
    />
  </svg>
);
