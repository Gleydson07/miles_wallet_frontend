import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
  '> h2': {
    color: '$black',
    fontWeight: 700,
    fontSize: '2rem',
  }
});

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
  width: '240px',

  '> label': {
    'input': {
      width: 'calc(100% - 16px)',
      padding: '0.5rem',
      border: 'none',
      outline: 'none',      
    },

    '& + label': {
      margin: '0.5rem 0 1rem 0',
    },

    '> button': {
      marginTop: '1rem',
    }
  },
});