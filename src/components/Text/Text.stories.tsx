import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WithGrayBackground } from '../../hoc/WithGrayBackground';
import { Text, TextStyle } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: { textStyle: { control: 'select' } },
} as ComponentMeta<typeof Text>;

const SingleText: ComponentStory<typeof Text> = (args) => (
  <WithGrayBackground>
    <Text {...args} />
  </WithGrayBackground>
);
const AllTexts: ComponentStory<typeof Text> = (args) => (
  <WithGrayBackground>
    <Text {...args} textStyle={TextStyle.REGULAR} />
    <Text {...args} textStyle={TextStyle.BOLD} />
    <Text {...args} textStyle={TextStyle.ITALIC} />
  </WithGrayBackground>
);

export const Default = SingleText.bind({});
Default.args = {
  children: 'Test text, see more next',
};

export const StyleRegular = SingleText.bind({});
StyleRegular.args = {
  ...Default.args,
  textStyle: TextStyle.REGULAR,
};

export const StyleBold = SingleText.bind({});
StyleBold.args = {
  ...Default.args,
  textStyle: TextStyle.BOLD,
};

export const StyleItalic = SingleText.bind({});
StyleItalic.args = {
  ...Default.args,
  textStyle: TextStyle.ITALIC,
};

export const AllStyles = AllTexts.bind({});
AllStyles.args = {
  ...Default.args,
};
