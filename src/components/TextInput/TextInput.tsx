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
    <label htmlFor="text-input">{label}</label>
    <input
      name={name}
      value={value}
      type="text"
      aria-describedby="text-input"
      aria-label="text-input"
      aria-labelledby={id}
      tabIndex={0}
      onChange={(event) => onChange(event.target.value)}
    />
  </div>
);
