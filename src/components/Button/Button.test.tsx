import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const children = '';
  it('Renders without crashing ', () => {
    render(<Button variant="primary">{children}</Button>);
  });
});
