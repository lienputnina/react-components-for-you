import { useEffect, useState } from 'react';
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

const TemplateInput: ComponentStory<typeof TextInput> = ({
  onChange,
  value: initialValue,
  ...remainingProps
}: TextInputProps) => {
  const [enteredValue, setEnteredValue] = useState(initialValue);

  useEffect(() => {
    setEnteredValue(initialValue);
  }, [initialValue]);

  return (
    <TextInput
      {...remainingProps}
      onChange={(newValue) => {
        setEnteredValue(newValue);
        onChange(newValue);
      }}
      value={enteredValue}
    />
  );
};

const TemplateSingle: ComponentStory<typeof TextInput> = (props) => (
  <WithGrayBackground>
    <TemplateInput {...props} />
  </WithGrayBackground>
);

const TemplateMultiple: ComponentStory<typeof TextInput> = ({
  id,
  label,
  ...props
}: TextInputProps) => (
  <WithGrayBackground>
    <TemplateInput {...props} label={`${label} 1`} id={`${id}_1`} />
    <TemplateInput {...props} label={`${label} 2`} id={`${id}_2`} />
  </WithGrayBackground>
);

export const Default = TemplateSingle.bind({});
Default.args = {
  id: 'test-id',
  name: 'Test name',
  label: 'Test label:',
};

export const WithInitialValue = TemplateSingle.bind({});
WithInitialValue.args = {
  ...Default.args,
  value: 'Yolo swag',
};

export const Multiple = TemplateMultiple.bind({});
Multiple.args = {
  ...Default.args,
  label: 'Test label',
};
