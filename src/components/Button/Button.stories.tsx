import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonVariant } from './Button';
import { WithGrayBackground } from '../../hoc/WithGrayBackground';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <WithGrayBackground>
    <Button {...args} />
    <Button {...args} />
  </WithGrayBackground>
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  children: 'Children',
  variant: ButtonVariant.PRIMARY,
  onClick: () => console.log('Clicked'),
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  ...Primary.args,
  variant: ButtonVariant.SECONDARY,
  onClick: () => console.log('Clicked'),
};
