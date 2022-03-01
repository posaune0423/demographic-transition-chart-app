import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    margin: '0 auto',
    '@media (min-width: 780px)': {
      width: '60%',
    },
    '@media (max-width: 781px)': {
      width: '80%',
    }
  }
}));
