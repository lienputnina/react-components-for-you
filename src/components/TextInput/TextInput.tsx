import classNames from 'classnames';
import type { FC } from 'react';

import variables from '../../styles/scss/variables.module.scss';
import './TextInput.scss';

const { prefix } = variables;

export interface TextInputProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  onChange: (newValue: string) => void;
}

export const TextInput: FC<TextInputProps> = ({
  id,
  name,
  label,
  value,
  onChange,
}) => (
  <div className={classNames(`${prefix}-text-input`)}>
    <label htmlFor={`${name}-${label}`}>{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      aria-describedby={id} // check, how to solve this
      aria-label={`${name}-${label}`}
      onChange={(event) => onChange(event.target.value)}
    />
  </div>
);
