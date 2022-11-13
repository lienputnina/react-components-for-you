import { render, screen } from '@testing-library/react';
import { Title } from '../Title/Title';

import { Header } from './Header';

describe('Header', () => {
  it('Renders without crashing ', () => {
    const testId = 'test-text';
    render(<Header data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it('should display the provided child component', () => {
    const titleText = 'Test text';
    const childComponent = <Title>{titleText}</Title>;
    render(<Header>{childComponent}</Header>);
    expect(screen.getByText(titleText)).toBeInTheDocument();
  });
});
