import { FunctionComponent } from 'react';
import { useStyles } from './home.style';
import { CheckField } from 'components/checkField/checkField';

type Props = {
  prefectures: { prefCode: number; prefName: string }[] | null;
  onChange: (name: string, prefName: number, check: boolean) => void;
};

export const Home: FunctionComponent<Props> = ({ prefectures, onChange }) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      {prefectures && (
        <CheckField prefectures={prefectures} onChange={onChange} />
      )}
    </main>
  );
};
