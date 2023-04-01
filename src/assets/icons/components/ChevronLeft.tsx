import type { FC } from 'react';

import { IconProps, DefaultPRopValues } from '../types';

export const ChevronLeft: FC<IconProps> = ({
  size = DefaultPRopValues.SIZE,
  fill = DefaultPRopValues.FILL,
}) => (
  <div style={{ width: size, height: size }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
      <path
        fill={fill}
        d="M560 816 320 576l240-240 56 56-184 184 184 184-56 56Z"
      />
    </svg>
  </div>
);
