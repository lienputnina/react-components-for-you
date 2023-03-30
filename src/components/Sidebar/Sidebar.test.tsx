import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KeyCodes, SPACE_SYMBOL } from '../../constants/KeyCodes';

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
    onOpenButtonClick: () => {},
    onCloseButtonClick: () => {},
  };

  const renderSidebar = (props?: Partial<SidebarProps>): HTMLElement => {
    render(<Sidebar {...defaultProps} {...props} />);
    return screen.getByRole('complementary');
  };

  it('renders without crashing', () => {
    expect(renderSidebar()).toBeInTheDocument();
  });

  it('has a title', () => {
    const { title } = defaultProps;

    render(<Sidebar {...defaultProps} isOpen title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('has children', () => {
    const testText = 'Test content';
    const children = <span>{testText}</span>;

    renderSidebar({ children });
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('has footer if provided', () => {
    const testText = 'Test footer';
    const footer = <span>{testText}</span>;
    renderSidebar({ children: footer });
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('has an `open` button when it is closed', () => {
    renderSidebar();
    const openButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.getAttribute('aria-label') === DefaultButtonAriaLabels?.OPEN,
      );
    expect(openButton).toBeInTheDocument();
  });

  it('does not have an `open` button when it is open', () => {
    renderSidebar({ isOpen: true });
    const openButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.getAttribute('aria-label') === DefaultButtonAriaLabels?.OPEN,
      );
    expect(openButton).toBeUndefined();
  });

  it('has a `close` button when it is open', () => {
    renderSidebar({ isOpen: true });
    const closeButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.getAttribute('aria-label') === DefaultButtonAriaLabels?.CLOSE,
      );
    expect(closeButton).toBeInTheDocument();
  });

  it('does not have a `close` button when it is closed', () => {
    renderSidebar({ isOpen: false });
    const closeButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.getAttribute('aria-label') === DefaultButtonAriaLabels?.CLOSE,
      );
    expect(closeButton).toBeUndefined();
  });

  it('is closed by default', () => {
    const sidebarComponent = renderSidebar();
    expect(sidebarComponent).toHaveClass('hidden');
  });

  it('is closed if "isOpen=false" prop is provided', () => {
    const sidebarComponent = renderSidebar({ isOpen: false });
    expect(sidebarComponent).toHaveClass('hidden');
  });

  it('is open if "isOpen=true" prop is provided', () => {
    const sidebarComponent = renderSidebar({ isOpen: true });
    expect(sidebarComponent).not.toHaveClass('hidden');
  });

  it('opens on the left by default', () => {
    const sidebarComponent = renderSidebar();
    expect(sidebarComponent).toHaveClass(SidebarPosition.LEFT);
  });

  it(`opens on the left if position="${SidebarPosition.LEFT}}" prop is provided`, () => {
    const sidebarComponent = renderSidebar({ position: SidebarPosition.LEFT });
    expect(sidebarComponent).toHaveClass(SidebarPosition.LEFT);
  });

  it(`opens on the right if position="${SidebarPosition.RIGHT}" prop is provided`, () => {
    const sidebarComponent = renderSidebar({ position: SidebarPosition.RIGHT });
    expect(sidebarComponent).toHaveClass(SidebarPosition.RIGHT);
  });

  describe('User events', () => {
    const onOpenButtonClickMock = jest.fn();
    const onCloseButtonClickMock = jest.fn();
    const openButtonText = 'open';
    const closeButtonText = 'X';

    it('opens when the "open" button is clicked', async () => {
      const user = userEvent.setup();

      render(
        <Sidebar {...defaultProps} onOpenButtonClick={onOpenButtonClickMock} />,
      );
      expect(onOpenButtonClickMock).not.toHaveBeenCalled();

      await user.click(screen.getByText(openButtonText));
      expect(onOpenButtonClickMock).toHaveBeenCalled();
    });

    it('closes when the "close" button is clicked', async () => {
      const user = userEvent.setup();

      render(
        <Sidebar
          {...defaultProps}
          isOpen
          onCloseButtonClick={onCloseButtonClickMock}
        />,
      );
      expect(onCloseButtonClickMock).not.toHaveBeenCalled();

      await user.click(screen.getByText(closeButtonText));
      expect(onCloseButtonClickMock).toHaveBeenCalled();
    });

    describe('Keyboard events', () => {
      const user = userEvent.setup();
      const keysToToggleWith = [SPACE_SYMBOL, KeyCodes.ENTER];

      keysToToggleWith.forEach((key) => {
        it(`opens when the user tabs on the "open" button and presses ${key}`, async () => {
          render(
            <Sidebar
              {...defaultProps}
              onOpenButtonClick={onOpenButtonClickMock}
            />,
          );
          expect(onOpenButtonClickMock).not.toHaveBeenCalled();

          await user.tab();
          await user.click(screen.getByText(openButtonText));
          await user.keyboard(key);
          expect(onOpenButtonClickMock).toHaveBeenCalled();
        });

        it(`closes when the user tabs on the "close" button and presses ${key}`, async () => {
          render(
            <Sidebar
              {...defaultProps}
              isOpen
              onCloseButtonClick={onCloseButtonClickMock}
            />,
          );
          expect(onCloseButtonClickMock).not.toHaveBeenCalled();

          await user.tab();
          await user.click(screen.getByText(closeButtonText));
          await user.keyboard(key);
          expect(onCloseButtonClickMock).toHaveBeenCalled();
        });
      });
    });
  });
});
