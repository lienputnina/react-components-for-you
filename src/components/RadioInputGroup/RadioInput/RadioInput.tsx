import classNames from 'classnames';
import type { FC, KeyboardEventHandler } from 'react';

import {
  RadioButtonChecked,
  RadioButtonUnChecked,
} from '../../../assets/icons';
import { KeyCodes } from '../../../constants';

import variables from '../../../styles/scss/variables.module.scss';
import './RadioInput.scss';

const { prefix } = variables;

export interface RadioInputProps {
  id: string;
  label: string;
  value: string;
  isChecked?: boolean;
  isFocusable?: boolean;
  onChange: (id: string, value: string) => void;
}

export const RadioInput: FC<RadioInputProps> = ({
  id,
  label,
  value,
  isChecked,
  isFocusable,
  onChange,
}: RadioInputProps) => {
  const onKeyDown: KeyboardEventHandler<HTMLLIElement> = (event) => {
    switch (event.code) {
      case KeyCodes.ENTER:
      case KeyCodes.SPACE:
        onChange(id, value);
        break;

      default:
        break;
    }
  };

  return (
    <li
      id={id}
      className={classNames(`${prefix}-radio-input`)}
      tabIndex={isFocusable || isChecked ? 0 : -1}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="radio"
      aria-checked={isChecked}
      onClick={() => onChange(id, value)}
      onKeyDown={onKeyDown}
    >
      {isChecked ? <RadioButtonChecked /> : <RadioButtonUnChecked />}
      {label}
    </li>
  );
};
