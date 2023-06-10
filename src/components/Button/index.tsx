import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonVariant = 'default' | 'text' | 'cancel' | 'confirm' | 'neutral';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
  variant?: ButtonVariant;
  width? : string;
  margin? : string;
  padding? : string;
}

function Button({
  title,
  variant = 'default',
  width,
  margin,
  padding,
  ...rest
}: ButtonProps) {

  return (
    <Container
      variant={variant}
      css={{width, margin, padding}}
      {...rest}
    >
      {title}
    </Container>
  );
};

export default Button;