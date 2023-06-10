import { styled } from '@stitches/react';

export const Container = styled('div', {
  width: '18rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '> span': {
    color: '$gray500',
    display: 'block',
    fontSize: '0.8rem',
  }
});