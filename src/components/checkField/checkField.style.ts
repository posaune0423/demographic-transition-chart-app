import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    color: '#424242',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 1rem'
  },
  checkbox: {
    appearance: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    zIndex: -1,
    position: 'absolute',
    left: '-10px',
    top: '-8px',
    display: 'block',
    margin: 0,
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6)',
    boxShadow: 'none',
    outline: 'none',
    opacity: 0,
    transform: 'scale(1)',
    pointerEvents: 'none',
    transition: 'opacity 0.3s, transform 0.2s'
  }
}));
