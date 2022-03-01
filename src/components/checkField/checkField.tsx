import { FunctionComponent } from 'react';
import { useStyles } from './checkField.style';

type Props = {
  prefectures: { prefCode: number; prefName: string }[];
  onChange: (name: string, prefName: number, check: boolean) => void;
};

export const CheckField: FunctionComponent<Props> = ({
  prefectures,
  onChange
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {prefectures.map((prefecture) => (
        <div key={prefecture.prefName}>
          <label htmlFor={'checkbox' + prefecture.prefCode}>
            <input
              type="checkbox"
              name="pref_name"
              onChange={(event) =>
                onChange(
                  prefecture.prefName,
                  prefecture.prefCode,
                  event.target.checked
                )
              }
              id={'checkbox' + prefecture.prefCode}
            />
            <span>{prefecture.prefName + '　'}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
