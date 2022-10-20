import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonVariant } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Children',
};

export const Rounded = Template.bind({});
Rounded.args = {
  ...Primary.args,
  rounded: true,
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  variant: ButtonVariant.DANGER,
};
