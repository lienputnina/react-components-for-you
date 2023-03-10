import { FC } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Refresh } from '../icons/Refresh';
import { Search } from '../icons/Search';
import { Settings } from '../icons/Settings';
import { Done } from '../icons/Done';
import { VisibilityOn } from '../icons/VisibilityOn';
import { VisibilityOff } from '../icons/VisibilityOff';
import { Folder } from '../icons/Folder';
import { Shuffle } from '../icons/Shuffle';
import { StadiaController } from '../icons/StadiaController';
import { Computer } from '../icons/Computer';

import { Error } from '../icons/Error';
import { Warning } from '../icons/Warning';
import { NotificationsInactive } from '../icons/NotificationsInactive';
import { NotificationsActive } from '../icons/NotificationsActive';
import { NotificationsImportant } from '../icons/NotificationsImportant';
import { Info } from '../icons/Info';
import { Help } from '../icons/Help';

import { MenuClosed } from '../icons/MenuClosed';
import { MenuOpen } from '../icons/MenuOpen';
import { Close } from '../icons/Close';
import { Delete } from '../icons/Delete';
import { ChevronLeft } from '../icons/ChevronLeft';
import { ChevronRight } from '../icons/ChevronRight';
import { ExpandMore } from '../icons/ExpandMore';
import { ExpandLess } from '../icons/ExpandLess';

import { PeopleGroup } from '../icons/PeopleGroup';
import { PersonAdd } from '../icons/PersonAdd';
import { Language } from '../icons/Language';

import { RadioButtonUnChecked } from '../icons/RadioButtonUnchecked';
import { RadioButtonChecked } from '../icons/RadioButtonChecked';
import { LightMode } from '../icons/LightMode';
import { DarkMode } from '../icons/DarkMode';

import { Title, TitleLevel } from '../../components/Title/Title';
import { IconsProps } from '../types/iconsProps';

import './iconsStories.scss';

const IconStoryComponent: FC<IconsProps> = (args: IconsProps) => (
  <div className="icons-container">
    <div className="action-icons-container">
      <Title
        level={TitleLevel.TWO}
        style={{ fontSize: '18px', lineHeight: '18px', margin: '4px' }}
      >
        Action icons
      </Title>
      <div
        className="action-icons-components"
        style={{
          display: 'flex',
        }}
      >
        <Refresh {...args} />
        <Search {...args} />
        <Settings {...args} />
        <Done {...args} />
        <VisibilityOn {...args} />
        <VisibilityOff {...args} />
        <Folder {...args} />
        <Shuffle {...args} />
        <StadiaController {...args} />
        <Computer {...args} />
      </div>
    </div>
    <div className="alert-icons-container">
      <Title
        level={TitleLevel.TWO}
        style={{ fontSize: '18px', lineHeight: '18px', margin: '0' }}
      >
        Alert icons
      </Title>
      <div
        className="action-icons-components"
        style={{
          display: 'flex',
          marginTop: '1',
          marginBottom: '2',
        }}
      >
        <Error {...args} />
        <Warning {...args} />
        <NotificationsInactive {...args} />
        <NotificationsActive {...args} />
        <NotificationsImportant {...args} />
        <Info {...args} />
        <Help {...args} />
      </div>
    </div>
    <div className="navigation-icons-container">
      <Title
        level={TitleLevel.TWO}
        style={{ fontSize: '18px', lineHeight: '18px', margin: '0' }}
      >
        Navigation icons
      </Title>
      <div
        className="navigation-icons-components"
        style={{
          display: 'flex',
          marginTop: '1',
          marginBottom: '2',
        }}
      >
        <MenuClosed {...args} />
        <MenuOpen {...args} />
        <Close {...args} />
        <Delete {...args} />
        <ChevronLeft {...args} />
        <ChevronRight {...args} />
        <ExpandMore {...args} />
        <ExpandLess {...args} />
      </div>
    </div>
    <div className="social-icons-container">
      <Title
        level={TitleLevel.TWO}
        style={{ fontSize: '18px', lineHeight: '18px', margin: '0' }}
      >
        Social icons
      </Title>

      <div
        className="social-icons-components"
        style={{
          display: 'flex',
          marginTop: '1',
          marginBottom: '2',
        }}
      >
        <PeopleGroup {...args} />
        <PersonAdd {...args} />
        <Language {...args} />
      </div>
    </div>
    <div className="toggle-icons">
      <Title
        level={TitleLevel.TWO}
        style={{ fontSize: '18px', lineHeight: '18px', margin: '0' }}
      >
        Toggle icons
      </Title>
      <div
        className="toggle-icons-components"
        style={{
          display: 'flex',
          marginTop: '1',
          marginBottom: '2',
        }}
      >
        <RadioButtonUnChecked size={18} {...args} />
        <RadioButtonChecked size={18} {...args} />
        <LightMode {...args} />
        <DarkMode {...args} />
      </div>
    </div>
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
