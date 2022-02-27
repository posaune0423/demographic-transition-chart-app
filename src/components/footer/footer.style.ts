import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    position: 'fixed',
    bottom: 0,
    height: '90px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: '#fafafa',
    paddingLeft: '2rem',
    color: '#424242',
  },
  title: {
    fontSize: '20px'
  }
}));
