import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PaddingExample, PaddingSizes } from './PaddingExample';

export default {
  title: 'Paddings',
  component: PaddingExample,
  argTypes: { size: { control: 'select' } },
} as ComponentMeta<typeof PaddingExample>;

const Template: ComponentStory<typeof PaddingExample> = (args) => (
  <PaddingExample {...args} />
);

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: PaddingSizes.EXTRASMALL,
};

export const Small = Template.bind({});
Small.args = {
  size: PaddingSizes.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  size: PaddingSizes.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  size: PaddingSizes.LARGE,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: PaddingSizes.EXTRALARGE,
};
