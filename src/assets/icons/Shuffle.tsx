import type { FC } from 'react';

import { IconProps } from '../types/iconsProps';
import { IconStats } from '../types/iconsStats';

export const Shuffle: FC<IconProps> = ({
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
      d="M560 896v-80h104L537 689l57-57 126 126V656h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80V392L216 896Zm151-377L160 312l56-56 207 207-56 56Z"
    />
  </svg>
);
