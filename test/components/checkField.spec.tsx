import { CheckField } from '../../src/components/checkField';
import { render, fireEvent } from '@testing-library/react';
import { TEST_PREFECTURES_DATA } from '../utils/const';

const onChangeMock = jest.fn();

describe('CheckFiled Component', () => {
  test('should show correct length checkboxes', () => {
    const { getAllByText } = render(
      <CheckField prefectures={TEST_PREFECTURES_DATA} onChange={onChangeMock} />
    );

    expect(getAllByText(/県/).length).toBe(3);
  });

  test('should call onChange when checkbox is clicked', () => {
    const { getByText } = render(
      <CheckField prefectures={TEST_PREFECTURES_DATA} onChange={onChangeMock} />
    );

    fireEvent.click(getByText('千葉県'));
    expect(onChangeMock).toBeCalled();
  });
});
