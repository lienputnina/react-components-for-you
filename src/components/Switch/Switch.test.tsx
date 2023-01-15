import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Switch } from './Switch';
import { KeyCodes } from '../../constants/KeyCodes';

describe('Switch component', () => {
  const defaultProps = {
    id: 'Test id',
    label: 'Test label',
    value: 'true', // ?
    isOpen: true,
    positiveState: 'On',
    negativeState: 'Off',
    onChange: () => {},
    // some checked/not checked prop
  };

  it('should render without crashing', () => {
    render(<Switch {...defaultProps} />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  describe('User events', () => {
    it('should become focused on the switch container when the user tabs on it', async () => {
      // check this IRL
      const user = userEvent.setup();
      render(<Switch {...defaultProps} />);
      await user.tab();
      expect(screen.getByRole('switch')).toHaveFocus();
    });

    it('should loose focus on the switch container when the user tabs away from it', async () => {
      const user = userEvent.setup();
      render(<Switch {...defaultProps} />);
      await user.tab();
      await user.tab();
      expect(screen.getByRole('switch')).not.toHaveFocus();
    });

    // Do I need to test the state change?
    it('should toggle switch state when the user clicks on it', () => {
      // on - off
    });

    it('should toggle switch state when the user presses ENTER or SPACE', () => {
      // on - off
    });

    it('should call the onChange callback with the current state value when the user clicks on the switch label', async () => {
      const user = userEvent.setup();
      const onChangeMock = jest.fn();

      render(<Switch {...defaultProps} onChange={onChangeMock} />);
      expect(onChangeMock).not.toHaveBeenCalled();

      await user.click(screen.getByText(defaultProps.label));
      expect(onChangeMock).toHaveBeenCalled();
    });

    it('should call the onChange callback with the current state value when the user clicks on the switch button', async () => {
      const user = userEvent.setup();
      const onChangeMock = jest.fn();

      render(<Switch {...defaultProps} onChange={onChangeMock} />);
      expect(onChangeMock).not.toHaveBeenCalled();

      await user.click(screen.getByRole('switch'));
      expect(onChangeMock).toHaveBeenCalled();
    });

    it(`should call the onChange callback with the current state value when the user tabs on the switch container and presses ${KeyCodes.SPACE}`, async () => {
      const user = userEvent.setup();
      const onChangeMock = jest.fn();

      render(<Switch {...defaultProps} onChange={onChangeMock} />);
      expect(onChangeMock).not.toHaveBeenCalled();

      user.tab();

      const switchTestComponent = screen.getByRole('switch');

      // fireEvent.keyDown(switchTestComponent)
      // fireEvent.keyDown(switchTestComponent), {
      //   key: `${KeyCodes.SPACE}`,
      //   code: 'Space'
      // }
      expect(onChangeMock).toHaveBeenCalled();
      // some fireEvent magic with SPACEY space
      // await user.click(screen.getByText(defaultProps.label));
    });
  });
});
