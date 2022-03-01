import { Chart } from '../../src/components/chart';
import { render } from '@testing-library/react';
import { TEST_POPULATION_DATA } from '../utils/const';

describe('Chart Component', () => {
  test('should render correct prefecture population data', () => {
    const { getByText } = render(
      <Chart populationData={TEST_POPULATION_DATA} />
    );
    expect(getByText('千葉県')).toBeTruthy();
    expect(getByText('2015')).toBeTruthy();
    expect(getByText('2020')).toBeTruthy();
  });

  test('should not render incorrect prefecture population data', () => {
    const { queryByText } = render(
      <Chart populationData={TEST_POPULATION_DATA} />
    );
    expect(queryByText('東京都')).toBeNull();
    expect(queryByText('2014')).toBeNull();
    expect(queryByText('2021')).toBeNull();
  });
});
