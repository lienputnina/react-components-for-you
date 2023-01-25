import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WithGrayBackground } from '../../../hoc/WithGrayBackground';
import { ElevationExample, ElevationLevel } from './ElevationExample';

export default {
  title: 'Styles/Elevations',
  component: ElevationExample,
  argTypes: { level: { control: 'select' } },
} as ComponentMeta<typeof ElevationExample>;

const TemplateSingle: ComponentStory<typeof ElevationExample> = (args) => (
  <WithGrayBackground>
    <ElevationExample {...args} />
  </WithGrayBackground>
);

const TemplateAll: ComponentStory<typeof ElevationExample> = (args) => (
  <WithGrayBackground>
    <ElevationExample {...args} level={ElevationLevel.ONE} />
    <ElevationExample {...args} level={ElevationLevel.TWO} />
    <ElevationExample {...args} level={ElevationLevel.THREE} />
    <ElevationExample {...args} level={ElevationLevel.FOUR} />
  </WithGrayBackground>
);

export const Default = TemplateSingle.bind({});
Default.args = {
  level: ElevationLevel.ONE,
};

export const LevelOne = TemplateSingle.bind({});
LevelOne.args = {
  level: ElevationLevel.ONE,
};

export const LevelTwo = TemplateSingle.bind({});
LevelTwo.args = {
  level: ElevationLevel.TWO,
};

export const LevelThree = TemplateSingle.bind({});
LevelThree.args = {
  level: ElevationLevel.THREE,
};

export const LevelFour = TemplateSingle.bind({});
LevelFour.args = {
  level: ElevationLevel.FOUR,
};

export const All = TemplateAll.bind({});
All.args = {
  ...Default.args,
};
