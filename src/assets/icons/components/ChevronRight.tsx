import type { FC } from 'react';

import { IconProps, DefaultPRopValues } from '../types';

export const ChevronRight: FC<IconProps> = ({
  size = DefaultPRopValues.SIZE,
  fill = DefaultPRopValues.FILL,
}) => (
  <div style={{ width: size, height: size }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
      <path
        fill={fill}
        d="m376 816-56-56 184-184-184-184 56-56 240 240-240 240Z"
      />
    </svg>
  </div>
);
