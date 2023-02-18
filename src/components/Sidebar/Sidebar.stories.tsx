import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sidebar } from './Sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Sidebar>;

const SidebarTemplate: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Default = SidebarTemplate.bind({});
Default.args = {
  title: 'Sidebar Title',
  children: 'Children',
};
