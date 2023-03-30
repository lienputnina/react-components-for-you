import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Sidebar, SidebarProps } from './Sidebar';

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

const SidebarTemplate: ComponentStory<typeof Sidebar> = ({
  // onChange,
  onOpenButtonClick,
  onCloseButtonClick,
  isOpen: initialIsOpen,
  ...remainingProps
}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!initialIsOpen);
  }, [initialIsOpen]);

  return (
    <Sidebar
      isOpen={isOpen}
      onOpenButtonClick={() => {
        setIsOpen(!isOpen);
        onOpenButtonClick();
      }}
      onCloseButtonClick={() => {
        setIsOpen(!isOpen);
        onCloseButtonClick();
      }}
      {...remainingProps}
    />
  );
};

export const Default = SidebarTemplate.bind({});
Default.args = {
  title: 'Sidebar Title',
  children: 'Children',
};
