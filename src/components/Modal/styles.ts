import { styled } from '@stitches/react';
import { keyframes } from '../../../stitches.config';
import * as Dialog from '@radix-ui/react-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: '$darkOpacity',
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '80vw',
  maxHeight: '70vh',
  padding: 24,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': { outline: 'none' },
});

export const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  color: '$white',
  fontSize: 17,
  fontWeight: 500,
});

export const DialogDescription = styled(Dialog.Description, {
  marginBottom: 20,
  color: '$gray500',
  fontSize: 15,
  lineHeight: 1.5,
});

export const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end'
});