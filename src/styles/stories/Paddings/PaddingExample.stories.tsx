import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PaddingExample, PaddingSize } from './PaddingExample';

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
  size: PaddingSize.EXTRASMALL,
};

export const Small = Template.bind({});
Small.args = {
  size: PaddingSize.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  size: PaddingSize.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  size: PaddingSize.LARGE,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: PaddingSize.EXTRALARGE,
};
