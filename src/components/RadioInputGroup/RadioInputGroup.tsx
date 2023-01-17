import type { FC, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { RadioInput, RadioInputOnChange } from './RadioInput/RadioInput';

import variables from '../../styles/scss/variables.module.scss';
import './RadioInputGroup.scss';
import { KeyCodes } from '../../constants';

const { prefix } = variables;

export type Option = {
  id: string;
  label: string;
  value: string;
};

export interface RadioInputGroupProps {
  id: string;
  label: string;
  options: Option[];
  checkedOptionId?: string;
  onChange: RadioInputOnChange;
}

export const onKeyDown = (
  event: KeyboardEvent<HTMLUListElement>,
  options: Option[],
  onChange: RadioInputOnChange,
  checkedOptionId?: string,
) => {
  const optionsLength = options.length;
  const checkedOptionIndex = options.findIndex(
    (option) => option.id === checkedOptionId,
  );
  const handledCheckedOptionIndex =
    checkedOptionIndex === -1 ? 0 : checkedOptionIndex;

  const isLastOption = handledCheckedOptionIndex === optionsLength - 1;
  const isFirstOption = handledCheckedOptionIndex === 0;

  switch (event.code) {
    case KeyCodes.ARROW_RIGHT:
    case KeyCodes.ARROW_DOWN:
      if (isLastOption) {
        const nextOption = options[0];
        if (nextOption) onChange(nextOption.id, nextOption.value);
      } else {
        const nextOption = options[handledCheckedOptionIndex + 1];
        if (nextOption) onChange(nextOption.id, nextOption.value);
      }
      break;

    case KeyCodes.ARROW_LEFT:
    case KeyCodes.ARROW_UP:
      if (isFirstOption) {
        const nextOption = options[optionsLength - 1];
        if (nextOption) onChange(nextOption.id, nextOption.value);
      } else {
        const nextOption = options[handledCheckedOptionIndex - 1];
        if (nextOption) onChange(nextOption.id, nextOption.value);
      }
      break;

    default:
      break;
  }
};

export const RadioInputGroup: FC<RadioInputGroupProps> = ({
  id,
  label,
  options,
  checkedOptionId,
  onChange,
  ...remainingProps
}) => (
  <div id={id} className={classNames(`${prefix}-radio-input-group`)}>
    <div id={id}>{label}</div>
    <ul
      role="radiogroup"
      aria-labelledby={id}
      aria-activedescendant={
        options.find((option) => option.id === checkedOptionId)
          ? checkedOptionId
          : undefined
      }
      tabIndex={0}
      onKeyDown={(event) =>
        onKeyDown(event, options, onChange, checkedOptionId)
      }
      {...remainingProps}
    >
      {options.map((option) => (
        <RadioInput
          key={option.id}
          id={option.id}
          label={option.label}
          value={option.value}
          onChange={onChange}
          isChecked={option.id === checkedOptionId}
        />
      ))}
    </ul>
  </div>
);
