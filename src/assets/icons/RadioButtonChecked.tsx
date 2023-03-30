import type { FC } from 'react';

import { IconProps } from '../types/iconProps';
import { IconStats } from '../types/iconStats';

export const RadioButtonChecked: FC<IconProps> = ({
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
-216 16z m212 -84 c84 -46 128 -123 128 -223 0 -100 -45 -178 -127 -223 -99
-53 -208 -42 -291 29 -65 55 -87 104 -87 194 0 90 22 139 87 194 82 70 193 82
290 29z"
      />
      <path
        d="M277 496 c-50 -18 -76 -42 -98 -91 -25 -54 -24 -102 4 -155 82 -164
329 -104 329 80 0 75 -40 134 -114 165 -45 18 -71 18 -121 1z"
      />
    </g>
  </svg>
);
