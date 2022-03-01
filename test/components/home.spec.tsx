import { Home } from '../../src/components/home';
import { render } from '@testing-library/react';
import { API } from '../../src/common/api';
import { TEST_PREFECTURES_DATA } from '../utils/const';

const mockGetPrefectures = jest
  .spyOn(API, 'getPrefectures')
  .mockResolvedValue({ data: { result: TEST_PREFECTURES_DATA } });

// const mockGetPopulations = jest.spyOn(API, 'getPopulations').mockResolvedValue({
//   data: { result: { data: [{ data: TEST_POPULATION_DATA[0].data }] } }
// });

describe('Home Component', () => {
  test('should render correctly', () => {
    render(<Home />);
    expect(mockGetPrefectures).toBeCalled();
  });
});
