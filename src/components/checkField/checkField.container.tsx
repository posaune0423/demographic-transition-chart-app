import { FunctionComponent } from 'react';
import { CheckField as CheckFieldComponent } from './checkField';

type Props = {
  prefectures: { prefCode: number; prefName: string }[];
  onChange: (name: string, prefName: number, check: boolean) => void;
};

export const CheckField: FunctionComponent<Props> = ({
  prefectures,
  onChange
}) => {
  return <CheckFieldComponent prefectures={prefectures} onChange={onChange} />;
};
