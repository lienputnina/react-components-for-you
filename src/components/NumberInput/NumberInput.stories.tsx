import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NumberInput, NumberInputProps } from './NumberInput';
import { WithGrayBackground } from '../../hoc/WithGrayBackground';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  argTypes: {
    onChange: { action: 'changed input value' },
  },
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = ({
  onChange,
  value: initialValue,
  ...remainingProps
}: NumberInputProps) => {
  const [enteredValue, setEnteredValue] = useState(initialValue);

  return (
    <WithGrayBackground>
      <NumberInput
        {...remainingProps}
        onChange={(event) => {
          setEnteredValue(initialValue);
          onChange(event);
        }}
        value={enteredValue}
      />
      <NumberInput
        {...remainingProps}
        onChange={(event) => {
          setEnteredValue(initialValue);
          onChange(event);
        }}
        value={enteredValue}
      />
    </WithGrayBackground>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'Test id',
  name: 'Test name',
  label: 'Test label:',
};
