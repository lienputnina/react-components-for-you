import { render, screen } from '@testing-library/react';
import { Text, TextStyle } from './Text';

describe('Text', () => {
  it('should render without crashing', () => {
    const testId = 'test-text';
    render(<Text data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it('should display the provided text', () => {
    const providedText = 'Test text';
    render(<Text>{providedText}</Text>);
    expect(screen.getByText(providedText)).toBeInTheDocument();
  });

  describe('Text styles', () => {
    Object.entries(TextStyle).forEach(([styleName, styleValue]) => {
      it(`should match the provided text style ${styleName}`, () => {
        const { container } = render(<Text textStyle={styleValue} />);
        expect(
          container.getElementsByClassName(styleValue)[0],
        ).toBeInTheDocument();
      });
    });
  });
});
