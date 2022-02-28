import { FunctionComponent } from 'react';
import { useStyles } from './header.style';

export const Header: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <header className={classes.container}>
      <h1 className={classes.title}>📈 Demographic Transition Chart</h1>
    </header>
  );
};
