import type { FC } from 'react';

import { IconProps, DefaultPropValues } from '../types';

export const PersonAdd: FC<IconProps> = ({
  size = DefaultPropValues.SIZE,
  fill = DefaultPropValues.FILL,
}) => (
  <div style={{ width: size, height: size }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
      <path
        fill={fill}
        d="M720 656V536H600v-80h120V336h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40 896V784q0-34 17.5-62.5T104 678q62-31 126-46.5T360 616q66 0 130 15.5T616 678q29 15 46.5 43.5T680 784v112H40Zm80-80h480v-32q0-11-5.5-20T580 750q-54-27-109-40.5T360 696q-56 0-111 13.5T140 750q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440 416q0-33-23.5-56.5T360 336q-33 0-56.5 23.5T280 416q0 33 23.5 56.5T360 496Zm0-80Zm0 400Z"
      />
    </svg>
  </div>
);
