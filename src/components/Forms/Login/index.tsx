import Button from '../../Button';
import { Container, Form } from './styles';

interface FormLoginProps {
 
}

function FormLogin({}: FormLoginProps) {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const email: string = target.email.value;
    const password: string = target.password.value;
  }

  return (
    <Container>
      <h2>Login</h2>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            name="email"
            type="text"
            placeholder='E-mail'
          />
        </label>
        <label htmlFor="email">
          <input
            name="password"
            type="password"
            placeholder='Password'
          />
        </label>

        <Button
          type="submit"
          title="Entrar"
          variant="neutral"
        />
      </Form>
    </Container>
  );
};

export default FormLogin;