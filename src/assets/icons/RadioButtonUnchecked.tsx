import type { FC } from 'react';

import { IconsProps } from '../types/iconsProps';
import { IconStats } from '../types/iconsStats';

export const RadioButtonUnChecked: FC<IconsProps> = ({
  size = 8,
  fill = IconStats.FILL,
}) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width={`${size}.000000pt`}
    height={`${size}.000000pt`}
    viewBox="0 0 67.000000 67.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,67.000000) scale(0.100000,-0.100000)"
      fill={fill}
      stroke="none"
    >
      <path
        d="M250 637 c-278 -78 -311 -467 -52 -594 76 -38 191 -40 267 -5 66 30
138 103 166 166 32 71 32 181 0 252 -28 64 -101 136 -165 165 -60 26 -155 33
-216 16z m200 -77 c90 -46 139 -127 140 -228 0 -102 -44 -179 -127 -225 -99
-53 -208 -42 -291 29 -65 55 -87 104 -87 194 0 90 22 139 87 194 77 67 190 81
278 36z"
      />
    </g>
  </svg>
);
