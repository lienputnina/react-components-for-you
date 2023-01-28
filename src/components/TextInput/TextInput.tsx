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
  ...remainingProps
}) => (
  <div className={classNames(`${prefix}-text-input`)}>
    <label id={`${id}-label`} htmlFor={`${id}-input`}>
      {label}
    </label>
    <input
      id={`${id}-input`}
      type="text"
      name={name}
      value={value}
      aria-labelledby={`${id}-label`}
      onChange={(event) => onChange(event.target.value)}
      {...remainingProps}
    />
  </div>
);
