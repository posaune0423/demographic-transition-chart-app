import { FunctionComponent } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Options } from 'highcharts';
import { useStyles } from './chart.style';

type Props = {
  options: Options;
};

export const Chart: FunctionComponent<Props> = ({ options }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
