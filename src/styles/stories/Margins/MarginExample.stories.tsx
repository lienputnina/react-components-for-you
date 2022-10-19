import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MarginExample, MarginSizes } from './MarginExample';

export default {
  title: 'Margins',
  component: MarginExample,
  argTypes: { size: { control: 'select' } },
} as ComponentMeta<typeof MarginExample>;

const Template: ComponentStory<typeof MarginExample> = (args) => (
  <MarginExample {...args} />
);

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: MarginSizes.EXTRASMALL,
};

export const Small = Template.bind({});
Small.args = {
  size: MarginSizes.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  size: MarginSizes.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  size: MarginSizes.LARGE,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: MarginSizes.EXTRALARGE,
};
