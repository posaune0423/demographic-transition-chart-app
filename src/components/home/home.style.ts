import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  main: {
    padding: '0 2rem',
    color: 'inherit',
    backgroundColor: 'inherit',
    marginTop: '60px',
    marginBottom: '90px'
  },
  container: {
    minHeight: '100vh',
    padding: '4rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    margin: '0',
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
    '& a': {
      color: '#0070f3',
      textDecoration: 'none',
      '&:hover': { textDecoration: 'underline' },
      '&:focus': { textDecoration: 'underline' },
      '&:active': { textDecoration: 'underline' }
    }
  },
  description: {
    margin: '4rem 0',
    lineHeight: 1.5,
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  code: {
    background: '#fafafa',
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily:
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace'
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '800px'
  },
  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    maxWidth: '300px',
    '& h2': { margin: '0 0 1rem 0', fontSize: '1.5rem' },
    '& p': { margin: '0', fontSize: '1.25rem', lineHeight: 1.5 },
    '&:hover': {
      color: '#0070f3',
      borderColor: '#0070f3'
    },
    '&:focus': {
      color: '#0070f3',
      borderColor: '#0070f3'
    },
    '&:active': {
      color: '#0070f3',
      borderColor: '#0070f3'
    }
  },
  logo: { height: '1em', marginLeft: '0.5rem' }
}));
