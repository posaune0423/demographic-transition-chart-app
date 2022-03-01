import { FunctionComponent } from 'react';
import { useStyles } from './home.style';
import { CheckField } from 'components/checkField';
import { Chart } from 'components/chart';

type Props = {
  prefectures: { prefCode: number; prefName: string }[] | null;
  population: {
    prefName: string;
    data: { year: number; value: number }[];
  }[];
  onChange: (name: string, prefName: number, check: boolean) => void;
};

export const Home: FunctionComponent<Props> = ({
  prefectures,
  population,
  onChange
}) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <h2 className={classes.title}>都道府県</h2>
      {prefectures && (
        <CheckField prefectures={prefectures} onChange={onChange} />
      )}
      <h2 className={classes.title}>人口推移グラフ</h2>
      <Chart populationData={population} />
    </main>
  );
};
