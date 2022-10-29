import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WithGrayBackground } from '../../../hoc/WithGrayBackground';
import { TypographyExample } from './TypographyExample';

export default {
  title: 'Styles/Typography',
  component: TypographyExample,
} as ComponentMeta<typeof TypographyExample>;

const Template: ComponentStory<typeof TypographyExample> = (args) => (
  <WithGrayBackground>
    <TypographyExample {...args} />
  </WithGrayBackground>
);

export const Typography = Template.bind({});
Typography.args = {};
