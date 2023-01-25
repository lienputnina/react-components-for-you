import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WithGrayBackground } from '../../../hoc/WithGrayBackground';
import { MarginExample, MarginSize } from './MarginExample';

export default {
  title: 'Styles/Margins',
  component: MarginExample,
  argTypes: { size: { control: 'select' } },
} as ComponentMeta<typeof MarginExample>;

const Template: ComponentStory<typeof MarginExample> = (args) => (
  <WithGrayBackground>
    <MarginExample {...args} />
  </WithGrayBackground>
);

const TemplateAll: ComponentStory<typeof MarginExample> = (args) => (
  <WithGrayBackground>
    <MarginExample {...args} size={MarginSize.EXTRA_SMALL} />
    <MarginExample {...args} size={MarginSize.SMALL} />
    <MarginExample {...args} size={MarginSize.MEDIUM} />
    <MarginExample {...args} size={MarginSize.LARGE} />
    <MarginExample {...args} size={MarginSize.EXTRA_LARGE} />
  </WithGrayBackground>
);

export const Default = Template.bind({});
Default.args = {
  size: MarginSize.EXTRA_SMALL,
};

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

export const All = TemplateAll.bind({});
All.args = {
  ...Default.args,
};
