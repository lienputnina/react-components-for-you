import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from './Switch';
import { WithGrayBackground } from '../../hoc/WithGrayBackground';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    onClick: { action: 'clicked the switch button' },
  },
} as ComponentMeta<typeof Switch>;

const SwitchTemplate: ComponentStory<typeof Switch> = (args) => (
  <WithGrayBackground>
    <Switch {...args} />
    <Switch {...args} />
  </WithGrayBackground>
);

export const Default = SwitchTemplate.bind({});
Default.args = {
  id: 'Test id',
  label: 'Test label',
  // value,
  positiveState: 'On',
  negativeState: 'Off',
};
