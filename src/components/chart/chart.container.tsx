import { FunctionComponent } from 'react';
import { SeriesOptionsType, Options } from 'highcharts';
import { Chart as ChartComponent } from './chart';

type Props = {
  populationData: {
    prefName: string;
    data: { year: number; value: number }[];
  }[];
};

export const Chart: FunctionComponent<Props> = ({ populationData }) => {
  const series: SeriesOptionsType[] = [];
  const years: string[] = [];

  populationData.map((p) => {
    const data: number[] = [];

    p.data.map((pd) => {
      data.push(pd.value);
      years.push(String(pd.year));
    });

    series.push({
      type: 'line',
      name: p.prefName,
      data: data
    });
  });

  const options: Options = {
    title: {
      text: '都道府県別人口推移'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      title: {
        text: '年度'
      },
      categories: years
    },
    yAxis: {
      title: {
        text: '人口数'
      }
    },
    // when prefecture is not selected
    series:
      series.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : series
  };

  return <ChartComponent options={options} />;
};
