import classNames from 'classnames';
import type { FC } from 'react';

import {
  RadioButtonChecked,
  RadioButtonUnChecked,
} from '../../../assets/icons';

import variables from '../../../styles/scss/variables.module.scss';
import './RadioInput.scss';

const { prefix } = variables;

export type RadioInputOnChange = (id: string, value: string) => void;

export interface RadioInputProps
  extends Omit<React.HTMLProps<HTMLLIElement>, 'onChange'> {
  groupId: string;
  optionId: string;
  label: string;
  value: string;
  isChecked?: boolean;
  onChange: RadioInputOnChange;
}

export const RadioInput: FC<RadioInputProps> = ({
  groupId,
  optionId,
  label,
  value,
  isChecked,
  onChange,
  className,
  ...remainingProps
}: RadioInputProps) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <li
    id={`${groupId}_${optionId}`}
    className={classNames(`${prefix}-radio-input`, className)}
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
    role="radio"
    aria-checked={isChecked}
    onClick={() => onChange(optionId, value)}
    {...remainingProps}
  >
    {isChecked ? <RadioButtonChecked /> : <RadioButtonUnChecked />}
    {label}
  </li>
);
