import { styled } from '@stitches/react';

export const Container = styled('button', {
  cursor: 'pointer',
  borderRadius: '0.125rem',
  border: 'none',
  outline: 'none',
  height: '2rem',
  padding: '0.25rem',
  transition: 'all 0.2s ease-in-out',

  variants: {
    variant: {
      default: {
        backgroundColor: '$white',
        color: '$black',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        fontWeight: 700,

        '&:hover': {
          backgroundColor: '$gray50',
        }
      },

      confirm: {
        backgroundColor: '$green400',
        color: '$white',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        fontWeight: 700,

        '&:hover': {
          backgroundColor: '$green500',
        }
      },

      cancel: {
        backgroundColor: '$red400',
        color: '$white',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        fontWeight: 700,

        '&:hover': {
          backgroundColor: '$red500',
        }
      },

      text: {
        backgroundColor: '$transparent',
        color: '$blue400',
        fontSize: '0.8rem',

        '&:hover': {
          color: '$blue500',
        }
      },

      neutral: {
        backgroundColor: '$gray50',
        color: '$black',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        fontWeight: 700,
        border: 'none',

        '&:hover': {
          backgroundColor: '$gray100',
        }
      },
    },
  },
});