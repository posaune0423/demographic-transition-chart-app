import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    position: 'fixed',
    height: '70px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: '#212121',
    paddingLeft: '2rem',
    color: 'white',
    boxShadow: '0 2px 4px rgb(0 0 0 / 50%)'
  },
  title: {
    fontSize: '20px'
  }
}));
