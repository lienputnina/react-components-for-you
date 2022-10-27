import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MarginExample, MarginSize } from './MarginExample';

export default {
  title: 'Styles/Margins',
  component: MarginExample,
  argTypes: { size: { control: 'select' } },
} as ComponentMeta<typeof MarginExample>;

const Template: ComponentStory<typeof MarginExample> = (args) => (
  <MarginExample {...args} />
);

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: MarginSize.EXTRA_SMALL,
};

export const Small = Template.bind({});
Small.args = {
  size: MarginSize.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  size: MarginSize.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  size: MarginSize.LARGE,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: MarginSize.EXTRA_LARGE,
};
