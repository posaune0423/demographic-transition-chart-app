import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    color: '#424242',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 1rem'
  }
  // checkbox: {
  //   zIndex: 0,
  //   position: 'relative',
  //   display: 'inline-block',
  //   color: 'rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87)',
  //   fontFamily:
  //     'var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system)',
  //   fontSize: '16px',
  //   lineHeight: 1.5,
  //   '&:hover': {
  //     '& > input': { opacity: 0.04 }
  //   },
  //   '& > span': {
  //     display: 'inline-block',
  //     width: '100%',
  //     cursor: 'pointer',
  //     '&:before': {
  //       content: '""',
  //       display: 'inline-block',
  //       boxSizing: 'border-box',
  //       margin: '3px 11px 3px 1px',
  //       border: 'solid 2px',
  //       borderColor: 'rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6)',
  //       borderRadius: '2px',
  //       width: '18px',
  //       height: '18px',
  //       verticalAlign: 'top',
  //       transition: 'border-color 0.2s, background-color 0.2s'
  //     },
  //     '&:after': {
  //       content: '""',
  //       display: 'block',
  //       position: 'absolute',
  //       top: '3px',
  //       left: '1px',
  //       width: '10px',
  //       height: '5px',
  //       border: 'solid 2px transparent',
  //       borderRight: 'none',
  //       borderTop: 'none',
  //       transform: 'translate(3px, 4px) rotate(-45deg)'
  //     }
  //   }
  // },
  // input: {
  //   appearance: 'none',
  //   MozAppearance: 'none',
  //   WebkitAppearance: 'none',
  //   zIndex: -1,
  //   position: 'absolute',
  //   left: '-10px',
  //   top: '-8px',
  //   display: 'block',
  //   margin: '0',
  //   borderRadius: '50%',
  //   width: '40px',
  //   height: '40px',
  //   boxShadow: 'none',
  //   outline: 'none',
  //   opacity: 0,
  //   transform: 'scale(1)',
  //   pointerEvents: 'none',
  //   transition: 'opacity 0.3s, transform 0.2s',
  //   '&:checked': {
  //     '& > span': {
  //       '&:before': {
  //         borderColor: 'rgb(var(--pure-material-primary-rgb, 33, 150, 243))',
  //         backgroundColor:
  //           'rgb(var(--pure-material-primary-rgb, 33, 150, 243))'
  //       }
  //     }
  //   },
  //   '&:focus': { opacity: 0.12 },
  //   '&:indeterminate': {
  //     backgroundColor: 'rgb(var(--pure-material-primary-rgb, 33, 150, 243))'
  //   }
  // },
}));
