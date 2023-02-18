import { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch, SwitchProps, SwitchLabelPosition } from './Switch';
import { WithGrayBackground } from '../../hoc/WithGrayBackground';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    onChange: { action: 'toggled switch' },
  },
} as ComponentMeta<typeof Switch>;

const TemplateSwitch: ComponentStory<typeof Switch> = ({
  onChange,
  isChecked: initialIsChecked,
  ...remainingProps
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(!!initialIsChecked);
  }, [initialIsChecked]);

  return (
    <Switch
      {...remainingProps}
      isChecked={isChecked}
      onChange={(newValue) => {
        setIsChecked(newValue);
        onChange(newValue);
      }}
    />
  );
};

const TemplateSingle: ComponentStory<typeof Switch> = (props) => (
  <WithGrayBackground>
    <TemplateSwitch {...props} />
  </WithGrayBackground>
);

const TemplateMultiple: ComponentStory<typeof Switch> = ({
  id,
  label,
  ...props
}: SwitchProps) => (
  <WithGrayBackground>
    <TemplateSwitch {...props} label={`${label} 1`} id={`${id}_1`} />
    <TemplateSwitch {...props} label={`${label} 2`} id={`${id}_2`} />
  </WithGrayBackground>
);

const TemplateAllPositions: ComponentStory<typeof Switch> = ({
  id,
  label,
  ...props
}: SwitchProps) => (
  <WithGrayBackground>
    <TemplateSwitch
      {...props}
      labelPosition={SwitchLabelPosition.TOP}
      label={`${label} 1`}
      id={`${id}_1`}
    />
    <TemplateSwitch
      {...props}
      labelPosition={SwitchLabelPosition.LEFT}
      label={`${label} 2`}
      id={`${id}_2`}
    />
    <TemplateSwitch
      {...props}
      labelPosition={SwitchLabelPosition.RIGHT}
      label={`${label} 3`}
      id={`${id}_3`}
    />
  </WithGrayBackground>
);

export const Default = TemplateSingle.bind({});
Default.args = {
  id: 'switch-id',
  label: 'Test label',
};

export const MultipleSwitches = TemplateMultiple.bind({});
MultipleSwitches.args = {
  ...Default.args,
};

export const WithCustomStateLabels = TemplateSingle.bind({});
WithCustomStateLabels.args = {
  ...Default.args,
  positiveState: 'Switch on',
  negativeState: 'Switch off',
};

export const LabelTop = TemplateSingle.bind({});
LabelTop.args = {
  ...Default.args,
  labelPosition: SwitchLabelPosition.TOP,
};

export const LabelLeft = TemplateSingle.bind({});
LabelLeft.args = {
  ...Default.args,
  labelPosition: SwitchLabelPosition.LEFT,
};

export const LabelRight = TemplateSingle.bind({});
LabelRight.args = {
  ...Default.args,
  labelPosition: SwitchLabelPosition.RIGHT,
};

export const AllLabelPositions = TemplateAllPositions.bind({});
AllLabelPositions.args = {
  ...Default.args,
};

const LongText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus eros libero, id ultricies est ultrices id.Aenean vel vehicula metus, quis ultrices purus. Proin pellentesque tellus tellus, a consectetur justo maximus ac. ';

export const WithLongLabelText = TemplateAllPositions.bind({});
WithLongLabelText.args = {
  ...AllLabelPositions.args,
  label: LongText,
};
