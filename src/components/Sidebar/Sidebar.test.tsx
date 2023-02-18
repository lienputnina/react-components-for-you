import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  Sidebar,
  SidebarPosition,
  SidebarProps,
  DefaultButtonAriaLabels,
} from './Sidebar';

describe('Sidebar', () => {
  const defaultProps: SidebarProps = {
    children: <span>Default test child</span>,
    title: 'Default test title',
  };

  const renderSidebar = (props?: Partial<SidebarProps>): HTMLElement => {
    render(<Sidebar {...defaultProps} {...props} />);
    return screen.getByRole('complementary');
  };

  it('renders without crashing', () => {
    expect(renderSidebar()).toBeInTheDocument();
  });

  it('should have a title', () => {
    const title = 'Test title';
    render(<Sidebar {...defaultProps} title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should have children', () => {
    const testText = 'Test content';
    const children = <span>{testText}</span>;
    renderSidebar({ children });
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('should have footer if provided', () => {
    const testText = 'Test footer';
    const footer = <span>{testText}</span>;
    renderSidebar({ children: footer });
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('should have an open button when it is closed', () => {
    renderSidebar();
    const openButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.getAttribute('aria-label') === DefaultButtonAriaLabels?.OPEN,
      );
    expect(openButton).toBeInTheDocument();
  });

  it('should not have an open button when it is open', () => {
    renderSidebar({ isOpen: true });
    const openButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.getAttribute('aria-label') === DefaultButtonAriaLabels?.OPEN,
      );
    expect(openButton).toBeUndefined();
  });

  it('should have a close button when it is open', () => {
    renderSidebar({ isOpen: true });
    const closeButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.getAttribute('aria-label') === DefaultButtonAriaLabels?.CLOSE,
      );
    expect(closeButton).toBeInTheDocument();
  });

  it('should not have an close button when it is open', () => {
    renderSidebar();
    const closeButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.getAttribute('aria-label') === DefaultButtonAriaLabels?.CLOSE,
      );
    expect(closeButton).toBeUndefined();
  });

  it('should be closed by default', () => {
    const sidebarComponent = renderSidebar();
    expect(sidebarComponent).toHaveClass('hidden');
  });

  it('should be closed if "isOpen=false" prop is provided', () => {
    const sidebarComponent = renderSidebar({ isOpen: false });
    expect(sidebarComponent).toHaveClass('hidden');
  });

  it('should be open if "isOpen=true" prop is provided', () => {
    const sidebarComponent = renderSidebar({ isOpen: true });
    expect(sidebarComponent).not.toHaveClass('hidden');
  });

  it('should open on the left by default', () => {
    const sidebarComponent = renderSidebar();
    expect(sidebarComponent).toHaveClass(SidebarPosition.LEFT);
  });

  it(`should open on the left if position="${SidebarPosition.LEFT}}" prop is provided`, () => {
    const sidebarComponent = renderSidebar({ position: SidebarPosition.LEFT });
    expect(sidebarComponent).toHaveClass(SidebarPosition.LEFT);
  });

  it(`should open on the right if position="${SidebarPosition.RIGHT}" prop is provided`, () => {
    const sidebarComponent = renderSidebar({ position: SidebarPosition.RIGHT });
    expect(sidebarComponent).toHaveClass(SidebarPosition.RIGHT);
  });

  describe('User events', () => {
    it('should open when the open button is clicked', () => {
      const sidebarComponent = renderSidebar();
      expect(sidebarComponent).toHaveClass('hidden');

      // click

      expect(sidebarComponent).not.toHaveClass('hidden');
    });

    it('should close when the close button is clicked', () => {
      const sidebarComponent = renderSidebar();
      expect(sidebarComponent).not.toHaveClass('hidden');

      // click

      expect(sidebarComponent).toHaveClass('hidden');
    });

    it('should open when the open button is keyboard pressed', () => {
      const sidebarComponent = renderSidebar();
      expect(sidebarComponent).toHaveClass('hidden');

      // click

      expect(sidebarComponent).not.toHaveClass('hidden');
    });

    it('should close when the close button is keyboard pressed', () => {
      const sidebarComponent = renderSidebar();
      expect(sidebarComponent).not.toHaveClass('hidden');

      // click

      expect(sidebarComponent).toHaveClass('hidden');
    });
  });
});
