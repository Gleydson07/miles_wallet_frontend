import { styled } from '@stitches/react';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
});

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  
  '> span': {
    marginTop: '-0.75rem',
    fontSize: '3.5rem',
    fontWeight: 700,
    color: 'transparent',
    backgroundImage: 'linear-gradient(to right, $yellow600, $yellow400)',
    backgroundClip: 'text',
    marginBottom: '0.5rem',
  }
});