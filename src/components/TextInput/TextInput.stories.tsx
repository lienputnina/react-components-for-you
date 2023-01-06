import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput';
import { WithGrayBackground } from '../../hoc/WithGrayBackground';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    onChange: { action: 'changed text input value' },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = ({
  onChange,
  value: initialValue,
  ...remainingProps
}: TextInputProps) => {
  const [enteredValue, setEnteredValue] = useState(initialValue);

  return (
    <WithGrayBackground>
      <TextInput
        {...remainingProps}
        onChange={(event) => {
          setEnteredValue(initialValue);
          onChange(event);
        }}
        value={enteredValue}
      />
      <TextInput
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
