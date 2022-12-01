import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { KeyCodes } from '../../../constants';
import { RadioInput } from './RadioInput';

describe('RadioInput', () => {
  const defaultProps = {
    id: 'Test id',
    label: 'Test label',
    value: 'Test value',
    name: 'Test name',
    onChange: () => {},
  };

  it('should render without crashing', () => {
    render(<RadioInput {...defaultProps} />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('should display the provided label', () => {
    const label = 'Test label';
    render(<RadioInput {...defaultProps} label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should not be checked if isChecked is not provided', () => {
    render(<RadioInput {...defaultProps} />);
    expect(screen.getByRole('radio')).not.toBeChecked();
  });

  it('should be checked if isChecked is provided', () => {
    render(<RadioInput {...defaultProps} isChecked />);
    expect(screen.getByRole('radio')).toBeChecked();
  });

  describe('User events', () => {
    it('should call the provided onChange callback on user click', async () => {
      const user = userEvent.setup();
      const onChangeMock = jest.fn();
      render(<RadioInput {...defaultProps} onChange={onChangeMock} />);
      expect(onChangeMock).not.toHaveBeenCalled();

      await user.click(screen.getByRole('radio'));
      expect(onChangeMock).toHaveBeenCalled();
    });

    it('should return the provided id and value from the provided onChange callback on user click', async () => {
      const user = userEvent.setup();
      const id = 'test id';
      const value = 'Test Value';
      const onChangeMock = jest.fn();
      render(
        <RadioInput
          {...defaultProps}
          id={id}
          value={value}
          onChange={onChangeMock}
        />,
      );

      await user.click(screen.getByRole('radio'));
      expect(onChangeMock).toHaveBeenCalledWith(id, value);
    });

    it('should not be focusable if it is not checked and isFocusable is not provided', async () => {
      const user = userEvent.setup();
      render(<RadioInput {...defaultProps} />);
      expect(screen.getByRole('radio')).not.toHaveFocus();

      user.tab();
      expect(screen.getByRole('radio')).not.toHaveFocus();
    });

    it('should be focusable if it is checked', async () => {
      const user = userEvent.setup();
      render(<RadioInput {...defaultProps} isChecked />);
      expect(screen.getByRole('radio')).not.toHaveFocus();

      user.tab();
      expect(screen.getByRole('radio')).toHaveFocus();
    });

    it('should be focusable if isFocusable is provided', async () => {
      const user = userEvent.setup();
      render(<RadioInput {...defaultProps} isFocusable />);
      expect(screen.getByRole('radio')).not.toHaveFocus();

      user.tab();
      expect(screen.getByRole('radio')).toHaveFocus();
    });

    it(`should call the provided onChange callback when user clicks ${KeyCodes.ENTER} key`, async () => {
      const user = userEvent.setup();
      const onChangeMock = jest.fn();
      render(
        <RadioInput {...defaultProps} onChange={onChangeMock} isFocusable />,
      );
      expect(onChangeMock).not.toHaveBeenCalled();

      await user.tab();
      await user.keyboard(`{${KeyCodes.ENTER}}`);
      expect(onChangeMock).toHaveBeenCalled();
    });

    it(`should call the provided onChange callback when user clicks ${KeyCodes.SPACE} key`, () => {
      const onChangeMock = jest.fn();
      render(
        <RadioInput {...defaultProps} onChange={onChangeMock} isFocusable />,
      );
      expect(onChangeMock).not.toHaveBeenCalled();

      fireEvent.keyDown(screen.getByRole('radio'), {
        key: KeyCodes.SPACE,
        code: KeyCodes.SPACE,
      });
      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});
