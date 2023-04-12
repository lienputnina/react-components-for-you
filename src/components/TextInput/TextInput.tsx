import classNames from 'classnames';
import type { FC } from 'react';

import variables from '../../styles/scss/variables.module.scss';
import './TextInput.scss';

const { prefix } = variables;

export interface TextInputProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
  id: string;
  name?: string;
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
  className,
  ...remainingProps
}) => (
  <div
    className={classNames(`${prefix}-text-input`, className)}
    {...remainingProps}
  >
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
    />
  </div>
);
