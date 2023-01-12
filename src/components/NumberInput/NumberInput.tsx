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
  min: number;
  max: number;
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
}) => (
  <div className={classNames(`${prefix}-number-input`)}>
    <label htmlFor={`${name}-${label}`}>{label}</label>
    <input
      type="number"
      name={name}
      value={value}
      min={min}
      max={max}
      aria-describedby={id}
      aria-label={`${name}-${label}`}
      onChange={(event) => onChange(parseInt(event.target.value, 10))}
    />
  </div>
);
