import { Header } from '../../src/components/header'
import { render } from '@testing-library/react';

describe('Header Component', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText('📈 Demographic Transition Chart')).toBeTruthy();
  });
});
