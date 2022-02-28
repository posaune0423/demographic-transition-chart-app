import { FunctionComponent } from 'react';
import { useStyles } from './footer.style';

export const Footer: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <footer className={classes.container}>
      <span className={classes.title}>Demographic Transition Chart</span>
    </footer>
  );
};
