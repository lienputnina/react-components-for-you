import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button, ButtonVariant } from './Button';

describe('Button', () => {
  const children = '';
  it('Renders without crashing ', () => {
    render(<Button>{children}</Button>);
  });

  it('checks if the user clicked the button', () => {
    render(<Button>{children}</Button>);
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  describe('Button variants', () => {
    Object.entries(ButtonVariant).forEach(([variantName, variantValue]) => {
      it(`should have the provided button variant ${variantName}`, () => {
        const { container } = render(
          <Button variant={variantValue}>{children}</Button>,
        );
        expect(
          container.getElementsByClassName(variantValue)[0],
        ).toBeInTheDocument();
      });
    });
  });
});
