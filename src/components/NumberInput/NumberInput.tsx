import classNames from 'classnames';
import type { FC } from 'react';

import variables from '../../styles/scss/variables.module.scss';
import './NumberInput.scss';

const { prefix } = variables;

export interface NumberInputProps {
  id: string;
  name: string;
  label: string;
  value?: number;
  min?: number;
  max?: number;
  onChange: (newValue: number) => void;
}

export const NumberInput: FC<NumberInputProps> = ({
  id,
  name,
  label,
  value,
  min,
  max,
  onChange,
  ...remainingProps
}) => (
  <div className={classNames(`${prefix}-number-input`)}>
    <label id={`${id}-label`} htmlFor={`${id}-input`}>
      {label}
    </label>
    <input
      id={`${id}-input`}
      type="number"
      name={name}
      value={value}
      min={min}
      max={max}
      aria-labelledby={`${id}-label`}
      onChange={(event) => onChange(parseInt(event.target.value, 10))}
      {...remainingProps}
    />
  </div>
);
