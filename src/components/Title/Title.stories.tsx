import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WithGrayBackground } from '../../hoc/WithGrayBackground';
import { Title, TitleLevel } from './Title';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: { level: { control: 'select' } },
} as ComponentMeta<typeof Title>;

const SingleTitle: ComponentStory<typeof Title> = (args) => (
  <WithGrayBackground>
    <Title {...args} />
  </WithGrayBackground>
);
const AllTitles: ComponentStory<typeof Title> = (args) => (
  <WithGrayBackground>
    <Title {...args} level={TitleLevel.ONE} />
    <Title {...args} level={TitleLevel.TWO} />
    <Title {...args} level={TitleLevel.THREE} />
    <Title {...args} level={TitleLevel.FOUR} />
  </WithGrayBackground>
);

export const Default = SingleTitle.bind({});
Default.args = {
  children: 'Title text',
};

export const LevelOne = SingleTitle.bind({});
LevelOne.args = {
  ...Default.args,
  level: TitleLevel.ONE,
};

export const LevelTwo = SingleTitle.bind({});
LevelTwo.args = {
  ...Default.args,
  level: TitleLevel.TWO,
};

export const LevelThree = SingleTitle.bind({});
LevelThree.args = {
  ...Default.args,
  level: TitleLevel.THREE,
};

export const LevelFour = SingleTitle.bind({});
LevelFour.args = {
  ...Default.args,
  level: TitleLevel.FOUR,
};

export const AllLevels = AllTitles.bind({});
AllLevels.args = {
  ...Default.args,
};
