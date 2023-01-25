import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WithGrayBackground } from '../../../hoc/WithGrayBackground';
import { PaddingExample, PaddingSize } from './PaddingExample';

export default {
  title: 'Styles/Paddings',
  component: PaddingExample,
  argTypes: { size: { control: 'select' } },
} as ComponentMeta<typeof PaddingExample>;

const Template: ComponentStory<typeof PaddingExample> = (args) => (
  <WithGrayBackground>
    <PaddingExample {...args} />
  </WithGrayBackground>
);

const TemplateAll: ComponentStory<typeof PaddingExample> = (args) => (
  <WithGrayBackground>
    <PaddingExample {...args} size={PaddingSize.EXTRA_SMALL} />
    <PaddingExample {...args} size={PaddingSize.SMALL} />
    <PaddingExample {...args} size={PaddingSize.MEDIUM} />
    <PaddingExample {...args} size={PaddingSize.LARGE} />
    <PaddingExample {...args} size={PaddingSize.EXTRA_LARGE} />
  </WithGrayBackground>
);

export const Default = Template.bind({});
Default.args = {
  size: PaddingSize.EXTRA_SMALL,
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: PaddingSize.EXTRA_SMALL,
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
  size: PaddingSize.EXTRA_LARGE,
};

export const All = TemplateAll.bind({});
All.args = {
  ...Default.args,
};
