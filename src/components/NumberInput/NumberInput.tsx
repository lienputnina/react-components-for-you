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
  onChange: (newValue: number) => void;
}

export const NumberInput: FC<NumberInputProps> = ({
  id,
  name,
  label,
  value,
  onChange,
}) => (
  <div className={classNames(`${prefix}-number-input`)}>
    <label htmlFor="number-input">{label}</label>
    <input
      name={name}
      value={value}
      type="number"
      aria-describedby="number-input"
      aria-label="number-input"
      aria-labelledby={id}
      tabIndex={0}
      onChange={(event) => onChange(parseInt(event.target.value, 10))}
    />
  </div>
);
