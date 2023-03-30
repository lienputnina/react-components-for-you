import { FC } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChevronLeft } from '../icons/ChevronLeft';
import { ChevronRight } from '../icons/ChevronRight';
import { Close } from '../icons/Close';
import { Computer } from '../icons/Computer';
import { DarkMode } from '../icons/DarkMode';
import { Delete } from '../icons/Delete';
import { Done } from '../icons/Done';
import { Edit } from '../icons/Edit';
import { Error } from '../icons/Error';
import { ExpandLess } from '../icons/ExpandLess';
import { ExpandMore } from '../icons/ExpandMore';
import { Folder } from '../icons/Folder';
import { Help } from '../icons/Help';
import { Info } from '../icons/Info';
import { Language } from '../icons/Language';
import { LightMode } from '../icons/LightMode';
import { MenuClosed } from '../icons/MenuClosed';
import { MenuOpen } from '../icons/MenuOpen';
import { NotificationsActive } from '../icons/NotificationsActive';
import { NotificationsImportant } from '../icons/NotificationsImportant';
import { NotificationsInactive } from '../icons/NotificationsInactive';
import { PeopleGroup } from '../icons/PeopleGroup';
import { PersonAdd } from '../icons/PersonAdd';
import { RadioButtonChecked } from '../icons/RadioButtonChecked';
import { RadioButtonUnChecked } from '../icons/RadioButtonUnchecked';
import { Refresh } from '../icons/Refresh';
import { Search } from '../icons/Search';
import { Settings } from '../icons/Settings';
import { Shuffle } from '../icons/Shuffle';
import { StadiaController } from '../icons/StadiaController';
import { VisibilityOff } from '../icons/VisibilityOff';
import { VisibilityOn } from '../icons/VisibilityOn';
import { Warning } from '../icons/Warning';

import { IconProps } from '../types/iconProps';
import './iconsStories.scss';

const IconStoryComponent: FC<IconProps> = (args: IconProps) => (
  <div className="icon-container">
    <ChevronLeft {...args} />
    <ChevronRight {...args} />
    <Close {...args} />
    <Computer {...args} />
    <DarkMode {...args} />
    <Delete {...args} />
    <Done {...args} />
    <Edit {...args} />
    <Error {...args} />
    <ExpandLess {...args} />
    <ExpandMore {...args} />
    <Folder {...args} />
    <Help {...args} />
    <Info {...args} />
    <Language {...args} />
    <LightMode {...args} />
    <MenuClosed {...args} />
    <MenuOpen {...args} />
    <NotificationsActive {...args} />
    <NotificationsImportant {...args} />
    <NotificationsInactive {...args} />
    <PeopleGroup {...args} />
    <PersonAdd {...args} />
    <RadioButtonChecked {...args} size={24} />
    <RadioButtonUnChecked {...args} size={24} />
    <Refresh {...args} />
    <Search {...args} />
    <Settings {...args} />
    <Shuffle {...args} />
    <StadiaController {...args} />
    <VisibilityOff {...args} />
    <VisibilityOn {...args} />
    <Warning {...args} />
  </div>
);

export default {
  title: 'ReactComponentsForYou',
  component: IconStoryComponent,
  argTypes: {
    fill: {
      control: { type: 'color', presetColors: ['red', 'green'] },
      defaultValue: '#000000',
    },
  },
} as ComponentMeta<typeof IconStoryComponent>;

const Template: ComponentStory<typeof IconStoryComponent> = (args) => (
  <IconStoryComponent {...args} />
);

export const Icons = Template.bind({});
Icons.args = {
  size: 32,
};
