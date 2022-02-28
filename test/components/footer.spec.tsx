import { Footer } from '../../src/components/footer'
import { render } from '@testing-library/react';

describe('Footer Component', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Demographic Transition Chart')).toBeTruthy();
  });
});
